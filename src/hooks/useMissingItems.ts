import React from 'react';

import itemsApi from '../api/items';
import { ClassDescItems, Item } from '../types/item';

type State = {
  error: string;
  status: 'pending' | 'loading' | 'failure' | 'success';
  items: Item[];
};

const initialState: State = {
  error: '',
  status: 'pending',
  items: [],
};

type Action =
  | { type: 'FETCH_LOADING' }
  | { type: 'FETCH_FAILURE'; payload: string }
  | { type: 'FETCH_SUCCESS'; payload: Item[] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_LOADING':
      return { ...state, error: '', status: 'loading' };
    case 'FETCH_FAILURE':
      return {
        ...state,
        ...initialState,
        error: action.payload,
        status: 'failure',
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        status: 'success',
        items: action.payload,
      };
    default:
      return { ...initialState };
  }
}

interface UseMissingItemProps {
  bookId: string | undefined;
  items: Item[];
}

export default function useMissingItems(props: UseMissingItemProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const cache = React.useRef<ClassDescItems>({});

  React.useEffect(() => {
    async function fetchItemsFromClassDesc() {
      if (!props.bookId) {
        return;
      }

      dispatch({ type: 'FETCH_LOADING' });

      const classDescs = [...new Set(props.items.map((item) => item.classDesc))];
      const items: Item[] = [];

      const results: Promise<Item[]>[] = [];

      classDescs.forEach((classDesc) => {
        if (cache.current[classDesc]) {
          items.push(...cache.current[classDesc]);
          return;
        }

        results.push(
          itemsApi.list({
            bookId: props.bookId ?? '',
            classDesc,
          })
        );
      });

      const allFetchedItems = await Promise.all(results).catch((error) => {
        dispatch({ type: 'FETCH_FAILURE', payload: error });
        return [];
      });

      if (allFetchedItems.length === 0) {
        return;
      }

      allFetchedItems.forEach((fetchedItems) => {
        items.push(...fetchedItems);
        cache.current[fetchedItems[0]?.classDesc] = [...fetchedItems];
      });

      const missingItems = items.filter(
        (item) => !props.items.some((propItem) => propItem.id === item.id)
      );

      dispatch({ type: 'FETCH_SUCCESS', payload: missingItems });
    }

    if (props.bookId && props.items.length > 0) {
      fetchItemsFromClassDesc();
    }
  }, [props.bookId, props.items]);

  return {
    ...state,
  };
}

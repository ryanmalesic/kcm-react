import React from "react";
import itemsApi from "../api/items";
import { Item } from "../types/item";
import { fromIdentifierToSvic, fromIdentifierToUpc } from "../utils/item";

type State = {
  error: string;
  status: "pending" | "loading" | "failure" | "success";
  items: Item[];
};

const initialState: State = {
  error: "",
  status: "pending",
  items: [],
};

type Action =
  | { type: "ADD_ITEM_LOADING" }
  | { type: "ADD_ITEM_FAILURE"; payload: string }
  | { type: "ADD_ITEM_SUCCESS"; payload: Item };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_ITEM_LOADING":
      return { ...state, error: "", status: "loading" };
    case "ADD_ITEM_FAILURE":
      return {
        ...state,
        error: action.payload,
        status: "failure",
      };
    case "ADD_ITEM_SUCCESS":
      return {
        ...state,
        status: "success",
        items: state.items.some((item) => item.id === action.payload.id)
          ? [...state.items]
          : [...state.items, action.payload],
      };
    default:
      return { ...initialState };
  }
}

type UseItems = State & {
  addItem: (bookId: string | undefined, identifier: string) => Promise<void>;
};

export default function useItems(): UseItems {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const cache = React.useRef<{ [key: string]: Item }>({});

  const addItem = React.useCallback(
    async (bookId: string | undefined, identifier: string) => {
      if (!bookId || !(identifier.length === 7 || identifier.length === 12)) {
        return;
      }

      dispatch({ type: "ADD_ITEM_LOADING" });

      if (
        cache.current[fromIdentifierToSvic(identifier)] ||
        cache.current[fromIdentifierToUpc(identifier)]
      ) {
        dispatch({
          type: "ADD_ITEM_SUCCESS",
          payload:
            cache.current[fromIdentifierToSvic(identifier)] ??
            cache.current[fromIdentifierToUpc(identifier)],
        });

        return;
      }

      const item = await Promise.any([
        itemsApi.get({
          bookId,
          itemCode: fromIdentifierToSvic(identifier),
        }),
        itemsApi.get({
          bookId,
          upc: fromIdentifierToUpc(identifier),
        }),
      ]).catch((errors) => {
        dispatch({ type: "ADD_ITEM_FAILURE", payload: errors[0] });
        return undefined;
      });

      if (!item) {
        return;
      }

      cache.current[item.itemCode] = item;
      cache.current[item.upc] = item;
      dispatch({ type: "ADD_ITEM_SUCCESS", payload: item });
    },
    []
  );

  return {
    ...state,
    addItem,
  };
}

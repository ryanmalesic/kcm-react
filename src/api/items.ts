import { Item } from '../types/item';

interface GetProps {
  bookId: string;
  itemCode?: string;
  upc?: string;
}

async function get(props: GetProps): Promise<Item> {
  if (!props.itemCode && !props.upc) {
    throw new Error('Svic or Upc is required');
  }

  const url = `${process.env.REACT_APP_API_URL}/books/${props.bookId}/items?${
    props.itemCode ? 'itemCode' : 'upc'
  }=${props.itemCode ?? props.upc}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Item not found');
  }

  return response.json();
}

interface ListProps {
  classDesc: string;
  bookId: string;
}

async function list(props: ListProps): Promise<Item[]> {
  const url = `${process.env.REACT_APP_API_URL}/books/${props.bookId}/items?classDesc=${props.classDesc}&limit=1000`;
  const response = await fetch(url);
  return response.json();
}

const itemsApi = { get, list };

export default itemsApi;

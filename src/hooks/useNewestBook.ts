import React from "react";
import booksApi from "../api/books";
import { Book } from "../types/book";

type State = {
  error: string;
  status: "pending" | "loading" | "failure" | "success";
  book: Book | undefined;
};

const initialState: State = {
  error: "",
  status: "pending",
  book: undefined,
};

type Action =
  | { type: "FETCH_LOADING" }
  | { type: "FETCH_FAILURE"; payload: string }
  | { type: "FETCH_SUCCESS"; payload: Book };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_LOADING":
      return { ...state, error: "", status: "loading" };
    case "FETCH_FAILURE":
      return {
        ...state,
        ...initialState,
        error: action.payload,
        status: "failure",
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        status: "success",
        book: action.payload,
      };
    default:
      return { ...initialState };
  }
}

type UseNewestBook = State;

export default function useNewestBook(): UseNewestBook {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    async function getBooks() {
      dispatch({ type: "FETCH_LOADING" });

      try {
        const books = await booksApi.list({
          limit: 1,
          runDate: "",
          sort: "desc",
        });
        const book = books[0];

        if (!book) {
          throw new Error("No book found");
        }

        dispatch({ type: "FETCH_SUCCESS", payload: book });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: error.message });
      }
    }

    getBooks();
  }, []);

  return { ...state };
}

import { Book } from "../types/book";

export type GetParams = {
  limit: number;
  runDate: string;
  sort: "asc" | "desc";
};

const createGetUrl = (params: GetParams) => {
  let url = `${process.env.REACT_APP_API_URL}/books?limit=${params.limit}`;

  if (params.runDate) {
    url += `&runDate=${params.runDate}`;
  }

  if (params.sort) {
    url += `&sort=${params.sort}`;
  }

  return url;
};

async function list(params: GetParams): Promise<Book[]> {
  const url = createGetUrl(params);
  const response = await fetch(url);
  return response.json();
}

async function upload(files: File[]): Promise<void> {
  const results = await Promise.all(
    files.map((file) => {
      const url = `${process.env.REACT_APP_API_URL}/presigned?fileName=${file.name}`;
      return fetch(url);
    })
  );

  const jsons = await Promise.all(results.map((result) => result.json()));

  await Promise.all(
    jsons.map(({ url }, index) =>
      fetch(url, { method: "PUT", body: files[index] })
    )
  );
}

const booksApi = { list, upload };

export default booksApi;

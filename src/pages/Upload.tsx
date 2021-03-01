import React from 'react';

import booksApi from '../api/books';
import BookCard from '../components/BookCard';
import Card from '../components/Card';
import CardBody from '../components/CardBody';
import CardHeader from '../components/CardHeader';
import PageTitle from '../components/PageTitle';
import useNewestBook from '../hooks/useNewestBook';

const Upload: React.FC = () => {
  const hiddenInputRef = React.useRef<HTMLInputElement>(null);
  const [files, setFiles] = React.useState<File[]>([]);

  const { book } = useNewestBook();

  const handleFileClick = () => {
    hiddenInputRef.current?.click();
  };

  const handleFileDelete = (index: number) => () => {
    setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setFiles(Array.from(event.target.files ?? []));
  };

  const handleSubmit: React.FormEventHandler = async (event) => {
    event.preventDefault();

    await booksApi.upload(files).then(() => {
      /* eslint-disable-next-line no-alert */
      alert(
        'Book successfully uploaded. Please refresh the page every 30 seconds to check for the completion of the processing.'
      );
    });
  };

  return (
    <>
      <PageTitle
        title="Upload Master Price Books"
        subtitle={
          <>
            Last uploaded by <span className="font-medium text-gray-900 ">Tom Malesic</span> on
            February 18, 2021
          </>
        }
      />

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-4 lg:col-span-3">
          <Card>
            <CardHeader
              title="Select Files"
              subtitle="Choose the price book csv's from your local files."
            />
            <CardBody>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <button
                    className="flex flex-col items-center justify-center w-full p-8 text-gray-200 border-2 border-gray-200 border-dashed cursor-pointer hover:text-karns-blue hover:border-karns-blue"
                    onClick={handleFileClick}
                    type="button"
                  >
                    <input
                      hidden
                      multiple
                      accept=".csv"
                      type="file"
                      ref={hiddenInputRef}
                      onChange={handleFileChange}
                    />
                    <svg
                      className="w-16 h-16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Choose the master price book files from your computer</span>
                  </button>
                </div>

                {files.length > 0 && (
                  <>
                    <div>
                      <h3 className="text-sm text-gray-600">Selected files</h3>
                      <div className="mt-1 border border-gray-200 divide-y rounded-md">
                        {files.sort().map((file, index) => (
                          <div
                            className="flex items-center justify-between px-4 py-2"
                            key={file.name}
                          >
                            <div className="flex items-center py-1 space-x-2">
                              <div className="text-gray-600">
                                <svg
                                  className="w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <h4 className="text-sm text-gray-900">{file.name}</h4>
                            </div>
                            <button
                              className="px-2 py-1 text-sm hover:text-red-600 focus:outline-none"
                              type="button"
                              onClick={handleFileDelete(index)}
                            >
                              <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        className="px-3 py-2 text-sm font-medium text-white rounded-md bg-karns-blue focus:outline-none"
                        type="submit"
                      >
                        Upload
                      </button>
                    </div>
                  </>
                )}
              </form>
            </CardBody>
          </Card>
        </div>

        {book && (
          <div className="col-span-4 lg:col-span-1">
            <BookCard book={book} title="Last Uploaded Book" />
          </div>
        )}
      </div>
    </>
  );
};

export default Upload;

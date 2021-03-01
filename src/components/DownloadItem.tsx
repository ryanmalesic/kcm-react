import React from 'react';

interface DownloadItemProps {
  onDownloadClick: () => void;
}

const DownloadItem: React.FC<DownloadItemProps> = (
  props: React.PropsWithChildren<DownloadItemProps>
) => {
  const { children, onDownloadClick } = props;

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-2">
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
        <h4 className="text-sm text-gray-900">{children}</h4>
      </div>
      <button
        className="px-2 py-1 text-sm text-karns-blue focus:outline-none"
        onClick={onDownloadClick}
        type="button"
      >
        Download
      </button>
    </div>
  );
};

export default DownloadItem;

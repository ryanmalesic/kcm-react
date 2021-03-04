import React from 'react';

interface DownloadProps {
  title: React.ReactNode;
}

const Download: React.FC<DownloadProps> = (
  props: React.PropsWithChildren<DownloadProps>
) => {
  const { children, title } = props;

  return (
    <div className="space-y-2">
      <h3 className="text-sm text-gray-600">{title}</h3>
      <div className="border border-gray-200 rounded-md divide-y">
        {children}
      </div>
    </div>
  );
};

export default Download;

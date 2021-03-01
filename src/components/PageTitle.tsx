import React from 'react';

interface PageTitleProps {
  buttons?: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = (props: PageTitleProps) => {
  const { buttons, title, subtitle } = props;

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold leading-none text-gray-900">{title}</h1>
        <span className="text-sm text-gray-600">{subtitle}</span>
      </div>

      <div>{buttons}</div>
    </div>
  );
};

PageTitle.defaultProps = {
  buttons: <></>,
};

export default PageTitle;

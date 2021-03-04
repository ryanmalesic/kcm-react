import React from 'react';

interface GridLabelItemProps {
  body: string;
  title: string;
}

const GridLabelItem: React.FC<GridLabelItemProps> = (
  props: GridLabelItemProps
) => {
  const { body, title } = props;

  return (
    <div className="break-words">
      <h3 className="text-sm text-gray-600">{title}</h3>
      <span className="text-sm text-gray-900">{body}</span>
    </div>
  );
};

export default GridLabelItem;

import React from 'react';

interface CardProps {}

const Card: React.FC<CardProps> = (props: React.PropsWithChildren<CardProps>) => {
  const { children } = props;

  return <div className="bg-white border border-gray-200 rounded-md shadow-sm">{children}</div>;
};

export default Card;

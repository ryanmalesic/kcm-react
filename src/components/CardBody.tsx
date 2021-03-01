import React from 'react';

interface CardBodyProps {}

const CardBody: React.FC<CardBodyProps> = (props: React.PropsWithChildren<CardBodyProps>) => {
  const { children } = props;

  return <div className="p-6">{children}</div>;
};

export default CardBody;

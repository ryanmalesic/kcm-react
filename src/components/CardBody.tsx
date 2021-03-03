import React from "react";

const CardBody: React.FC = (props) => {
  return <div className="p-6">{props.children}</div>;
};

export default CardBody;

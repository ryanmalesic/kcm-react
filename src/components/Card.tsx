import React from 'react';

const Card: React.FC = (props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm">
      {props.children}
    </div>
  );
};

export default Card;

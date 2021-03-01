import clsx from 'clsx';
import React from 'react';

interface CardHeaderProps {
  borderless?: boolean;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = (props: CardHeaderProps) => {
  const { borderless, title, subtitle } = props;

  return (
    <div className={clsx('px-6 py-4 border-b border-gray-200', { 'border-none': borderless })}>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <span className="text-sm text-gray-600">{subtitle}</span>
    </div>
  );
};

CardHeader.defaultProps = {
  borderless: false,
};

export default CardHeader;

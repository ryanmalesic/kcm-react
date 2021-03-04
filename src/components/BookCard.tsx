import React from 'react';

import Card from './Card';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
  title: string;
}

const BookCard: React.FC<BookCardProps> = (props: BookCardProps) => {
  const { book, title } = props;

  return (
    <Card>
      <CardHeader title={title} subtitle="" />
      <CardBody>
        <div className="grid lg:grid-cols-1 grid-cols-2 gap-4">
          <div className="break-words">
            <h3 className="text-sm text-gray-600">File Name</h3>
            <span className="text-sm text-gray-900">{book.fileName}</span>
          </div>
          <div className="break-words">
            <h3 className="text-sm text-gray-600">File Size</h3>
            <span className="text-sm text-gray-900">{book.fileSize} MB</span>
          </div>
          <div className="break-words">
            <h3 className="text-sm text-gray-600">Run Date</h3>
            <span className="text-sm text-gray-900">{book.runDate}</span>
          </div>
          <div className="break-words">
            <h3 className="text-sm text-gray-600">Class Descriptions</h3>
            <span className="text-sm text-gray-900">
              {book.classDescs.length}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BookCard;

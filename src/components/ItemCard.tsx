import React from 'react';

import { Item } from '../types/item';
import Card from './Card';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

interface ItemCardProps {
  item: Item | undefined;
  title: React.ReactNode;
}

const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) => {
  const { item, title } = props;

  return (
    <Card>
      <CardHeader title={title} subtitle="" />
      <CardBody>
        {!item ? (
          <div className="flex items-center justify-center h-32 ">
            <span className="text-sm text-gray-900">No Item</span>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h3 className="text-sm text-gray-600">SVIC</h3>
              <span className="text-sm text-gray-900">{item.itemCode}</span>
            </div>
            <div className="col-span-1">
              <h3 className="text-sm text-gray-600">UPC</h3>
              <span className="text-sm text-gray-900">{item.upc}</span>
            </div>
            <div className="col-span-1">
              <h3 className="text-sm text-gray-600">Brand</h3>
              <span className="text-sm text-gray-900">{item.brand}</span>
            </div>
            <div className="col-span-1">
              <h3 className="text-sm text-gray-600">Description</h3>
              <span className="text-sm text-gray-900">{item.description}</span>
            </div>
            <div className="col-span-1">
              <h3 className="text-sm text-gray-600">Size</h3>
              <span className="text-sm text-gray-900">{item.size}</span>
            </div>
            <div className="col-span-1">
              <h3 className="text-sm text-gray-600">Pack</h3>
              <span className="text-sm text-gray-900">{item.pack}</span>
            </div>
            <div className="col-span-1">
              <h3 className="text-sm text-gray-600">Class Description</h3>
              <span className="text-sm text-gray-900">{item.classDesc}</span>
            </div>
            <div className="col-span-1">
              <h3 className="text-sm text-gray-600">Subclass Description</h3>
              <span className="text-sm text-gray-900">
                {item.subClassDescription}
              </span>
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default ItemCard;

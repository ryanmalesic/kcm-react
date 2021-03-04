import React from 'react';

import { CategoryDetails } from '../types/category';

import Card from './Card';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

interface CategoryInfoFormCardProps {
  categoryDetails: CategoryDetails;
  onCategoryDetailsChange: (
    prop: keyof CategoryDetails
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CategoryInfoFormCard: React.FC<CategoryInfoFormCardProps> = (
  props: CategoryInfoFormCardProps
) => {
  const { categoryDetails, onCategoryDetailsChange } = props;

  return (
    <Card>
      <CardHeader
        title="Category Details"
        subtitle="Information about the category."
      />
      <CardBody>
        <form className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
          <label className="text-sm text-gray-600" htmlFor="name">
            Name
            <input
              className="block pl-0 text-sm text-gray-900 border-0 border-b border-gray-300 focus:ring-0 focus:border-karns-blue"
              id="name"
              placeholder="Canned Dog Food"
              type="text"
              value={categoryDetails.name}
              onChange={onCategoryDetailsChange('name')}
            />
          </label>

          <div />

          <div>
            <h3 className="text-sm text-gray-600">Store</h3>
            <select className="w-16 px-0 font-sans text-sm text-gray-900 border-0 border-b border-gray-300 focus:ring-0 focus:border-karns-blue">
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="13">13</option>
            </select>
          </div>

          <label className="text-sm text-gray-600" htmlFor="aisle">
            Aisle
            <input
              className="block w-16 pl-0 text-sm text-gray-900 border-0 border-b border-gray-300 focus:ring-0 focus:border-karns-blue"
              id="aisle"
              placeholder="13B"
              type="text"
              value={categoryDetails.aisle}
              onChange={onCategoryDetailsChange('aisle')}
            />
          </label>

          <label className="text-sm text-gray-600" htmlFor="length">
            Length (ft)
            <input
              className="block w-16 pl-0 text-sm text-gray-900 border-0 border-b border-gray-300 focus:ring-0 focus:border-karns-blue"
              id="length"
              placeholder="24"
              type="text"
              value={categoryDetails.length}
              onChange={onCategoryDetailsChange('length')}
            />
          </label>

          <label className="text-sm text-gray-600" htmlFor="dimensions">
            Shelf Dimensions
            <input
              className="block w-16 pl-0 text-sm text-gray-900 border-0 border-b border-gray-300 focus:ring-0 focus:border-karns-blue"
              id="dimensions"
              placeholder="2' x 4'"
              type="text"
              value={categoryDetails.shelfDimensions}
              onChange={onCategoryDetailsChange('shelfDimensions')}
            />
          </label>
        </form>
      </CardBody>
    </Card>
  );
};

export default CategoryInfoFormCard;

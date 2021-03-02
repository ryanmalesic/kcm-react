import React from 'react';
import PageTitle from '../components/PageTitle';

const CategoryCreate: React.FC = () => (
  <>
    <PageTitle
      title="Create a New Category"
      subtitle="Chart categories in a fraction of the time"
    />

    <main className="grid grid-cols-4 gap-6">
      <div className="col-span-4 lg:col-span-3 space-y-6" />

      <div className="col-span-4 lg:col-span-1" />
    </main>
  </>
);

export default CategoryCreate;

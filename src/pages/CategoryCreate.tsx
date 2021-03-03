import React from "react";
import CategoryInfoFormCard from "../components/CategoryInfoFormCard";
import PageTitle from "../components/PageTitle";
import { CategoryDetails } from "../types/category";

const CategoryCreate: React.FC = () => {
  const [categoryDetails, setCategoryDetails] = React.useState<CategoryDetails>(
    {
      name: "",
      store: "",
      aisle: "",
      length: "",
      shelfDimensions: "",
    }
  );

  const handleCategoryDetailsChange = (prop: keyof CategoryDetails) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategoryDetails((state) => ({ ...state, [prop]: event.target.value }));
  };

  return (
    <>
      <PageTitle
        title="Create a New Category"
        subtitle="Chart categories in a fraction of the time"
      />

      <main className="grid grid-cols-4 gap-6">
        <div className="col-span-4 space-y-6 lg:col-span-3" />

        <div className="col-span-4 lg:col-span-1">
          <CategoryInfoFormCard
            categoryDetails={categoryDetails}
            onCategoryDetailsChange={handleCategoryDetailsChange}
          />
        </div>
      </main>
    </>
  );
};

export default CategoryCreate;

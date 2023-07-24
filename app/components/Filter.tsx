import React from "react";

import FilterTag from "./FilterTag";

interface Props {
  filters: string[];
  category: string;
  isVisible: boolean
}

const Filter = ({ filters, category, isVisible }: Props) => {
  return (
    <div className={`${isVisible ? "block" : "hidden"}`}>
      <div className={`bg-black text-white text-center py-2 px-1`}>
        <h1>{category}</h1>
      </div>
      <div className="flex flex-wrap justify-center my-2">
      {filters.map((filter: string) => (
        <FilterTag key={filter} filter={filter} />
        ))}
      </div>
    </div>
  );
};

export default Filter;

import React from "react";

import FilterTag from "./FilterTag";

interface Props {
  filters: string[];
  category: string;
  isVisible: boolean;
}

const Filter = ({ filters, category}: Props) => {
  return (
    <div>
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

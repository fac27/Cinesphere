import React from "react";

import FilterTag from "./FilterTag";

interface Props {
  filters: string[];
  category: string;
  selectedFilters: string[];
  onFilterClick: (filter: string) => void;
}

const Filter = ({
  filters,
  category,
  selectedFilters,
  onFilterClick,
}: Props) => {
  const handleClick = (filter: string) => {
    onFilterClick(filter);
  };

  return (
    <div>
      <div className={`bg-black text-white text-center py-2 px-1`}>
        <h1>{category}</h1>
      </div>
      <div className="flex flex-wrap justify-center my-2">
        {filters.map((filter: string) => (
          <FilterTag
            key={filter}
            filter={filter}
            onClick={() => handleClick(filter)}
            isSelected={selectedFilters.includes(filter)}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;

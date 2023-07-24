import React from "react";

import FilterTag from "./FilterTag";

interface Props {
  filters: string[]
  category: string
}

const Filter = ({ filters, category }: Props) => {
  return (
    <>
      <div className="bg-black text-white text-center p-2">
        <h1>{category}</h1>
      </div>
      {filters.map((filter: string) => (
        <FilterTag key={filter} filter={filter} />
      ))}
    </>
  );
};

export default Filter;

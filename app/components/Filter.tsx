import { FC } from "react";

import FilterTag from "./FilterTag";

interface Props {
  filters: string[];
  category: string;
  selectedFilters: string[];
  // eslint-disable-next-line no-unused-vars
  selectFilter: (filter: string) => string[];
}

const Filter: FC<Props> = ({
  filters,
  category,
  selectedFilters,
  selectFilter,
}) => {
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
            selectFilter={() => selectFilter(filter)}
            isSelected={selectedFilters.includes(filter)}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;

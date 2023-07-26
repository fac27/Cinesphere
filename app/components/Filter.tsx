import { FC } from "react";

import FilterTag from "./FilterTag";

interface Props {
  filters: string[];
  category: string;
}

const Filter: FC<Props> = ({ filters, category }: Props) => {
  return (
    <div>
      <div className={`bg-black text-white text-center py-2 px-1`}>
        <h1>{category}</h1>
      </div>
      <div className="flex flex-wrap justify-center my-2">
        {filters.map((filter: string) => (
          <FilterTag key={filter} filter={filter} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Filter;

import React, { Dispatch, SetStateAction } from "react";

import Filter from "./Filter";
import { eras } from "@/Data/Filters";
import { useFilters } from "../Context/store";

interface Props {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const FilterModal = ({
  isVisible,
  setIsVisible
}: Props): React.JSX.Element => {

  const filterContext = useFilters();
  const genres = filterContext?.genres as string[];
  const languages = filterContext?.languages as string[];

  const filterArr = [
    { name: "GENRES", filters: genres },
    { name: "LANGUAGES", filters: languages },
    { name: "ERAS", filters: eras },
  ];

  
  return (
    <dialog open={isVisible} className="text-center my-4 z-50">
      {filterArr.map((filter, index) => {
        return (
          <Filter
            key={filter.name + index}
            filters={filter.filters}
            category={filter.name}
          />
        );
      })}
      <button
        type="button"
        onClick={() => {
          setIsVisible(false);
        }}
        className="p-2 text-white bg-black rounded-lg"
      >
        Done
      </button>
    </dialog>
  );
};

export default FilterModal;

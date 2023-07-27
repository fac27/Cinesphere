import React, { Dispatch, SetStateAction } from "react";
import Filter from "./Filter";
import { genres, languages, eras } from "@/Data/Filters";

interface Props {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  filterArr?: string[];
}

const FilterModal = ({ isVisible, setIsVisible }: Props): React.JSX.Element => {
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

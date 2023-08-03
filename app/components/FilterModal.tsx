import React, { Dispatch, SetStateAction } from "react";

import Filter from "./Filter";

interface Props {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  filterArr: { name: string; filters: string[] }[];
}

const FilterModal = ({
  isVisible,
  setIsVisible,
  filterArr,
}: Props): React.JSX.Element => {
  return (
    <dialog
      open={isVisible}
      className="w-5/6 md:w-1/2 p-5 rounded-2xl border border-black text-center my-4 z-40"
    >
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

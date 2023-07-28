import React, { Dispatch, SetStateAction } from "react";
import { BiSliderAlt } from "react-icons/bi";

interface Props {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const FilterButton = ({ setIsVisible }: Props) => {
  return (
      <button
        onClick={() => {
          setIsVisible((prev: boolean) => !prev);
        }}
        type="button"
        className="p-2 flex items-center gap-1 rounded-lg border border-black ml-3"
      >
        <BiSliderAlt />
        Filter
      </button>
  );
};

export default FilterButton;

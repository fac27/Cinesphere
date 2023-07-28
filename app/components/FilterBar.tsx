import React, { Dispatch, SetStateAction } from "react";
import { BiSliderAlt } from "react-icons/bi";

interface Props {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const FilterBar = ({ setIsVisible }: Props) => {
  return (
    <div className="flex flex-row justify-center mt-4">
      <input
        type="text"
        className="p-2 w-40 flex border border-black rounded-lg"
        placeholder="search"
      ></input>
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
    </div>
  );
};

export default FilterBar;
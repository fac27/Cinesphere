import React from "react";

type Props = {
  filter: string;
  onClick: () => void;
  isSelected: boolean;
};

const FilterTag = ({ filter, onClick, isSelected }: Props) => {
  return (
    <button
      className={`bg-slate-300 rounded border-black mx-1 my-1 p-0.5 ${
        isSelected ? "opacity-50" : ""
      }`}
      onClick={onClick}
    >
      {filter}
    </button>
  );
};

export default FilterTag;

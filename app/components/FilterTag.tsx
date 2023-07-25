type Props = {
  filter: string;
  selectFilter: () => string[];
  isSelected: boolean;
};

const FilterTag = ({ filter, selectFilter, isSelected }: Props) => {
  return (
    <button
      className={`bg-slate-300 rounded border-black mx-1 my-1 p-0.5 ${
        isSelected ? " bg-purple-600 text-white" : ""
      }`}
      onClick={selectFilter}
    >
      {filter}
    </button>
  );
};

export default FilterTag;

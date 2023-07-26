import { useFilters } from "../Context/store";

type Props = {
  filter: string;
  category: string;
};

const FilterTag = ({ filter, category }: Props) => {
  const selectedGenres = useFilters();
  const selectedLanguages = useFilters();
  const selectedDecades = useFilters();

  console.log(selectedDecades, selectedGenres, selectedLanguages);
  const selectFilter = (category: string) => {
    console.log(category);
  };
  return (
    <button
      className={`bg-slate-300 rounded border-black mx-1 my-1 p-0.5`}
      onClick={() => selectFilter(category)}
    >
      {filter}
    </button>
  );
};

export default FilterTag;

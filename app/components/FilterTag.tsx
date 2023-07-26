import React from "react";
import { useFilters } from "../Context/store";

type Props = {
  filter: string;
  category: string;
};

const FilterTag = ({ filter, category }: Props) => {
  const filterContext = useFilters();

  const selectFilter = (category: string): void => {
    if (category === "GENRE") {
      const selectedGenres = filterContext?.selectedGenres as string[];
      const setSelectedGenres =
        filterContext?.setSelectedGenres as React.Dispatch<
          React.SetStateAction<string[]>
        >;
      filterByCategory(selectedGenres, setSelectedGenres, filter);
    }
    if (category == "LANGUAGE") {
      const selectedLanguages = filterContext?.selectedLanguages as string[];
      const setSelectedLanguages =
        filterContext?.setSelectedLanguages as React.Dispatch<
          React.SetStateAction<string[]>
        >;
      filterByCategory(selectedLanguages, setSelectedLanguages, filter);
    }
    if (category == "ERA") {
      const selectedDecades = filterContext?.selectedDecades as string[];
      const setSelectedDecades =
        filterContext?.setSelectedDecades as React.Dispatch<
          React.SetStateAction<string[]>
        >;
      filterByCategory(selectedDecades, setSelectedDecades, filter);
    }
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

function filterByCategory(
  state: string[],
  setState: React.Dispatch<React.SetStateAction<string[]>>,
  filter: string
) {
  const isInArr = state.find((genre: string) => genre === filter);
  if (isInArr) {
    setState((prevGenres: string[]) =>
      prevGenres.filter((genre: string) => genre !== filter)
    );
  } else {
    setState((prevGenres: string[]) => [...prevGenres, filter]);
  }
}

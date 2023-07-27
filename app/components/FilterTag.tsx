import React, { useState } from "react";
import { useFilters } from "../Context/store";

type Props = {
  filter: string;
  category: string;
};

const FilterTag = ({ filter, category }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  const filterContext = useFilters();

  const selectFilter = (category: string): void => {
    if (category.toUpperCase() === "GENRES") {
      const selectedGenres = filterContext?.selectedGenres as string[];
      const setSelectedGenres =
        filterContext?.setSelectedGenres as React.Dispatch<
          React.SetStateAction<string[]>
        >;
      filterByCategory(selectedGenres, setSelectedGenres, filter);
    }
    if (category.toUpperCase() == "LANGUAGES") {
      const selectedLanguages = filterContext?.selectedLanguages as string[];
      const setSelectedLanguages =
        filterContext?.setSelectedLanguages as React.Dispatch<
          React.SetStateAction<string[]>
        >;
      filterByCategory(selectedLanguages, setSelectedLanguages, filter);
    }
    if (category.toUpperCase() == "ERAS") {
      const selectedDecades = filterContext?.selectedDecades as string[];
      const setSelectedDecades =
        filterContext?.setSelectedDecades as React.Dispatch<
          React.SetStateAction<string[]>
        >;
      filterByCategory(selectedDecades, setSelectedDecades, filter);
    }
  };

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
      setIsSelected(false);
    } else {
      setState((prevGenres: string[]) => [...prevGenres, filter]);
      setIsSelected(true);
    }
  }

  return (
    <button
      className={`bg-slate-300 rounded border-black mx-1 my-1 p-0.5 ${
        isSelected ? "bg-purple-500 text-white" : ""
      }`}
      onClick={() => selectFilter(category)}
    >
      {filter}
    </button>
  );
};

export default FilterTag;

"use client";

import { useContext, createContext, useState } from "react";

const FilterContext = createContext<string[]>(["string"]);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  //state stuff
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedDecades, setSelectedDecades] = useState<string[]>([]);

  return (
    <FilterContext.Provider
      value={{
        selectedGenres,
        setSelectedGenres,
        selectedLanguages,
        setSelectedLanguages,
        selectedDecades,
        setSelectedDecades,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  return useContext(FilterContext);
};

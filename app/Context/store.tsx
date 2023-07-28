"use client";

import React, { useContext, createContext, useState, ReactNode } from "react";

interface FilterContextProps {
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLanguages: string[];
  setSelectedLanguages: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDecades: string[];
  setSelectedDecades: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAmenities: string[];
  setSelectedAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAccessibility: string[];
  setSelectedAccessibility: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>(
    [] as string[]
  );
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    [] as string[]
  );
  const [selectedDecades, setSelectedDecades] = useState<string[]>(
    [] as string[]
  );
  const [selectedAccessibility, setSelectedAccessibility] = useState<string[]>(
    [] as string[]
  );
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    [] as string[]
  );

  return (
    <FilterContext.Provider
      value={{
        selectedGenres,
        setSelectedGenres,
        selectedLanguages,
        setSelectedLanguages,
        selectedDecades,
        setSelectedDecades,
        selectedAmenities,
        setSelectedAmenities,
        selectedAccessibility,
        setSelectedAccessibility,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  return useContext(FilterContext);
};

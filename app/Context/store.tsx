"use client";

import React, { useContext, createContext, useState, ReactNode } from "react";

interface FilterContextProps {
  eras: string[];
  setEras: React.Dispatch<React.SetStateAction<string[]>>;
  genres: string[];
  setGenres: React.Dispatch<React.SetStateAction<string[]>>;
  languages: string[];
  setLanguages: React.Dispatch<React.SetStateAction<string[]>>;
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
  selectedCinemas: string[];
  setSelectedCinemas: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDates: string[];
  setSelectedDates: React.Dispatch<React.SetStateAction<string[]>>;
  selectedFilms: string[];
  setSelectedFilms: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [eras, setEras] = useState<string[]>([] as string[]);
  const [languages, setLanguages] = useState<string[]>([] as string[]);
  const [genres, setGenres] = useState<string[]>([] as string[]);
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
  const [selectedCinemas, setSelectedCinemas] = useState<string[]>(
    [] as string[]
  );
  const [selectedDates, setSelectedDates] = useState<string[]>([] as string[]);
  const [selectedFilms, setSelectedFilms] = useState<string[]>([] as string[]);

  return (
    <FilterContext.Provider
      value={{
        eras,
        setEras,
        languages,
        setLanguages,
        genres,
        setGenres,
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
        selectedCinemas,
        setSelectedCinemas,
        selectedDates,
        setSelectedDates,
        selectedFilms,
        setSelectedFilms,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  return useContext(FilterContext);
};

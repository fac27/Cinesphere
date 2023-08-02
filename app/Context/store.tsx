"use client";

import React, { useContext, createContext, useState, ReactNode } from "react";

interface FilterContextProps {
  distance: { cinema: string, distance: string }[]| undefined;
  setDistance: React.Dispatch<React.SetStateAction<{ cinema: string, distance: string }[]| undefined>>;
  postcode: string;
  setPostcode: React.Dispatch<React.SetStateAction<string>>;
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
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [distance, setDistance] = useState<{ cinema: string, distance: string }[]>();
  const [postcode, setPostcode] = useState<string>(
    "" as string);
  const [eras, setEras] = useState<string[]>(
    [] as string[]);
  const [languages, setLanguages] = useState<string[]>(
    [] as string[]);
  const [genres, setGenres] = useState<string[]>(
    [] as string[]
  );
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
        distance,
        setDistance,
        postcode,
        setPostcode,
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  return useContext(FilterContext);
};

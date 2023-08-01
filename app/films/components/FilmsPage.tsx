"use client";
import FilmCard from "./FilmCard";
import React, { useEffect, useState } from "react";

import { useFilters } from "@/app/Context/store";
import { FilmType } from "@/Types/Object-Interfaces";
import { genreCodes, languageCodes } from "@/Data/FilteringCodes";
import FilterModal from "@/app/components/FilterModal";
import FilterBar from "./FilterBar";
import { convertCodesToNames } from "@/Data/FilteringCodes";
import getAllFilms from "@/Lib/getFilmData";

const FilmsContainer = () => {
  const [filmData, setFilmData] = useState<any[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const filterContext = useFilters();

  const setGenres = filterContext?.setGenres as React.Dispatch<
    React.SetStateAction<string[]>
  >;
  const setLanguages = filterContext?.setLanguages as React.Dispatch<
    React.SetStateAction<string[]>
  >;
  const setEras = filterContext?.setEras as React.Dispatch<
    React.SetStateAction<string[]>
  >;

  useEffect(() => {
    const fetchData = async () => {
      const film_temp_Data = await getAllFilms();
      setFilmData(film_temp_Data);
    };
    
    // set genre filters
    const genreArr: string[] = [];
    filmData.forEach((film) => genreArr.push(film.genre));
    const genreArrFlat = genreArr
      .join(",")
      .split(",")
      .map((word) => word.trim());
    const genreArrClean = Array.from(new Set(genreArrFlat));
    setGenres(genreArrClean);

    // set language filters
    const languageSet = new Set();
    filmData.forEach((film) => languageSet.add(film.original_language));
    const langCodeArr: any = Array.from(languageSet);
    const langNameArr = convertCodesToNames(langCodeArr);
    setLanguages(langNameArr);

    // set era filters
    const dateSet = new Set();
    filmData.forEach((film) => dateSet.add(film.release_date));
    const dateArr = Array.from(dateSet);
    const decadeSet = new Set(
      dateArr.map((date: any) =>
        String(Math.floor(Number(date.slice(0, 4)) / 10) * 10)
      )
    );
    const sortedDecades = Array.from(decadeSet).sort(
      (a, b) => parseInt(a) - parseInt(b)
    );
    setEras(sortedDecades);

    fetchData();
  }, [filmData, setEras, setLanguages, setGenres]);

  const genres = filterContext?.genres as string[];
  const languages = filterContext?.languages as string[];
  const eras = filterContext?.eras as string[];

  const filterArr = [
    { name: "GENRES", filters: genres },
    { name: "LANGUAGES", filters: languages },
    { name: "ERAS", filters: eras },
  ];

  const filteredFilmData = filmData.filter((film) => {
    console.log(film);
    const selectedGenres = filterContext?.selectedGenres as string[];
    const selectedLanguages = filterContext?.selectedLanguages as string[];
    const selectedDecades = filterContext?.selectedDecades as string[];
    const genreCodesArr = [];
    const languageCodesArr = [];
    for (let genre of selectedGenres) {
      genreCodesArr.push(genreCodes[genre]);
    }
    for (let language of selectedLanguages) {
      languageCodesArr.push(languageCodes[language]);
    }
    const isGenreMatch =
      selectedGenres.length === 0 ||
      selectedGenres.some((selectedGenre: string) =>
        film.genre.includes(selectedGenre)
      );

    const isLanguageMatch =
      selectedLanguages.length === 0 ||
      languageCodesArr.some((languageCode) =>
        film.original_language.includes(languageCode)
      );

    const isDecadeMatch =
      selectedDecades.length === 0 ||
      selectedDecades.some((decade) => {
        const filmReleaseYear = parseInt(film.release_date.substring(0, 4));
        const selectedDecadeStartYear = parseInt(decade);
        return (
          filmReleaseYear >= selectedDecadeStartYear &&
          filmReleaseYear <= selectedDecadeStartYear + 9
        );
      });

    return isGenreMatch && isDecadeMatch && isLanguageMatch;
  });

  return (
    <>
      <FilterModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        filterArr={filterArr}
      />
      <FilterBar setIsVisible={setIsVisible} />
      <div className="flex-col flex items-center mt-4">
        {filteredFilmData.map((film: FilmType) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </>
  );
};

export default FilmsContainer;

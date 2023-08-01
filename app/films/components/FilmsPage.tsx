"use client";
// import { getImdbIds } from "@/Utils/getImdbIds";
import FilmCard from "./FilmCard";
import React, { useEffect, useState } from "react";

// import { getFilmData } from "@/Utils/getFilmData";
import { useFilters } from "@/app/Context/store";
import { FilmType } from "@/Types/Object-Interfaces";
// import screenings from "@/Data/Screenings";
import { genreCodes, languageCodes } from "@/Data/FilteringCodes";
import FilterModal from "@/app/components/FilterModal";
import FilterBar from "./FilterBar";
import { convertCodesToNames } from "@/Data/FilteringCodes";
import getAllFilms from "@/Lib/getAllFilms";

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
      const film_temp_Data = await getAllFilms()
      setFilmData(film_temp_Data)
      
      
      // set genre filters 
      const genreSet = new Set();
      filmData.forEach(film => genreSet.add(film.genre));
      const genreArr: any = Array.from(genreSet);
      setGenres(genreArr);

      // set language filters
      const languageSet = new Set()
      filmData.forEach(film => (languageSet.add(film.original_language)))
      const langCodeArr: any = Array.from(languageSet)
      const langNameArr = convertCodesToNames(langCodeArr)
      setLanguages(langNameArr)
      

      // set era filters
      const dateSet = new Set()
      filmData.forEach(film => (dateSet.add(film.release_date)))
      const dateArr = Array.from(dateSet);
      const decadeSet = new Set(dateArr.map((date: any) => String(Math.floor(Number(date.slice(0, 4)) / 10) * 10)));
      const sortedDecades = Array.from(decadeSet).sort((a, b) => parseInt(a) - parseInt(b));
      setEras(sortedDecades)

    };
    fetchData()
  }, [filmData, setGenres, setEras, setLanguages]);

  // create filterArr

  const genres = filterContext?.genres as string[];
  const languages = filterContext?.languages as string[];
  const eras = filterContext?.eras as string[];

  const filterArr = [
    { name: "GENRES", filters: genres },
    { name: "LANGUAGES", filters: languages },
    { name: "ERAS", filters: eras },
  ];

  const filteredFilmData = filmData.filter((film) => {
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
      genreCodesArr.some((genreCode) =>
        film.genres.find(
          (genre: { id: number; name: string }) => genre.id === genreCode
        )
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
      <FilterBar setIsVisible={setIsVisible}/>
      <div className="flex-col flex items-center mt-4">
        {filteredFilmData.map((film: FilmType) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </>
  );
};

export default FilmsContainer;

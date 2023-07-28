import { getImdbIds } from "@/Utils/getImdbIds";
import FilmCard from "./FilmCard";
import React, { useEffect, useState } from "react";
import { BiSliderAlt } from "react-icons/bi";

import { getFilmData } from "@/Utils/getFilmData";
import { useFilters } from "@/app/Context/store";
import { FilmType } from "@/Types/Object-Interfaces";
import screenings from "@/Data/Screenings";
import { genreCodes, languageCodes } from "@/Data/FilteringCodes";
import FilterModal from "@/app/components/FilterModal";

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

  useEffect(() => {
    const imdb_id_arr = getImdbIds(screenings);

    const fetchData = async () => {
      try {
        const filmDataArr = await Promise.all(
          imdb_id_arr.map((element: any) => getFilmData(element))
        );
        setFilmData(filmDataArr);
      } catch (error: unknown) {
        console.error(error);
      }
      
      // set genre filters 
      const genreSet = new Set();
      filmData.forEach((film) => genreSet.add(film.genres[0].name));
      const genreArr: any = Array.from(genreSet);
      setGenres(genreArr);

      // set language filters
      const languageSet = new Set()
      filmData.forEach((film) => (languageSet.add(film.original_language)))
      const languageCodeArr: any = Array.from(languageSet)
      setLanguages(languageCodeArr)

    };
    fetchData();
  }, [filmData, setGenres]);

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
      />
      <div className="flex flex-row justify-center mt-4">
        <input
          type="text"
          className="p-2 w-40 flex border border-black rounded-lg"
          placeholder="search"
        ></input>
        <button
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
          type="button"
          className="p-2 flex items-center gap-1 rounded-lg border border-black ml-3"
        >
          <BiSliderAlt />
          Filter
        </button>
      </div>
      <div className="flex-col flex items-center mt-4">
        {filteredFilmData.map((film: FilmType) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </>
  );
};

export default FilmsContainer;

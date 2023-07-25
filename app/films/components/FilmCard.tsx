"use client";
import { FC, useState, useEffect } from "react";
import React from "react";
import Image from "next/image";

import { getFilmData } from "@/Utils/getFilmData";
import screenings from "@/Data/Screenings";
import { getImdbIds } from "@/Utils/getImdbIds";
import { genreCodes, languageCodes } from "@/Data/FilteringCodes";

const FilmCard: FC<{ selectedGenres: string[] }> = ({
  selectedGenres,
  selectedLanguages,
  selectedDecades
}) => {
  const [filmData, setFilmData] = useState<any[]>([]);

  useEffect(() => {
    const imdb_id_arr = getImdbIds(screenings);

    const fetchData = async () => {
      try {
        const filmDataArr = await Promise.all(
          imdb_id_arr.map((element: any) => getFilmData(element))
        );
        setFilmData(filmDataArr);
        console.log(filmDataArr);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const filteredFilmData = filmData.filter((film) => {
    
    const genreCodesArr = selectedGenres.map(
      (genreName) => genreCodes[genreName]
    );
    
    const languageCodesArr = selectedLanguages.map((languageName) => {
      for (const code in languageCodes) {
        if (languageCodes[code] === languageName) {
          return code;
        }
      }
      return null;
    });

    console.log(selectedDecades)

    const isGenreMatch =
      selectedGenres.length === 0 ||
      genreCodesArr.some((genreCode) => film.genre_ids.includes(genreCode));

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
      <div className="flex-col flex items-center mt-4">
        {filteredFilmData.map((film) => (
          <div
            key={film.id}
            className={`my-2 bg-[url('https://image.tmdb.org/t/p/w500${film.backdrop_path}')] w-72`}
          >
            <Image
              width="300"
              height="200"
              alt="whatever"
              src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
            ></Image>
            <h1>{film.title}</h1>
            <h2>{film.release_date}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilmCard;

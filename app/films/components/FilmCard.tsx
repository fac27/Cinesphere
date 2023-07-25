"use client";
import { FC, useState, useEffect } from "react";
import React from "react";
import Image from "next/image";

import { getFilmData } from "@/Utils/getFilmData";
import screenings from "@/Data/Screenings";
import { getImdbIds } from "@/Utils/getImdbIds";
import { genreCodes, languageCodes } from "@/Data/FilteringCodes";

const FilmCard: FC = () => {
  const [filmData, setFilmData] = useState<any[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [selectedDecade, setSelectedDecade] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genreCode = parseInt(event.target.value);
    setSelectedGenre(genreCode);
  };

  const handleDecadeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const decade = event.target.value;
    setSelectedDecade(decade);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const languageCode = event.target.value;
    setSelectedLanguage(languageCode);
  };

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
    const isGenreMatch =
      selectedGenre === null || film.genre_ids.includes(Number(selectedGenre));

    const isDecadeMatch =
      selectedDecade === null ||
      (film.release_date >= `${selectedDecade}-01-01` &&
        film.release_date <= `${Number(selectedDecade) + 9}-12-31`);

    const isLanguageMatch =
      selectedLanguage === null || film.original_language === selectedLanguage;

    return isGenreMatch && isDecadeMatch && isLanguageMatch;
  });

  return (
    <>
      <select
        value={selectedGenre || ""}
        onChange={handleGenreChange}
        className="mb-4"
      >
        <option value="">All Genres</option>
        {Object.entries(genreCodes).map(([genre, code]) => (
          <option key={code} value={code}>
            {genre}
          </option>
        ))}
      </select>

      <select
        value={selectedDecade || ""}
        onChange={handleDecadeChange}
        className="mb-4"
      >
        <option value="">All Decades</option>
        {Array.from({ length: 10 }, (_, i) => 1930 + i * 10).map((decade) => (
          <option key={decade} value={decade}>
            {decade}s
          </option>
        ))}
      </select>

      <select
        value={selectedLanguage || ""}
        onChange={handleLanguageChange}
        className="mb-4"
      >
        <option value="">All Languages</option>
        {Object.entries(languageCodes).map(([code, language]) => (
          <option key={code} value={code}>
            {language}
          </option>
        ))}
      </select>

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

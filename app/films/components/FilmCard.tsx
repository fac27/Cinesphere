"use client";
import { FC } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

import { getFilmData } from "@/Utils/getFilmData";
import screenings from "@/Data/Screenings";
import { getImdbIds } from "@/Utils/getImdbIds";

const FilmCard: FC = () => {
  const [filmData, setFilmData] = useState<any[]>([]);

  useEffect(() => {
    const imdb_id_arr = getImdbIds(screenings);

    const fetchData = async () => {
      try {
        const filmDataArr = await Promise.all(
          imdb_id_arr.map((element: any) => getFilmData(element))
        );
        setFilmData(filmDataArr);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex-col flex  items-center">
      {filmData.map((film) => (
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
  );
};

export default FilmCard;

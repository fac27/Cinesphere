"use client";
import { FC } from "react";
import { useState, useEffect } from "react";

import { getFilmData } from "@/Utils/getFilmData";

const imdb_id_temp_arr = [
  "tt14230388",
  "tt9603212",
  "tt15398776",
  "tt1517268",
  "tt12758486",
];

const FilmCard: FC = () => {
  const [filmData, setFilmData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filmDataArr = await Promise.all(
          imdb_id_temp_arr.map((element) => getFilmData(element))
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
      {filmData.map((data) => (
        <div
          key={data.imdb_id}
          className="my-2 text-white bg-backdrop-film w-72 h-48"
        >
          <h1>{data.title}</h1>
          <h2>*GENRE* / {data.release_date} / *LENGTH*</h2>
          <h2>*DIRECTOR*</h2>
        </div>
      ))}
    </div>
  );
};

export default FilmCard;

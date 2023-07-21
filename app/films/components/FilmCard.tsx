"use client";
import { FC } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

import { getFilmData } from "@/Utils/getFilmData";

const genre: string = "comedy";

const length: string = "109 mins";
const director: string = "Wes Anderson";

const FilmCard: FC = () => {
  const [filmData, setFilmData] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFilmData("tt1462764");
        setFilmData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{filmData.title}</h1>
      <h2>*GENRE* / {filmData.release_date} / *LENGTH*</h2>
      <h2>{director}</h2>
      <Image
        alt="backdrop"
        width="500"
        height="300"
        src={`https://image.tmdb.org/t/p/w500${filmData.backdrop_path}`}
      ></Image>
    </div>
  );
};

export default FilmCard;

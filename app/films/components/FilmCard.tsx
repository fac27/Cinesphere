import React from "react";
import Image from "next/image";
import { FilmType } from "@/Types/Object-Interfaces";

interface Props {
  film: FilmType;
}

const FilmCard = ({ film }: Props) => {
  return (
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
  );
};

export default FilmCard;

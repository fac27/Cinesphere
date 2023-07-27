import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FilmType } from "@/Types/Object-Interfaces";

interface Props {
  film: FilmType;
}

const FilmCard = ({ film }: Props) => {
  return (
    <Link
      href={`/films/${film.imdb_id}`}
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
    </Link>
  );
};

export default FilmCard;

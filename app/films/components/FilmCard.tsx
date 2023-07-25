"use client";

import React from "react";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FilmType } from "@/Types/Object-Interfaces";

const FilmCard: FC<{ film: FilmType }> = ({ film }): React.JSX.Element => {
  const data = JSON.stringify(film);

  return (
    <div className="flex-col flex items-center mt-4">
      <Link
        href={`/films/${film.title}?data=${encodeURIComponent(data)}`}
        key={film.id}
      >
        <div
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
      </Link>
    </div>
  );
};

export default FilmCard;

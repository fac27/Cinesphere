"use client";

import React from "react";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FilmType } from "@/Types/Object-Interfaces";

const FilmCard: FC<{ film: FilmType }> = ({ film }): React.JSX.Element => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = async () => {
    try {
      const response = await fetch("/api/filmdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(film),
      });

      if (!response.ok) {
        throw new Error("Failed to make the POST request.");
      }

      const data = await response.json();
      console.log("POST request successful", data);
    } catch (error) {
      console.error("Error making the POST request:", error);
    }
  };

  return (
    <div onClick={handleClick} className="flex-col flex items-center mt-4">
      <Link href={`/films/${film.imdb_id}`} key={film.id}>
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

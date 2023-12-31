import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FilmType } from "@/Types/Object-Interfaces";

interface Props {
  film: FilmType;
}

const FilmCard = ({ film }: Props) => {
  const genres = film.genre;
  const genreSplit = genres.split(",");
  const first_genre = genreSplit[0];

  return (
    <Link
      href={`/films/${film.id}`}
      key={film.id}
      className="mb-10 md:w-1/2 relative w-5/6 rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="relative h-0 pb-[100%] xs:pb-[80%] sm:pb-[50%]">
        <Image
          className="bg-cover bg-center"
          src={`https://image.tmdb.org/t/p/w500${film.backdrop_img}`}
          alt={`${film.english_title} backdrop image`}
          fill={true}
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />
      </div>
      <Link href={`/films/${film.id}`}>
        <div className="p-5 md:p-10 mt-5 pb-15 absolute bottom-5 left-0 text-white">
          <h2 className="text-2xl font-bold">{film.english_title}</h2>
          <h2 className="mt-5 font-bold">{film.director}</h2>
          <h2 className="mt-5">
            {first_genre} / {film.release_date.substring(0, 4)} / {film.runtime}{" "}
            mins
          </h2>
        </div>
      </Link>
    </Link>
  );
};

export default FilmCard;

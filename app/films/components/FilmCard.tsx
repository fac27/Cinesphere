import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FilmType } from "@/Types/Object-Interfaces";
import Link from "next/link";

interface Props {
  film: FilmType;
}

const FilmCard = ({ film }: Props) => {
  return (
    <Link
      href={`/films/${film.imdb_id}`} key={film.id} className="mb-10 md:w-1/2 relative w-5/6 rounded-2xl overflow-hidden cursor-pointer">
      <div className="relative h-0 pb-[90%] xs:pb-[70%] sm:pb-[50%]">
        <Image
          className="bg-cover bg-center"
          src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
          alt={`an image of the film ${film.title}`}
          fill={true}
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />
      </div>
      <Link href={`/films/${film.title}`}>
        <div className="p-5 md:p-10 mt-5 pb-15 absolute bottom-5 left-0 text-white">
          <h2 className="text-2xl font-bold">{film.title}</h2>
          <h2 className="mt-5">{film.genres[0].name} / {film.release_date.substring(0, 4)} /  {film.runtime} mins</h2>

        </div>
      </Link>
    </Link>
  );
};

export default FilmCard;

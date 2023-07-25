"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FilmType } from "@/Types/Object-Interfaces";
import { useSearchParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const Page: React.FC<{}> = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const param = searchParams.get("data");
  const film: FilmType | null = param ? JSON.parse(param) : null;

  const genreElements = film?.genres.map((genre) => {
    return <span key={uuidv4()}>{genre.name} | </span>;
  });

  console.log(film);

  return (
    <div>
      <div className="flex justify-between w-80 mt-7 mr-auto ml-auto">
        <Link href={"/films"} className="uppercase flex gap-2 items-center">
          <span>
            <BsArrowLeftCircle />
          </span>
          back
        </Link>

        <Link href={"/"} className="uppercase">
          listings
        </Link>
      </div>

      <div className="relative mt-5 w-100 h-56">
        <Image
          src={`https://image.tmdb.org/t/p/w500${film?.backdrop_path}`}
          alt={"a snapshot of the film asteroid city"}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-3 flex flex-col gap-2">
        <h1 className="uppercase font-bold">{film?.title}</h1>
        <p className="text-gray-500">
          <span>{film?.release_date.split("-")[0]}</span> · <span>12A</span> ·{" "}
          <span>
            {Math.trunc(film?.runtime / 60)}h {film?.runtime % 60}m
          </span>
        </p>
        <p>{genreElements}</p>
        <p>
          <span className="font-medium">Director</span>: Wes Anderson
        </p>
        <p className="mt-2">
          <span className="uppercase font-medium">Description</span>:{" "}
          {film?.overview}
        </p>
      </div>

      <div className="relative mt-5 w-100 h-56">
        <Image
          src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
          alt={"a snapshot of the film asteroid city"}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Page;

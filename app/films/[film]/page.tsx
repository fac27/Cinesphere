"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftCircle } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { FilmType } from "@/Types/Object-Interfaces";
import { getFilmData } from "@/Utils/getFilmData";
import { getFilmCredits } from "@/Utils/getFilmCredits";
import screenings from "@/Data/Screenings";
import Screenings from "@/app/components/Screenings";

interface DirectorType {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

const Page: React.FC<{}> = (): React.JSX.Element => {
  const [filmData, setFilmData] = useState<FilmType | null>(null);
  const [director, setDirector] = useState<DirectorType | null>(null);

  useEffect(() => {
    const link = window.location.href.split("/");
    const imdbId = link[link.length - 1];

    const fetchData = async () => {
      try {
        const filmDataArr = await getFilmData(imdbId);
        const filmCredits = await getFilmCredits(imdbId);

        filmCredits.crew.map((person: DirectorType) => {
          if (person.job === "Director") {
            setDirector(person);
          }
        });

        setFilmData(filmDataArr);
      } catch (error: unknown) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const title = filmData?.original_title
  const screeningsFiltered = screenings.filter(
  (screening) => screening.filmName == title?.toUpperCase()
  );

  const genreElements =
    filmData && filmData.genres
      ? filmData.genres.map((genre) => {
          return <span key={uuidv4()}>{genre.name} | </span>;
        })
      : null;

  return (
    <div className="md:w-2/3 ml-auto mr-auto mb-2">
      {filmData && director ? (
        <>
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
          <div className="relative mt-5 w-100 h-56 md:h-96">
            <Image
              src={`https://image.tmdb.org/t/p/w500${filmData?.backdrop_path}`}
              alt={"a snapshot of the film asteroid city"}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-3 flex flex-col gap-2">
            <h1 className="uppercase font-bold">{filmData?.title}</h1>
            <p className="text-gray-500">
              <span>{filmData?.release_date.split("-")[0]}</span> ·{" "}
              <span>12A</span> ·{" "}
              <span>
                {filmData
                  ? `${Math.trunc(filmData.runtime / 60)}h ${
                      filmData.runtime % 60
                    }m`
                  : "Unknown"}
              </span>
            </p>
            <p>{genreElements}</p>
            <p>
              <span className="font-medium">Director</span>: {director?.name}
            </p>
            <p className="mt-2">
              <span className="uppercase font-medium">Description</span>:{" "}
              {filmData?.overview}
            </p>
          </div>
          <div className="relative mt-5 w-100 h-56 md:hidden">
            <Image
              src={`https://image.tmdb.org/t/p/w500${filmData?.poster_path}`}
              alt={"a snapshot of the film asteroid city"}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Screenings screenings={screeningsFiltered} showOnPage="film"/>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Page;

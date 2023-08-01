"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftCircle } from "react-icons/bs";
import { CinemaType, FilmType } from "@/Types/Object-Interfaces";
import { getIndvFilm } from "@/Lib/getFilmData";
import getAllCinemas from "@/Lib/getAllCinemas";
import screenings from "@/Data/Screenings";
import Screenings from "@/app/components/Screenings";


const Page: React.FC<{}> = (): React.JSX.Element => {
  const [filmData, setFilmData] = useState<FilmType | any>(null);
  const [cinemas, setCinemas] = useState<CinemaType[]  | undefined>(undefined)

  useEffect(() => {

    const link = window.location.href.split("/")
    const id = link[link.length -1]

    const fetchData = async () => {
      try {
        const indv_film = await getIndvFilm(id)
        const cinemas = await getAllCinemas();

        setCinemas(cinemas)
        setFilmData(indv_film);
      } catch (error: unknown) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(screenings)

  const title = filmData?.english_title
  const screeningsFiltered = screenings.filter(
  (screening) => screening.filmName == title?.toUpperCase()
  );

  return (
    <>
    <div className="md:w-1/2 ml-auto mr-auto mb-2">
      {filmData ? (
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
              src={`https://image.tmdb.org/t/p/w500${filmData.backdrop_img}`}
              alt={"a snapshot of the film asteroid city"}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-3 flex flex-col gap-2">
            <h1 className="uppercase font-bold">{filmData.english_title}</h1>
            <p className="text-gray-500">
              <span>{filmData.release_date}</span> ·{" "}
              <span>
                {filmData.runtime + "mins"}
              </span>
            </p>
            <p>{"Genre: " + filmData.genre}</p>
            <p>
              <span className="font-medium">Director</span>: {filmData.director}
            </p>
            <p className="mt-2">
              <span className="uppercase font-medium">Description</span>:{" "}
              {filmData.overview}
            </p>
          </div>
          <div className="relative mt-5 w-100 h-56 md:hidden">
            <Image
              src={`https://image.tmdb.org/t/p/w500${filmData.poster_img}`}
              alt={"a snapshot of" + filmData.english_title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
    <Screenings screenings={screeningsFiltered} showOnPage="film" cinemas={cinemas}/>
    </>
  );
};

export default Page;

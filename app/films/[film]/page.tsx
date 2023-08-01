"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftCircle } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { FilmType } from "@/Types/Object-Interfaces";
// import { getFilmData } from "@/Utils/getFilmData";
// import { getFilmCredits } from "@/Utils/getFilmCredits";
import screenings from "@/Data/Screenings";
import Screenings from "@/app/components/Screenings";
import getAllFilms from "@/Lib/getAllFilms";


const Page: React.FC<{}> = (): React.JSX.Element => {
  const [filmData, setFilmData] = useState<FilmType | any>(null);
  
  useEffect(() => {
    const fetchData = async () => {
    const film_temp_data = await getAllFilms()
    setFilmData(film_temp_data);
    };

    fetchData();
  }, []);

  const title = filmData?.english_title
  const screeningsFiltered = screenings.filter(
  (screening) => screening.filmName == title?.toUpperCase()
  );

  const genreElements =
    filmData && filmData.genre
      ? filmData.genre.map((genre: any) => {
          return <span key={uuidv4()}>{genre} | </span>;
        })
      : null;

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
              src={`https://image.tmdb.org/t/p/w500${filmData[0].backdrop_img}`}
              alt={"a snapshot of the film asteroid city"}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-3 flex flex-col gap-2">
            <h1 className="uppercase font-bold">{filmData[0].english_title}</h1>
            <p className="text-gray-500">
              <span>{filmData[0].release_date}</span> ·{" "}
              <span>
                {filmData
                  ? filmData[0].runtime
                  : "Unknown"
                }
              </span>
            </p>
            <p>{genreElements}</p>
            <p>
              <span className="font-medium">Director</span>: {filmData[0].director}
            </p>
            <p className="mt-2">
              <span className="uppercase font-medium">Description</span>:{" "}
              {filmData[0].overview}
            </p>
          </div>
          <div className="relative mt-5 w-100 h-56 md:hidden">
            <Image
              src={`https://image.tmdb.org/t/p/w500${filmData[0].poster_img}`}
              alt={"a snapshot of the film asteroid city"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
    <Screenings screenings={screeningsFiltered} showOnPage="film"/>
    </>
  );
};

export default Page;

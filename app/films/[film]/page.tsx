"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import BackButton from "./../../components/BackButton";
import ScreeningsLink from "@/app/components/ScreeningsLink";
import Screenings from "@/app/components/Screenings";
import { FilmType } from "@/Types/Object-Interfaces";
import { getIndvFilm } from "@/Lib/getFilmData";
import screenings from "@/Data/Screenings";

const Page: React.FC<{}> = (): React.JSX.Element => {
  const [filmData, setFilmData] = useState<FilmType | any>(null);

  useEffect(() => {
    const link = window.location.href.split("/");
    const id = link[link.length - 1];

    const fetchData = async () => {
      const indv_film = await getIndvFilm(id);
      setFilmData(indv_film);
    };

    fetchData();
  }, []);

  const title = filmData?.original_title;
  const screeningsFiltered = screenings.filter(
    (screening) => screening.filmName == title?.toUpperCase()
  );

  return (
    <>
      <div className="md:w-1/2 ml-auto mr-auto mb-2">
        {filmData ? (
          <>
            <div className="flex justify-between w-80 mt-7 mr-auto ml-auto">
              <BackButton page={"films"} />
              <ScreeningsLink />
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
                <span>{filmData.runtime + "mins"}</span>
              </p>
              <p>{"Genre:" + filmData.genre}</p>
              <p>
                <span className="font-medium">Director</span>:{" "}
                {filmData.director}
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
      <Screenings screenings={screeningsFiltered} showOnPage="film" />
    </>
  );
};

export default Page;

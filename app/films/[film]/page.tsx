"use client";

import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import Image from "next/image";
import BackButton from "./../../components/BackButton";
import { CinemaType, FilmType } from "@/Types/Object-Interfaces";
import { getIndvFilm } from "@/Lib/getFilmData";
import getAllCinemas from "@/Lib/getAllCinemas";
import screenings from "@/Data/Screenings";
import ScreeningsContainer from "@/app/components/ScreeningsContainer";

const Page: React.FC<{}> = (): React.JSX.Element => {
  const [filmData, setFilmData] = useState<FilmType | any>(null);
  const [cinemas, setCinemas] = useState<CinemaType[] | undefined>(undefined);
  const pathname = usePathname();

  useEffect(() => {
    const id = pathname.split("/")[2];

    const fetchData = async () => {
      try {
        const indv_film = await getIndvFilm(id);
        const cinemas = await getAllCinemas();

        setCinemas(cinemas);
        setFilmData(indv_film);
      } catch (error: unknown) {
        console.error(error);
      }
    };

    fetchData();
  }, [pathname]);

  const title = filmData?.english_title;
  const screeningsFiltered = screenings.filter(
    (screening) => screening.filmName == title?.toUpperCase()
  );

  const cinema = cinemas?.[0];

  return (
    <>
      <div className="md:w-1/2 ml-auto mr-auto mb-2">
        {filmData ? (
          <>
            <div className="flex justify-around w-80 mt-7 mr-auto ml-auto">
              <BackButton page={"films"} />
            </div>
            <iframe
              className="relative mt-5 pl-3 w-full md:h-96"
              src={`https://www.youtube.com/embed/${filmData.youtube_id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div className="p-3 flex flex-col gap-2">
              <h1 className="uppercase font-bold">{filmData.english_title}</h1>
              <p className="text-gray-500">
                <span>{filmData.release_date.substring(0, 4)}</span> ·{" "}
                <span>{filmData.runtime + " mins"}</span>
              </p>
              <p>{"Genre: " + filmData.genre}</p>
              <p>
                <span className="font-medium">Director</span>:{" "}
                {filmData.director}
              </p>
              <p className="mt-2">
                <span className="font-medium">Description</span>:{" "}
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
      <ScreeningsContainer
        screenings={screeningsFiltered}
        showOnPage="film"
        cinemas={cinemas}
        cinema={cinema}
      />
    </>
  );
};

export default Page;

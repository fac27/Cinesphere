"use client";

import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FilmType } from "@/Types/Object-Interfaces";
import { getIndvFilm } from "@/Lib/getFilmData";

const Page: React.FC<{}> = (): React.JSX.Element => {
  const [filmData, setFilmData] = useState<FilmType | any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const id = pathname.split("/")[2];

    const fetchData = async () => {
      const indv_film = await getIndvFilm(id);
      setFilmData(indv_film);
    };

    fetchData();
  }, [pathname]);

  return (
    <>
      <div className="md:w-1/2 ml-auto mr-auto mb-2">
        {filmData ? (
          <>
            <div className="flex justify-between w-80 mt-7 mr-auto ml-auto">
              <Link
                href={"/films"}
                className="uppercase flex gap-2 items-center"
              >
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
      {/* <Screenings screenings={screeningsFiltered} showOnPage="film"/> */}
    </>
  );
};

export default Page;

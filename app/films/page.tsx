"use client";
import React, { useState, useEffect } from "react";

import FilmCard from "./components/FilmCard";
import { BiSliderAlt } from "react-icons/bi";
import { getAllFilms } from "@/Utils/getAllFilms";
import { FilmType } from "@/Types/Object-Interfaces";
import Modal from "../components/Modal";

const Films = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filmData, setFilmData] = useState<FilmType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllFilms();
      setFilmData(data);
    };

    fetchData();
  }, []);

  const filmCardElements: React.ReactNode[] = filmData?.map(
    (film: FilmType) => <FilmCard key={film.id} film={film} />
  );

  return (
    <>
      <Modal isVisible={isVisible} />
      <div className="flex flex-row justify-center mt-4">
        <input
          type="text"
          className="p-2 w-40 flex border border-black rounded-lg"
          placeholder="search"
        ></input>
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          type="button"
          className="p-2 flex items-center gap-1 rounded-lg border border-black ml-3"
        >
          <BiSliderAlt />
          Filter
        </button>
      </div>

      {filmCardElements}
    </>
  );
};

export default Films;

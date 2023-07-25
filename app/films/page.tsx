import React from "react";

import FilmCard from "./components/FilmCard";
import { BiSliderAlt } from "react-icons/bi";
import { getAllFilms } from "@/Utils/getAllFilms";
import { FilmType } from "@/Types/Object-Interfaces";

const Films = async () => {
  const filmData: FilmType[] = await getAllFilms();

  const filmCardElements: React.ReactNode[] = filmData.map((film: FilmType) => (
    <FilmCard key={film.id} film={film} />
  ));

  return (
    <>
      <div className="film__searchbar flex flex-row justify-center mt-4">
        <input
          type="text"
          className="p-2 w-40 flex border border-black rounded-lg"
          placeholder="search"
        ></input>
        <button
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

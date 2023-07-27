"use client";
import { BiSliderAlt } from "react-icons/bi";
import React, { useState } from "react";
import FilmsContainer from "./components/FilmsContainer";
import Modal from "../components/Modal";
import { exampleGenres } from "@/Data/Filters";
import { useFilters } from "@/app/Context/store";

const Films = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const filterContext = useFilters();
  const genres = filterContext?.genres as string[];
  const setGenres = filterContext?.setGenres as React.Dispatch<React.SetStateAction<string[]>>;

  setGenres(exampleGenres)
  
  

  return (
    <>
      <Modal isVisible={isVisible} setIsVisible={setIsVisible} genres={genres}/>
      <div className="flex flex-row justify-center mt-4">
        <input
          type="text"
          className="p-2 w-40 flex border border-black rounded-lg"
          placeholder="search"
        ></input>
        <button
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
          type="button"
          className="p-2 flex items-center gap-1 rounded-lg border border-black ml-3"
        >
          <BiSliderAlt />
          Filter
        </button>
      </div>
      <FilmsContainer />
    </>
  );
};

export default Films;

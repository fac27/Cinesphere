"use client";
import { BiSliderAlt } from "react-icons/bi";
import { useState } from "react";

import FilmCard from "./components/FilmCard";
import Modal from "../components/Modal";

const Films = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedDecades, setSelectedDecades] = useState<string[]>([]);

  return (
    <>
      <Modal
        isVisible={isVisible}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        selectedLanguages={selectedLanguages}
        setSelectedLanguages={setSelectedLanguages}
        selectedDecades={selectedDecades}
        setSelectedDecades={setSelectedDecades}
      />
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
      <FilmCard
        selectedGenres={selectedGenres}
        selectedLanguages={selectedLanguages}
        selectedDecades={selectedDecades}
      />
    </>
  );
};

export default Films;

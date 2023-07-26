"use client";
import { BiSliderAlt } from "react-icons/bi";
import { useState } from "react";
import FilmCard from "./components/FilmCard";
import Modal from "../components/Modal";

const Films = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <Modal isVisible={isVisible} setIsVisible={setIsVisible} />
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
      <FilmCard />
    </>
  );
};

export default Films;

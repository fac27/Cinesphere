"use client";
import FilterBar from "../components/FilterBar";
import { useState } from "react";
import FilmsContainer from "./components/FilmsContainer";
import FilterModal from "../components/FilterModal";
import { genres, languages, eras } from "@/Data/Filters";

const Films = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const filterArr = [
    { name: "GENRES", filters: genres },
    { name: "LANGUAGES", filters: languages },
    { name: "ERAS", filters: eras },
  ];
  return (
    <>
      <FilterModal
        filterArr={filterArr}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <FilterBar setIsVisible={setIsVisible} />
      <FilmsContainer />
    </>
  );
};

export default Films;

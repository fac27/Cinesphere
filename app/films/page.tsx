"use client";
import FilterBar from "../components/FilterBar";
import { useState } from "react";
import FilmsContainer from "./components/FilmsContainer";
import FilterModal from "../components/FilterModal";

const Films = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <FilterModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <FilterBar setIsVisible={setIsVisible} />
      <FilmsContainer />
    </>
  );
};

export default Films;

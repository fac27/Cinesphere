import { FilterBar } from "./../components/FilterBar";
("use client");
import { BiSliderAlt } from "react-icons/bi";
import { useState } from "react";
import FilmsContainer from "./components/FilmsContainer";
import Modal from "../components/Modal";

const Films = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <Modal isVisible={isVisible} setIsVisible={setIsVisible} />
      <FilterBar setIsVisible={setIsVisible} />
      <FilmsContainer />
    </>
  );
};

export default Films;

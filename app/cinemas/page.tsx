"use client";

import React, { useState } from "react";

import cinemas from "../../Data/Cinemas";
import FilterModal from "../components/FilterModal";
import CinemaSearchBar from "./components/CinemaSearchBar";
import { accessibility, amenities } from "@/Data/Filters";
import CinemaContainer from "./components/CinemaContainer";
import FilterButton from "../components/FilterButton";

const Cinemas = () => {
  const [postcodeInput, setPostcodeInput] = useState<string>("");
  const [distances, setDistances] = useState<
    { cinema: string; distance: string }[]
  >([]);
  const [isVisible, setIsVisible] = useState(false);

  const filteredCinemas = cinemas;

  const filterArr = [
    { name: "AMENITIES", filters: amenities },
    { name: "ACCESSIBILITY", filters: accessibility },
  ];

  return (
    <>
      <FilterModal
        filterArr={filterArr}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <CinemaSearchBar
        setDistances={setDistances}
        postcodeInput={postcodeInput}
        setPostcodeInput={setPostcodeInput}
        setIsVisible={setIsVisible}
      />
      <CinemaContainer
        distances={distances}
        filteredCinemas={filteredCinemas}
      />
    </>
  );
};

export default Cinemas;

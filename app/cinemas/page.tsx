"use client";

import React, { useState } from "react";

import cinemas from "../../Data/Cinemas";
import FilterModal from "../components/FilterModal";
import FilterBar from "../components/FilterBar";
import CinemaSearchBar from "./components/CinemaSearchBar";
import { accessibility, amenities } from "@/Data/Filters";
import CinemaContainer from "./components/CinemaContainer";

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
      <FilterBar setIsVisible={setIsVisible} />
      <CinemaSearchBar
        setDistances={setDistances}
        postcodeInput={postcodeInput}
        setPostcodeInput={setPostcodeInput}
      />
      <CinemaContainer
        distances={distances}
        filteredCinemas={filteredCinemas}
      />
    </>
  );
};

export default Cinemas;

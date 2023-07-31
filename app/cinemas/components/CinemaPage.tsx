"use client";

import React, { useState } from "react";

import FilterModal from "../../components/FilterModal";
import CinemaSearchBar from "./CinemaSearchBar";
import { accessibility, amenities } from "@/Data/Filters";
import CinemaContainer from "./CinemaContainer";
import { CinemaType } from "@/Types/Object-Interfaces";

interface Props {
  cinemas: CinemaType[];
}

const CinemaPage = ({ cinemas }: Props) => {
  const [postcodeInput, setPostcodeInput] = useState<string>("");
  const [distances, setDistances] = useState<
    { cinema: string; distance: string }[]
  >([]);
  const [isVisible, setIsVisible] = useState(false);

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
      <CinemaContainer distances={distances} cinemas={cinemas} />
    </>
  );
};

export default CinemaPage;
"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import FilterModal from "../../components/FilterModal";
import CinemaSearchBar from "./CinemaSearchBar";
import { accessibility, amenities } from "@/Data/Filters";
import CinemaContainer from "./CinemaContainer";
import { CinemaType } from "@/Types/Object-Interfaces";

const Map = dynamic(() => import("@/app/components/Map"), {
  ssr: false,
});

interface Props {
  cinemas: CinemaType[];
  postcodeInput: string;
}

const CinemaPage = ({ cinemas }: Props) => {
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
        setIsVisible={setIsVisible}
      />
      <CinemaContainer cinemas={cinemas} />

      <Map cinemas={cinemas} />
      <CinemaContainer cinemas={cinemas} />
    </>
  );
};

export default CinemaPage;

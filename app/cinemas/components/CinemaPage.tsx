"use client";

import React, { useState } from "react";

import FilterModal from "../../components/FilterModal";
import CinemaSearchBar from "./CinemaSearchBar";
import { accessibility, amenities } from "@/Data/Filters";
import CinemaContainer from "./CinemaContainer";
import { CinemaType } from "@/Types/Object-Interfaces";
// import { useFilters } from "@/app/Context/store";

interface Props {
  cinemas: CinemaType[];
  postcodeInput: string;
}

const CinemaPage = ({ cinemas }: Props) => {

  //get distance value
  // const filterContext = useFilters();

  // const distance = filterContext?.distance as any;
  // console.log('cinema page distance', distance)



  // const [distances, setDistances] = useState<
  //   { cinema: string; distance: string }[]
  // >([]);
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
    </>
  );
};

export default CinemaPage;

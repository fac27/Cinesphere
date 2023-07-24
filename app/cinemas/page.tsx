'use client'

import { useState } from "react";

import { BiSliderAlt } from "react-icons/bi";
import CinemaCard from "./components/CinemaCard";
import cinemas from "../../Data/Cinemas";
import { filterLabels } from "@/Data/FilteringCodes";

const Cinemas = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prevFilters: string[]) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((item: string) => item !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredCinemas = cinemas.filter((cinema) =>
  selectedFilters.every((filter) => {
    if (filter === "wheelchairAccessible") {
      return cinema[filter] === true || cinema[filter] === "Partial";
    }
    return cinema[filter] === true;
  })
);
  
  return (
    <>
      <h1>Cinemas Page</h1>
      <div className="m-5 mb-10 flex justify-between">
        <div className="flex items-center gap-1">
          <input
            type="text"
            className="p-2 w-40 flex border border-black rounded-lg"
            placeholder="postcode"
          ></input>
          <button type="submit" className="p-2 text-white bg-black rounded-lg">
            Search
          </button>
        </div>
        <button
          type="button"
          className="p-2 flex items-center gap-1 rounded-lg border border-black"
        >
          <BiSliderAlt />
          Filter
        </button>
      </div>
      <div>
        {Object.entries(filterLabels).map(([key, label]) => (
          <label key={key}>
            <input
              type="checkbox"
              checked={selectedFilters.includes(key)}
              onChange={() => handleFilterChange(key)}
            />
            {label}
          </label>
        ))}
      </div>
      <div className="flex flex-col items-center">
        {filteredCinemas.map((cinema) => (
          <CinemaCard key={cinema.cinemaName} cinema={cinema} />
        ))}
      </div>
    </>
  );
};

export default Cinemas;

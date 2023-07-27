"use client";

import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { BiSliderAlt } from "react-icons/bi";

import CinemaCard from "./components/CinemaCard";
import cinemas from "../../Data/Cinemas";
import { filterLabels } from "@/Data/FilteringCodes";
import { haversine } from "@/Utils/haversine";

const Cinemas = () => {
  const postcodeInputRef = useRef<HTMLInputElement>(null);
  const [userPostcode, setUserPostcode] = useState<string>("");
  const [distances, setDistances] = useState<
    { cinema: string; distance: string }[]
  >([]);
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

  const handlePostcode = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postcode = postcodeInputRef.current?.value || "";
    setUserPostcode(postcode);
  };

  useEffect(() => {
    const getCoordinates = async (postcode: string) => {
      const response = await fetch("/api/coordinates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ postcode }),
      });

      return await response.json();
    };

    const getDistances = async () => {
      const distances = cinemas.map(async (cinema) => {
        const cinemaPostcode = cinema.postcode;

        const userCoordinates = await getCoordinates(userPostcode);
        const cinemaCoordinates = await getCoordinates(cinemaPostcode);

        const distance = haversine(
          userCoordinates.lat,
          userCoordinates.lon,
          cinemaCoordinates.lat,
          cinemaCoordinates.lon
        );

        return { cinema: cinema.cinemaName, distance: distance };
      });

      Promise.all(distances).then((resolvedDistances) => {
        setDistances(resolvedDistances);
      });
    };

    getDistances();
  }, [userPostcode]);

  const cinemaCardElements = filteredCinemas.map((cinema) => (
    <CinemaCard
      key={cinema.cinemaName}
      cinema={cinema}
      distance={distances.find(
        (distance) => distance.cinema === cinema.cinemaName
      )}
    />
  ));

  return (
    <>
      <div className="m-5 mb-10 flex justify-between">
        <form
          onSubmit={handlePostcode}
          className="cinemas__searchbar flex items-center gap-1"
        >
          <input
            type="text"
            className="p-2 w-40 flex border border-black rounded-lg"
            placeholder="postcode"
            ref={postcodeInputRef}
          ></input>
          <button type="submit" className="p-2 text-white bg-black rounded-lg">
            Search
          </button>
        </form>

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

      <div className="flex flex-col items-center">{cinemaCardElements}</div>
    </>
  );
};

export default Cinemas;

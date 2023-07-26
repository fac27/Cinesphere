"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { BiSliderAlt } from "react-icons/bi";

import CinemaCard from "./components/CinemaCard";
import cinemas from "../../Data/Cinemas";
import { haversine } from "@/Utils/calculateDistance";

const Cinemas = () => {
  const [userPostcode, setUserPostcode] = useState<string>("");
  const [distances, setDistances] = useState<
    { cinema: string; distance: string }[]
  >([]);

  const handlePostcode = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postcode = event.target.elements[0].value;

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
      <div className="flex flex-col items-center">
        {cinemas.map((cinema) => (
          <CinemaCard
            key={cinema.cinemaName}
            cinema={cinema}
            distance={distances.find(
              (distance) => distance.cinema === cinema.cinemaName
            )}
          />
        ))}
      </div>
    </>
  );
};

export default Cinemas;

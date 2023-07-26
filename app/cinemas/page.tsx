"use client";

import { useEffect } from "react";
import { BiSliderAlt } from "react-icons/bi";
import { useState } from "react";

import CinemaCard from "./components/CinemaCard";
import cinemas from "../../Data/Cinemas";
import { haversine } from "@/Utils/calculateDistance";

const Cinemas = () => {
  const [postcode, setPostcode] = useState("");
  const [distances, setDistances] = useState([]);

  const updatePostcode = (event: any) => {
    setPostcode(event.target.value);
  };

  useEffect(() => {
    const getCoordinates = async (postcode) => {
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

        const userCoordinates = await getCoordinates("M146WP");
        const cinemaCoordinates = await getCoordinates(cinemaPostcode);

        const distance = haversine(
          userCoordinates.lat,
          userCoordinates.lon,
          cinemaCoordinates.lat,
          cinemaCoordinates.lon
        );

        return distance;
      });

      Promise.all(distances).then((resolvedDistances) => {
        setDistances(resolvedDistances);
      });
    };

    getDistances();
  }, []);

  console.log(distances);

  return (
    <>
      <div className="m-5 mb-10 flex justify-between">
        <div className="cinemas__searchbar flex items-center gap-1">
          <input
            type="text"
            className="p-2 w-40 flex border border-black rounded-lg"
            placeholder="postcode"
            value={postcode}
            onChange={updatePostcode}
          ></input>
          <button
            // onClick={search}
            type="submit"
            className="p-2 text-white bg-black rounded-lg"
          >
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
      <div className="flex flex-col items-center">
        {cinemas.map((cinema) => (
          <CinemaCard
            key={cinema.cinemaName}
            cinema={cinema}
            postcode={postcode}
          />
        ))}
      </div>
    </>
  );
};

export default Cinemas;

"use client";

import { useEffect } from "react";
import { BiSliderAlt } from "react-icons/bi";
import { useState } from "react";

import CinemaCard from "./components/CinemaCard";
import cinemas from "../../Data/Cinemas";

const Cinemas = () => {
  const [postcode, setPostcode] = useState("");

  const updatePostcode = (event: any) => {
    setPostcode(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/coordinates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      
      body: "m146wp"
    });

    // const test = await response.json()
    console.log(response)
    }

    fetchData()
  }, [])

  // const search = async () => {
  //   const response = await fetch("/api/coordinates", {
  //     method: 'POST',
  //     headers: {
  //       "Content-type": "application/json"
  //     }, body: JSON.stringify("m146wp")
  //   });


  //   console.log("distance", response);
  // };

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

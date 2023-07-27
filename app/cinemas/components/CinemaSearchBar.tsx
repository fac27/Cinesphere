import cinemas from "@/Data/Cinemas";
import { haversine } from "@/Utils/haversine";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  postcodeInput: string;
  setPostcodeInput: Dispatch<SetStateAction<string>>;
  setDistances: Dispatch<
    SetStateAction<{ cinema: string; distance: string }[]>
  >;
}

const CinemaSearchBar = ({
  setDistances,
  postcodeInput,
  setPostcodeInput,
}: Props) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        const userCoordinates = await getCoordinates(postcodeInput);
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
        console.log(resolvedDistances);
        setDistances(resolvedDistances);
      });
    };

    getDistances();
  };

  return (
    <div className="m-5 mb-10 flex justify-between">
      <form
        onSubmit={handleSubmit}
        className="cinemas__searchbar flex items-center gap-1"
      >
        <input
          type="text"
          className="p-2 w-40 flex border border-black rounded-lg"
          placeholder="postcode"
          value={postcodeInput}
          onChange={(e) => setPostcodeInput(e.target.value)}
        ></input>
        <button type="submit" className="p-2 text-white bg-black rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};
export default CinemaSearchBar;

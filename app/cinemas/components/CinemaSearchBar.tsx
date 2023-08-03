import cinemas from "@/Data/Cinemas";
import { haversine } from "@/Utils/haversine";
import FilterButton from "@/app/components/FilterButton";
import React, { Dispatch, SetStateAction } from "react";
import { useFilters } from "@/app/Context/store";

interface Props {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const CinemaSearchBar = ({ setIsVisible }: Props) => {
  const filterContext = useFilters();
  const setPostcode = filterContext?.setPostcode as React.Dispatch<
    React.SetStateAction<string>
  >;
  const postcode = filterContext?.postcode as string;

  const setDistance = filterContext?.setDistance as React.Dispatch<
    React.SetStateAction<{ cinema: string; distance: string }[]>
  >;

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
        const userCoordinates = await getCoordinates(postcode);
        console.log("user coordinates", userCoordinates);
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
        setDistance(resolvedDistances);
      });
    };

    getDistances();
  };

  return (
    <div className="mx-auto w-1/2 mt-5 mb-5 flex justify-between">
      <form
        onSubmit={handleSubmit}
        className="cinemas__searchbar flex items-center gap-1"
      >
        <input
          type="text"
          className="p-2 w-40 flex border border-black rounded-lg"
          placeholder="postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        ></input>
        <button type="submit" className="p-2 text-white bg-black rounded-lg">
          Search
        </button>
      </form>
      <FilterButton setIsVisible={setIsVisible} />
    </div>
  );
};
export default CinemaSearchBar;

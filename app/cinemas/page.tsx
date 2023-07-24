import { BiSliderAlt } from "react-icons/bi";
import CinemaCard from "./components/CinemaCard";
import cinemas from "../../Data/Cinemas";

const Cinemas = () => {
  return (
    <>
      <div className="m-5 mb-10 flex justify-between">
        <div className="cinemas__searchbar flex items-center gap-1">
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
      <div className="flex flex-col items-center">
        {cinemas.map((cinema) => (
          <CinemaCard key={cinema.cinemaName} cinema={cinema} />
        ))}
      </div>
    </>
  );
};

export default Cinemas;

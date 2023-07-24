import FilmCard from "./components/FilmCard";
import { BiSliderAlt } from "react-icons/bi";

const Films = () => {
  return (
    <>
      <div className="film__searchbar flex flex-row justify-center mt-4">
        <input
          type="text"
          className="p-2 w-40 flex border border-black rounded-lg"
          placeholder="search"
        ></input>
        <button
          type="button"
          className="p-2 flex items-center gap-1 rounded-lg border border-black ml-3"
        >
          <BiSliderAlt />
          Filter
        </button>
      </div>
      <FilmCard />
    </>
  );
};

export default Films;

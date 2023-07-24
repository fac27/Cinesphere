import { BiSliderAlt } from "react-icons/bi";

import FilmCard from "./components/FilmCard";
import Filter from "../components/Filter"


const Films = () => {

  const genres = [
    "Action",
    "Horror",
    "Thriller",
    "Arthouse",
    "Sci-Fi",
    "Drama",
    "Period",
    "Comedy",
  ]

  const languages = [
    "English", "Russian", "Korean", "Spanish", "Arabic", "Farsi", "Italian", "Swahili" 
  ]

  const ageRating = ["U", "PG", "12A", "12", "15", "18", "R18"]

  const era = ["1930s", "1940s", "1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"]

  const score = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

  return (
    <>
    <Filter filters={genres} category="GENRE"/>
    <Filter filters={languages} category="LANGUAGE"/>
    <Filter filters={ageRating} category="AGE RATING"/>
    <Filter filters={era} category="ERA"/>
    <Filter filters={score} category="SCORE"/>

      <div className="flex flex-row justify-center mt-4">
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

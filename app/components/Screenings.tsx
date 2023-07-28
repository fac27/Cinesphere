import { ScreeningType } from "@/Types/Object-Interfaces";
import getScreeningsByDateAndFilm from "../../Utils/getScreeningsByDateAndFilm";
import getScreeningsByDateAndCinema from "@/Utils/getScreeningsByDateAndCinema";
import { BiSliderAlt } from "react-icons/bi";
import Icons from "./Icons";

interface Props {
  screenings: ScreeningType[];
  showOnPage: string
}

const Screenings = ({ screenings, showOnPage }: Props) => {
  let sortedScreenings = []
  showOnPage === "cinema" ? sortedScreenings = getScreeningsByDateAndFilm(screenings) : sortedScreenings = getScreeningsByDateAndCinema(screenings)
  console.log(sortedScreenings)
  // console.log(getScreeningsByDateAndCinema(screenings))
  
  return (
    <div className="m-4 md:w-1/2 md:mx-auto ">
      <div className="flex justify-around align-middle mb-4">
        <h2 className="text-3xl regular">SCREENINGS</h2>
        <button className="p-2 flex items-center gap-1 rounded-lg border border-black ml-3">
          <BiSliderAlt />
          Filter
        </button>
      </div>

      <div className="border-b-4 flex flex-col gap-8">
        {sortedScreenings.map((date, index) => (
          <div
            className="border-t border-black flex flex-col gap-4"
            key={index}
          >
            <h3 className="text-xl border-b border-gray">{date.date}</h3>
            {showOnPage === "cinema" ? (
        date.films.map((film, index) => (
          <div className="bg-slate-50 p-5" key={index}>
            <h3 className="text-md font-bold mb-3">{film.filmName}</h3>
            <div className="flex gap-2">
              {film.screenings.map((screening, index) => (
                <div
                  className="flex justify-center align-middle gap-2"
                  key={index}
                >
                  <h3> {screening.time}</h3>
                  <Icons screening={screening} />
                  <h3>/</h3>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : showOnPage === "film" ? (
        date.cinema.map((cinema, index) => (
          <div className="bg-slate-50 p-5" key={index}>
            <h3 className="text-md font-bold mb-3">{cinema.cinema}</h3>
            <div className="flex gap-2">
              {cinema.screenings.map((screening, index) => (
                <div
                  className="flex justify-center align-middle gap-2"
                  key={index}
                >
                  <h3> {screening.time}</h3>
                  <Icons screening={screening} />
                  <h3>/</h3>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Invalid value for showOnPage</p>
      )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screenings;

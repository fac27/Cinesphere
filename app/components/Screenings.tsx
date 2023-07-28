import { ScreeningType} from "@/Types/Object-Interfaces";
import getScreeningsByDateAndFilm from "../../Utils/getScreeningsByDateAndFilm";
import getScreeningsByDateAndCinema from "@/Utils/getScreeningsByDateAndCinema";
import { BiSliderAlt } from "react-icons/bi";
import Icons from "./Icons";

interface Props {
  screenings: ScreeningType[];
  showOnPage: string
}

const renderScreenings = (showOnPage: string, sortedScreenings: any[]) => {
  const renderContent = (screeningData: { name: string; screenings: any[] }) => (
    <>
      <h3 className="text-md font-bold mb-3">{screeningData.name}</h3>
      <div className="flex gap-2">
        {screeningData.screenings.map((screening, index) => (
          <div className="flex justify-center align-middle gap-2" key={index}>
            <h3> {screening.time}</h3>
            <Icons screening={screening} />
            {index !== screeningData.screenings.length - 1 && <h3>/</h3>}
          </div>
        ))}
      </div>
    </>
  );
  return sortedScreenings.map((date, index) => (
    <div className="border-t border-black flex flex-col gap-4" key={index}>
      <h3 className="text-xl border-b border-gray">{date.date}</h3>
      {showOnPage === "cinema"
        ? date.films.map((film: any, index: number) => (
            <div className="bg-slate-50 p-5" key={index}>
              {renderContent({ name: film.filmName, screenings: film.screenings })}
            </div>
          ))
        : date.cinema.map((cinema: any, index: number) => (
            <div className="bg-slate-50 p-5" key={index}>
              {renderContent({ name: cinema.cinema, screenings: cinema.screenings })}
            </div>
          ))
        }
    </div>
  ));
};

const Screenings = ({ screenings, showOnPage }: Props) => {
  let sortedScreenings = [];
  showOnPage === "cinema" ? sortedScreenings = getScreeningsByDateAndFilm(screenings) : sortedScreenings = getScreeningsByDateAndCinema(screenings)
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
          {renderScreenings(showOnPage, sortedScreenings)}
        </div>
      </div>
    );
};

export default Screenings;

'use client'

import { ScreeningType} from "@/Types/Object-Interfaces";
import getScreeningsByDateAndFilm from "../../Utils/getScreeningsByDateAndFilm";
import getScreeningsByDateAndCinema from "@/Utils/getScreeningsByDateAndCinema";
import Icons from "./Icons";
import FilterButton from "./FilterButton";
import { useState } from "react";
import FilterModal from "./FilterModal";
import { accessibility, amenities } from "@/Data/Filters";


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
  const [isVisible, setIsVisible] = useState<boolean>(false);

  let sortedScreenings = [];

  if (showOnPage === "cinema") {
    sortedScreenings = getScreeningsByDateAndFilm(screenings);
  } else {
    sortedScreenings = getScreeningsByDateAndCinema(screenings);
  }

  const cinemaNames: string[] = sortedScreenings
  .flatMap((screening) => {
    if (Array.isArray(screening.cinema)) {
      return screening.cinema.map((cinema) => cinema.cinema);
    } else if (typeof screening.cinema === "string") {
      return [screening.cinema];
    } else {
      return [];
    }
  })
  .filter((cinema) => cinema !== undefined);

  const uniqueCinemaNamesSet: Set<string> = new Set(cinemaNames);
  const uniqueCinemaNames: string[] = Array.from(uniqueCinemaNamesSet);

  const dates: string[] = sortedScreenings.map((screening) => screening.date);

  const sortedDates: string[] = dates.sort((date1, date2) => {
    const dateObj1 = new Date(date1);
    const dateObj2 = new Date(date2);
    return dateObj1.getTime() - dateObj2.getTime();
  });

  let filterArr: {name: string, filters: string[]}[]  = [{name: "", filters: [""]}]
  filterArr = [
    { name: "AMENITIES", filters: amenities },
    { name: "ACCESSIBILITY", filters: accessibility },
    { name: "CINEMA", filters: uniqueCinemaNames},
    { name: "DATES", filters: sortedDates}
  ];

  return (
      <div className="m-4 md:w-1/2 md:mx-auto ">
        <div className="flex justify-around align-middle mb-4">
          <h2 className="text-3xl regular">SCREENINGS</h2>
          <FilterModal filterArr={filterArr} isVisible={isVisible} setIsVisible={setIsVisible} showOnPage={showOnPage}/>
          <FilterButton setIsVisible={setIsVisible} showOnPage={showOnPage}/>
        </div>
        <div className="border-b-4 flex flex-col gap-8">
          {renderScreenings(showOnPage, sortedScreenings)}
        </div>  
      </div>
    );
};

export default Screenings;

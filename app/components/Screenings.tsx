"use client";

import { CinemaType, ScreeningType } from "@/Types/Object-Interfaces";
import getScreeningsByDateAndFilm from "../../Utils/getScreeningsByDateAndFilm";
import getScreeningsByDateAndCinema from "@/Utils/getScreeningsByDateAndCinema";
import Icons from "./Icons";
import FilterButton from "./FilterButton";
import { useState } from "react";
import FilterModal from "./FilterModal";
import Ticket from "./Ticket";
import { v4 as uuidv4 } from "uuid";

interface Props {
  screenings: ScreeningType[];
  showOnPage: string;
  cinema: any;
}

const renderScreenings = (
  showOnPage: string,
  sortedScreenings: any[],
  cinema: CinemaType
) => {
  const renderContent = (screeningData: {
    name: string;
    screenings: any[];
  }) => (
    <>
      <div id="screenings" className="invisible"></div>
      <h3 className="text-md font-bold mb-3">{screeningData.name}</h3>
      <div className="flex gap-2">
        {screeningData.screenings.map((screening, index) => (
          <div
            className="flex justify-center align-middle gap-2"
            key={uuidv4()}
          >
            <h3> {screening.time}</h3>
            <Icons screening={screening} />
            {index !== screeningData.screenings.length - 1 && <h3>/</h3>}
          </div>
        ))}
      </div>
    </>
  );

  return sortedScreenings.map((date) => (
    <div className="border-t border-black flex flex-col gap-4" key={uuidv4()}>
      <h3 className="text-xl border-b border-gray">{date.date}</h3>
      {showOnPage === "cinema"
        ? date.films.map((film: any) => (
            <div className="bg-slate-50 p-5" key={uuidv4()}>
              {renderContent({
                name: film.filmName,
                screenings: film.screenings,
              })}
            </div>
          ))
        : date.cinema.map((cinema: any) => (
            <div className="bg-slate-50 p-5" key={uuidv4()}>
              {renderContent({
                name: cinema.cinema,
                screenings: cinema.screenings,
              })}
            </div>
          ))}

      <Ticket cinema={cinema} />
    </div>
  ));
};

const Screenings = ({ screenings, showOnPage, cinema }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  let sortedScreenings = [];

  showOnPage === "cinema"
    ? (sortedScreenings = getScreeningsByDateAndFilm(screenings))
    : (sortedScreenings = getScreeningsByDateAndCinema(screenings));
  const filterArr: { name: string; filters: string[] }[] = [
    { name: "", filters: [""] },
  ];

  return (
    <div className="m-4 md:w-1/2 md:mx-auto ">
      <div className="flex justify-around align-middle mb-4">
        <h2 className="text-3xl regular">SCREENINGS</h2>
        <FilterModal
          filterArr={filterArr}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        <FilterButton setIsVisible={setIsVisible} />
      </div>

      <div className="border-b-4 flex flex-col gap-8">
        {renderScreenings(showOnPage, sortedScreenings, cinema)}
      </div>
    </div>
  );
};

export default Screenings;

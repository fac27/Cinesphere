'use client'

import { CinemaType, ScreeningType} from "@/Types/Object-Interfaces";
import getScreeningsByDateAndFilm from "../../Utils/getScreeningsByDateAndFilm";
import getScreeningsByDateAndCinema from "@/Utils/getScreeningsByDateAndCinema";
import Icons from "./Icons";
import FilterButton from "./FilterButton";
import { useState } from "react";
import FilterModal from "./FilterModal";
import { accessibilityForIndividualScreenings, amenities } from "@/Data/Filters";
import { useFilters } from "../Context/store";
import { getTrueKeys } from "@/Utils/getTrueKeys";

interface Props {
  screenings: ScreeningType[];
  showOnPage: string
  cinemas?: CinemaType[]
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

function convertCamelCaseToTitleCase(inputArray: string[]) {
  const capitalizeWord = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
  const outputArray = inputArray.map((camelCaseStr) => {
    const words = camelCaseStr.split(/(?=[A-Z])/);
    const titleCaseWords = words.map((word) => capitalizeWord(word));
    return titleCaseWords.join(' ');
  });

  return outputArray;
}



const Screenings = ({ screenings, showOnPage, cinemas }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const filterContext = useFilters();

  const filteredScreenings = screenings.filter((screening: any) => {
    const screeningAccessibility = convertCamelCaseToTitleCase(getTrueKeys(screening));
    const screeningCinema = screening.cinema;
    const screeningFilm = screening.filmName;

    let screeningAmenities:string[] = []

    if (cinemas && cinemas.length > 0) {
      for (const cinema of cinemas) {

        if (cinema.cinema_name == screeningCinema) {
          console.log(cinema)
          if (cinema.Bar) {
            screeningAmenities.push("Bar")
            console.log("bar")
          }
          if (cinema.Cafe) {
            screeningAmenities.push("Cafe")
          }
        }
      }
    }

    const screeningDate = new Date(screening.dateTime);
    const formattedDate = screeningDate.toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    
    const selectedAmenities = filterContext?.selectedAmenities as string[];
    const selectedAccessibility = filterContext?.selectedAccessibility as string[];
    const selectedCinemas = filterContext?.selectedCinemas as string[];
    const selectedDates = filterContext?.selectedDates as string[];
    const selectedFilms =  filterContext?.selectedFilms as string[];
    
    const isAmenityMatch =
    selectedAmenities.length === 0 ||
    selectedAmenities.every((item) => screeningAmenities.includes(item));
    const isAcccessibilityMatch =
    selectedAccessibility.length === 0 ||
    selectedAccessibility.every((item) => screeningAccessibility.includes(item));
    const isCinemaMatch = 
    selectedCinemas.length === 0 ||
    selectedCinemas.includes(screeningCinema)
    const isDateMatch =
    selectedDates.length === 0 ||
    selectedDates.includes(formattedDate);
    const isFilmMatch =
    selectedFilms.length === 0 ||
    selectedFilms.includes(screeningFilm)

    return isAmenityMatch && isAcccessibilityMatch && isCinemaMatch && isDateMatch && isFilmMatch; 
  })
  
  let sortedScreenings: any[] = [];

  if (showOnPage === "cinema") {
    sortedScreenings = getScreeningsByDateAndFilm(filteredScreenings);
  } else {
    sortedScreenings = getScreeningsByDateAndCinema(filteredScreenings);
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

  const uniqueFilmNames: string[] = [];

  if(showOnPage === "cinema") {
    for (const dateObject of sortedScreenings) {
      const filmsArray = dateObject.films;
      for (const film of filmsArray) {
        const filmName = film.filmName;
        if (!uniqueFilmNames.includes(filmName)) {
          uniqueFilmNames.push(filmName);
        }
      }
    }
  }

  const dates: string[] = sortedScreenings.map((screening) => screening.date);

  const sortedDates: string[] = dates.sort((date1, date2) => {
    const dateObj1 = new Date(date1);
    const dateObj2 = new Date(date2);
    return dateObj1.getTime() - dateObj2.getTime();
  });

  let filterArr: {name: string, filters: string[]}[]  = [{name: "", filters: [""]}]

  showOnPage === "film" 
  ? filterArr = [
    { name: "AMENITIES", filters: amenities },
    { name: "ACCESSIBILITY", filters: accessibilityForIndividualScreenings },
    { name: "CINEMA", filters: uniqueCinemaNames},
    { name: "DATES", filters: sortedDates}
  ]
  : filterArr = [
    { name: "ACCESSIBILITY", filters: accessibilityForIndividualScreenings },
    { name: "FILM", filters: uniqueFilmNames},
    { name: "DATES", filters: sortedDates}
  ] 

  return (
      <div className="m-4 md:w-1/2 md:mx-auto ">
        <div className="flex justify-around align-middle mb-4">
          <h2 className="text-3xl regular">SCREENINGS</h2>
          <FilterModal filterArr={filterArr} isVisible={isVisible} setIsVisible={setIsVisible}/>
          <FilterButton setIsVisible={setIsVisible} showOnPage={showOnPage}/>
        </div>
        <div className="border-b-4 flex flex-col gap-8">
          {renderScreenings(showOnPage, sortedScreenings)}
        </div>  
      </div>
    );
};

export default Screenings;

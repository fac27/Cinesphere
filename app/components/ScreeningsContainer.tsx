'use client'

import { CinemaType, ScreeningType} from "@/Types/Object-Interfaces";
import getScreeningsByDateAndFilm from "../../Utils/getScreeningsByDateAndFilm";
import getScreeningsByDateAndCinema from "@/Utils/getScreeningsByDateAndCinema";
import FilterButton from "./FilterButton";
import { useState } from "react";
import FilterModal from "./FilterModal";
import { accessibilityForIndividualScreenings, amenities } from "@/Data/Filters";
import { useFilters } from "../Context/store";
import { getTrueKeys } from "@/Utils/getTrueKeys";
import ScreeningsList from "./ScreeningsList";
import convertCamelCaseToTitleCase from "@/Utils/convertCamelCaseToTitleCase";

interface Props {
  screenings: ScreeningType[];
  showOnPage: string
  cinemas?: CinemaType[]
}

const ScreeningsContainer = ({ screenings, showOnPage, cinemas }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const filterContext = useFilters();

  let sortedScreenings: any[] = [];

  if (showOnPage === "cinema") {
    sortedScreenings = getScreeningsByDateAndFilm(screenings);
  } else {
    sortedScreenings = getScreeningsByDateAndCinema(screenings);
  }

  const cinemaNames: string[] = sortedScreenings
  .flatMap((screening) => {
    if (Array.isArray(screening.cinema)) {
      return screening.cinema.map((cinema: any) => cinema.cinema);
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

  

  const filteredScreeningsArr = sortedScreenings.map((dateObject: any) => {
    const filmsOrCinema = showOnPage === "film" ? dateObject.cinema : dateObject.films;
    const filteredFilmsOrCinema = filmsOrCinema.map((filmObject: any) => {
      const filteredScreenings = filmObject.screenings.filter((screening: any) => {
        const screeningAccessibility = convertCamelCaseToTitleCase(getTrueKeys(screening));
        const screeningCinema = screening.cinema;
        const screeningFilm = screening.filmName;


        let screeningAmenities:string[] = []

        if (cinemas && cinemas.length > 0) {
          for (const cinema of cinemas) {
            if (cinema.cinema_name == screeningCinema) {
              if (cinema.Bar) {
                screeningAmenities.push("Bar")
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
      });
      return {...filmObject, screenings: filteredScreenings};
    }).filter((filmObject : any) => filmObject.screenings.length !== 0);
    const filmsOrCinemaKey = showOnPage === "film" ? 'cinema' : 'films';
    return {...dateObject, [filmsOrCinemaKey]: filteredFilmsOrCinema};
  }).filter(dateObject => {
    const filmsOrCinema = showOnPage === "film" ? dateObject.cinema : dateObject.films;
    return filmsOrCinema.length !== 0
  });

  return (
      <div className="m-4 md:w-1/2 md:mx-auto">
        <div className="flex justify-around mb-3">
          <h2 className="text-3xl regular">SCREENINGS</h2>
          <FilterModal filterArr={filterArr} isVisible={isVisible} setIsVisible={setIsVisible}/>
          <FilterButton setIsVisible={setIsVisible} />
        </div>
          <ScreeningsList showOnPage={showOnPage} filteredScreeningsArr={filteredScreeningsArr} />
      </div>
    );
};

export default ScreeningsContainer;

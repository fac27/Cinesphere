import { ScreeningType } from "@/Types/Object-Interfaces";

export interface FilmArrType {
  filmName: string;
  screenings: ScreeningType[];
}

interface CinemaPageDateArrType {
  date: string;
  films: FilmArrType[];
  cinema?: string;
}

export interface CinemaScheduleData extends Array<CinemaPageDateArrType> {}

const getScreeningsByDateAndFilm = (screenings: ScreeningType[]) => {
  const screeningsByDateAndFilm: CinemaScheduleData = [];

  screenings.forEach((screening: ScreeningType) => {
    const date = new Date(screening.dateTime);

    const formattedDate = date.toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-Gb", {
      hour: "2-digit",
      minute: "2-digit",
    });

    let dateObj = screeningsByDateAndFilm.find(
      (obj) => obj.date === formattedDate
    );

    if (!dateObj) {
      dateObj = {
        date: formattedDate,
        films: [],
      };
      screeningsByDateAndFilm.push(dateObj);
    }

    let filmObj = dateObj.films.find(
      (obj) => obj.filmName === screening.filmName
    );

    if (!filmObj) {
      filmObj = {
        filmName: screening.filmName,
        screenings: [],
      };
      dateObj.films.push(filmObj);
    }

    filmObj.screenings.push({ ...screening, time: formattedTime });
  });

  return screeningsByDateAndFilm;
};

export default getScreeningsByDateAndFilm;

import { ScreeningType } from "@/Types/Object-Interfaces";

interface CinemaArrType {
  cinema: string;
  screenings: ScreeningType[];
}

interface DateArrType {
  date: string;
  cinema: CinemaArrType[];
}

interface CinemaScheduleData extends Array<DateArrType> {}

const getScreeningsByDateAndCinema = (screenings: ScreeningType[]) => {
  const screeningsByDateAndCinema: CinemaScheduleData = [];

  screenings.forEach((screening) => {
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

    let dateObj = screeningsByDateAndCinema.find(
      (obj) => obj.date === formattedDate
    );

    if (!dateObj) {
      dateObj = {
        date: formattedDate,
        cinema: [],
      };
      screeningsByDateAndCinema.push(dateObj);
    }

    let cinemaObj = dateObj.cinema.find(
      (obj) => obj.cinema === screening.cinema
    );

    if (!cinemaObj) {
      cinemaObj = {
        cinema: screening.cinema,
        screenings: [],
      };
      dateObj.cinema.push(cinemaObj);
    }

    cinemaObj.screenings.push({ ...screening, time: formattedTime });
  });

  return screeningsByDateAndCinema;
};

export default getScreeningsByDateAndCinema;

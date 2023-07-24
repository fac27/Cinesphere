import { ScreeningType } from "@/Types/Object-Interfaces";

interface Props {
  screenings: ScreeningType[];
}

const getScreeningsByDateAndFilm = (screenings: ScreeningType[]) => {
  const screeningsByDateAndFilm = [];

  screenings.forEach((screening) => {
    // Convert dateTime to a Date object
    const date = new Date(screening.dateTime);

    // Format date as 'Day Month Year' using toLocaleString
    const formattedDate = date.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Check if the date already exists in the array
    let dateObj = screeningsByDateAndFilm.find(
      (obj) => obj.date === formattedDate
    );

    // If the date does not exist in the array, create a new date object and add it to the array
    if (!dateObj) {
      dateObj = {
        date: formattedDate,
        films: [],
      };
      screeningsByDateAndFilm.push(dateObj);
    }

    // Check if the filmName already exists in the films array
    let filmObj = dateObj.films.find(
      (obj) => obj.filmName === screening.filmName
    );

    // If the filmName does not exist in the films array, create a new film object and add it to the films array
    if (!filmObj) {
      filmObj = {
        filmName: screening.filmName,
        screenings: [],
      };
      dateObj.films.push(filmObj);
    }

    // Push the screening information into the right place in the result object
    filmObj.screenings.push(screening);
  });

  return screeningsByDateAndFilm;
};

const Screenings = ({ screenings }: Props) => {
  const sortedScreenings = getScreeningsByDateAndFilm(screenings);
  console.log(sortedScreenings);
  return (
    <div>
      <h2 className="text-3xl regular">SCREENINGS</h2>
      <div className="border-b-4 flex flex-col gap-1">
        {sortedScreenings.map((date, index) => (
          <div className="border-t border-gray" key={index}>
            <h3>{date.date}</h3>
            {date.films.map((film, index) => (
              <h3 key={index}>{film.filmName}</h3>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screenings;

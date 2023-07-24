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

    // If the date does not exist in the array, create a new date object
    if (!dateObj) {
      dateObj = {
        date: formattedDate,
        films: {},
      };
      screeningsByDateAndFilm.push(dateObj);
    }

    // If the filmName is not yet a key under the date, add it
    if (!dateObj.films[screening.filmName]) {
      dateObj.films[screening.filmName] = [];
    }

    // Push the screening information into the right place in the result object
    dateObj.films[screening.filmName].push(screening);
  });

  return screeningsByDateAndFilm;
};

const Screenings = ({ screenings }: Props) => {
  const sortedScreenings = getScreeningsByDateAndFilm(screenings);

  return (
    <div>
      <h2 className="text-3xl regular">SCREENINGS</h2>
      <div className="border-b-4 flex flex-col gap-1">
        {sortedScreenings.map((date, index) => (
          <div className="border-t border-gray" key={index}>
            <h3>{date.date}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screenings;

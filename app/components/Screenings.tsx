import { ScreeningType } from "@/Types/Object-Interfaces";

interface Props {
  screenings: ScreeningType[];
}

const getScreeningsByDateAndFilm = (screenings: ScreeningType[]) => {
  const screeningsByDateAndFilm = [];

  screenings.forEach((screening) => {
    const date = new Date(screening.dateTime);

    const formattedDate = date.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
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

    filmObj.screenings.push(screening);
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
            {date.films.map((film, index) => (
              <>
                <h3 key={index}>{film.filmName}</h3>
                {film.screenings.map((screening, index) => (
                  <h3 key={index}>{screening.dateTime}</h3>
                ))}
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screenings;

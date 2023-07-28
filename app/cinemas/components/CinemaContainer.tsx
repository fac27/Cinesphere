import { CinemaType } from "@/Types/Object-Interfaces";
import CinemaCard from "./CinemaCard";
import cinemas from "@/Data/Cinemas";
import { useFilters } from "@/app/Context/store";

interface Props {
  distances: { cinema: string; distance: string }[];
}

function getTrueKeys(obj: CinemaType) {
  var keys = [];
  for (var key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key) && obj[key] === true) {
      keys.push(key);
    }
  }
  return keys;
}

const CinemaContainer = ({ distances }: Props) => {
  const filterContext = useFilters();
  const filteredCinemas = cinemas.filter((cinema) => {
    console.log(cinema.cinemaName, cinema.Cafe);
    const cinemaAccessibility = getTrueKeys(cinema);
    const cinemaAmenities = getTrueKeys(cinema);
    const selectedAmenities = filterContext?.selectedAmenities as string[];
    const selectedAccessibility =
      filterContext?.selectedAccessibility as string[];
    const isAmenityMatch =
      selectedAmenities.length === 0 ||
      selectedAmenities.every((item) => cinemaAmenities.includes(item));
    const isAcccessibilityMatch =
      selectedAccessibility.length === 0 ||
      selectedAccessibility.every((item) => cinemaAccessibility.includes(item));
    console.log(isAmenityMatch, isAcccessibilityMatch);
    return isAmenityMatch && isAcccessibilityMatch;
  });

  return (
    <div>
      {filteredCinemas.map((cinema) => (
        <div key={cinema.cinemaName} className="flex flex-col items-center">
          <CinemaCard cinema={cinema} distances={distances} />
        </div>
      ))}
    </div>
  );
};

export default CinemaContainer;

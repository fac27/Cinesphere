import { CinemaType } from "@/Types/Object-Interfaces";
import CinemaCard from "./CinemaCard";
import { useFilters } from "@/app/Context/store";

interface Props {
  // distance: { cinema: string; distance: string }[];
  cinemas: CinemaType[];
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

const CinemaContainer = ({ cinemas }: Props) => {
  const filterContext = useFilters();
  const filteredCinemas = cinemas.filter((cinema) => {
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
    return isAmenityMatch && isAcccessibilityMatch;
  });

  return (
    <div>
      {filteredCinemas.map((cinema) => (
        <div key={cinema.cinemaName} className="flex flex-col items-center">
          <CinemaCard cinema={cinema} />
        </div>
      ))}
    </div>
  );
};

export default CinemaContainer;

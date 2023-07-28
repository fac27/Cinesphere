import { CinemaType } from "@/Types/Object-Interfaces";
import CinemaCard from "./CinemaCard";
import cinemas from "@/Data/Cinemas";
import { accessibility, amenities } from "@/Data/Filters";
import { useFilters } from "@/app/Context/store";

interface Props {
  distances: { cinema: string; distance: string }[];
}

const CinemaContainer = ({ distances }: Props) => {
  //const filterContext = useFilters();
  /* const filteredCinemas = cinemas.filter((cinema) => {
    const selectedAmenities = filterContext?.selectedAmenities as string[];
    const selectedAccessibility =
      filterContext?.selectedAccessibility as string[];
    const isAmenityMatch =
      selectedAmenities.length === 0 ||
      selectedAmenities.some((item) => cinemaAmenities.includes(item));
    const isAcccessibilityMatch =
      selectedAccessibility.length === 0 ||
      selectedAccessibility.some((item) => cinemaAccessibility.includes(item));
    return isAmenityMatch;
  }); */

  const filteredCinemas = cinemas;

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

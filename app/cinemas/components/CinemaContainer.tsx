import { CinemaType } from "@/Types/Object-Interfaces";
import CinemaCard from "./CinemaCard";

interface Props {
  filteredCinemas: CinemaType[];
  distances: { cinema: string; distance: string }[];
}

const CinemaContainer = ({ filteredCinemas, distances }: Props) => {
  return (
  <div>
  {filteredCinemas.map((cinema) => (
    <div key={cinema.cinemaName} className="flex flex-col items-center">
      <CinemaCard cinema={cinema} distances={distances} />
      </div>
  ))}
  </div>
  )
}

export default CinemaContainer;

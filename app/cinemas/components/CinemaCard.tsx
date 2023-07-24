import { FC } from "react";
import { CinemaType } from "@/Types/Object-Interfaces";
import CinemaFeaturesList from "./CinemaFeaturesList";

interface CinemaCardProps {
  cinema: CinemaType;
}

const CinemaCard: FC<CinemaCardProps> = ({ cinema }) => {
  return (
    <div
      className="relative w-5/6 bg-cover bg-center rounded-2xl"
      style={{ backgroundImage: `url(${cinema.images.Interior2}` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl" />
      <div className="p-10 relative text-white">
        <h2 className="text-2xl font-bold">{cinema.cinemaName}</h2>
        <h3 className="mb-10">{cinema.area}</h3>
        <p>{cinema.about}</p>
        <CinemaFeaturesList cinema={cinema} />
      </div>
    </div>
  );
};

export default CinemaCard;

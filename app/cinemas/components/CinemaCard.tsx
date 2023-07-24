import { FC } from "react";
import { CinemaType } from "@/Types/Object-Interfaces";
import CinemaFeaturesList from "./CinemaFeaturesList";
import Image from "next/image";

interface CinemaCardProps {
  cinema: CinemaType;
}

const CinemaCard: FC<CinemaCardProps> = ({ cinema }) => {
  return (
    <div className="mb-10 relative w-5/6 rounded-2xl overflow-hidden">
        <div className="relative h-0 pb-[175%]">
            <Image
            className="bg-cover bg-center"
            src={cinema.images.Interior2}
            alt={`a photo of the interior of ${cinema}`}
            layout="fill"
            objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />
        </div> 
        <div className="p-10 absolute top-0 left-0 text-white">
            <h2 className="text-2xl font-bold">{cinema.cinemaName}</h2>
            <h3 className="mb-10">{cinema.area}</h3>
            <p className="mb-10">{cinema.about}</p>
            <CinemaFeaturesList cinema={cinema} />
        </div>
    </div>
  );
};

export default CinemaCard;

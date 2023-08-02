import { FC, useEffect, useState } from "react";

import { CinemaType } from "@/Types/Object-Interfaces";
import CinemaFeaturesList from "./CinemaFeaturesList";
import Image from "next/image";
import Link from "next/link";
import { useFilters } from "@/app/Context/store";

interface CinemaCardProps {
  cinema: CinemaType;
}
const CinemaCard: FC<CinemaCardProps> = ({ cinema }) => {
  const filterContext = useFilters();
  const distance = filterContext?.distance as any;

  const [displayDistance, setDisplayDistance] = useState<any>();

  useEffect(() => {
    if (distance) {
      setDisplayDistance(
        distance.find(
          (distance: { cinema: string; distance: string }) =>
            distance.cinema === cinema.cinema_name
        )
      );
    } else setDisplayDistance(" ");
  }, [distance, cinema.cinema_name]);

  return (
    <div className="mb-10 md:w-1/2 relative w-5/6 rounded-2xl overflow-hidden cursor-pointer">
      <div className="relative h-0 pb-[200%] xs:pb-[180%] sm:pb-[80%] md:pb-[75%]">
        <Image
          className="bg-cover bg-center"
          src={cinema.img_interior_2}
          alt={`a photo of the interior of ${cinema}`}
          fill={true}
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />
      </div>
      <Link href={`/cinemas/${cinema.cinema_name}`}>
        <div className="p-5 md:p-10 mt-5 pb-15 absolute top-0 left-0 text-white">
          <h2 className="text-2xl font-bold">{cinema.cinema_name}</h2>
          <h3 className="mb-10">
            {displayDistance == undefined ? " " : displayDistance.distance}
          </h3>
          <h3 className="mb-10">{cinema.area}</h3>
          <p className="mb-10">{cinema.about}</p>
          <CinemaFeaturesList cinema={cinema} />
        </div>
      </Link>
    </div>
  );
};

export default CinemaCard;

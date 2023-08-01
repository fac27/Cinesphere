import Link from "next/link";
import { CinemaType } from "@/Types/Object-Interfaces";

interface Props {
  cinema: CinemaType;
}

const CinemaMapCard = ({ cinema }: Props) => {
  return (
    <div className="space-y-1.5 h-full">
      <div className="flex-col space-y-1.5">
        <h2 className="font-semibold">{cinema.cinemaName}</h2>
        <h2 className="font-medium">{cinema.address}</h2>
        <h2 className="font-medium">{cinema.website}</h2>
      </div>

      <Link href={`/cinemas/${cinema.cinemaName}`}>
        <button className="mt-5 p-2 text-white bg-black rounded-lg">
          View
        </button>
      </Link>
    </div>
  );
};

export default CinemaMapCard;

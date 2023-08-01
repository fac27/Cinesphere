import { CinemaType } from "@/Types/Object-Interfaces";

interface Props {
  cinema: CinemaType;
}

const CinemaMapCard = ({ cinema }: Props) => {
  return (
    <div>
      <div className="flex-col space-y-1.5">
        <h2>{cinema.cinemaName}</h2>
        <h2>{cinema.address}</h2>
        <h2>{cinema.website}</h2>
      </div>

      <button className="ml-auto mr-auto mt-5 border-red-200 border-solid border-2">
        View
      </button>
    </div>
  );
};

export default CinemaMapCard;

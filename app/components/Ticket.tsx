import Link from "next/link";
import { CinemaType } from "@/Types/Object-Interfaces";

interface Props {
  cinema: CinemaType;
}

const Ticket = ({ cinema }: Props) => {
  return (
    <Link href={cinema.website} className="flex justify-end">
      <button className="p-2 text-black font-medium bg-bgColour1 rounded-lg cursor-pointer">
        Buy Tickets
      </button>
    </Link>
  );
};

export default Ticket;

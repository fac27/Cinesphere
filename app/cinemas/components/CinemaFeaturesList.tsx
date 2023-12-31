import { FC } from "react";
import { CinemaType } from "@/Types/Object-Interfaces";
import { LiaCocktailSolid } from "react-icons/lia";
import { IoMdCafe } from "react-icons/io";
import { FaAudioDescription } from "react-icons/fa";
import { BiSolidCaptions } from "react-icons/bi";
import { FaWheelchair } from "react-icons/fa";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaInfinity } from "react-icons/fa";

interface CinemaCardProps {
  cinema: CinemaType;
}

const CinemaFeaturesList: FC<CinemaCardProps> = ({ cinema }) => {
  const features = [];

  if (cinema.Bar) {
    features.push(
      <li key="bar" className="flex items-center">
        <span role="img" aria-label="Bar" className="mr-2">
          <LiaCocktailSolid />
        </span>
        Bar
      </li>
    );
  }

  if (cinema.Cafe) {
    features.push(
      <li key="cafe" className="flex items-center">
        <span role="img" aria-label="Cafe" className="mr-2">
          <IoMdCafe />
        </span>
        Cafe
      </li>
    );
  }

  if (cinema["Audio Description"]) {
    features.push(
      <li key="audioDescription" className="flex items-center">
        <span role="img" aria-label="Audio Description" className="mr-2">
          <FaAudioDescription />
        </span>
        Audio Description
      </li>
    );
  }

  if (cinema["Closed Captions"]) {
    features.push(
      <li key="closedCaptions" className="flex items-center">
        <span role="img" aria-label="Closed Captions" className="mr-2">
          <BiSolidCaptions />
        </span>
        Closed Captions
      </li>
    );
  }

  if (cinema["Relaxed Screenings"]) {
    features.push(
      <li key="relaxedScreenings" className="flex items-center">
        <span role="img" aria-label="Relaxed Screenings" className="mr-2">
          <FaInfinity />
        </span>
        Relaxed Screenings
      </li>
    );
  }

  if (cinema["Wheelchair Accessible"]) {
    const wheelchairAccessibility =
      cinema["Wheelchair Accessible"] === "Partial"
        ? "Some wheelchair access"
        : "Full wheelchair access";
    features.push(
      <li key="wheelchairAccessible" className="flex items-center">
        <span role="img" aria-label="Wheelchair Accessible" className="mr-2">
          <FaWheelchair />
        </span>
        {wheelchairAccessibility}
      </li>
    );
  }

  if (cinema["Free Carer Tickets"]) {
    features.push(
      <li key="freeCarerTickets" className="flex items-center">
        <span role="img" aria-label="Free Carer Tickets" className="mr-2">
          <BsFillTicketPerforatedFill />
        </span>
        Free tickets for carers
      </li>
    );
  }

  // Add more conditions and features as needed...

  return <ul>{features.map((feature) => feature)}</ul>;
};

export default CinemaFeaturesList;

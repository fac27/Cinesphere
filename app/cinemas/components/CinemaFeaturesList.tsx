import {FC} from "react";
import {CinemaType} from "@/Types/Object-Interfaces";
import {LiaCocktailSolid} from "react-icons/lia"
import {IoMdCafe} from "react-icons/io"
import {FaAudioDescription} from "react-icons/fa"
import {BiSolidCaptions} from "react-icons/bi"
import {FaWheelchair} from "react-icons/fa"
import {BsFillTicketPerforatedFill} from "react-icons/bs"
import Image from "next/image";


interface CinemaCardProps {
    cinema: CinemaType;
}

const CinemaFeaturesList:FC<CinemaCardProps> = ({ cinema }) => {
  const features = [];

  if (cinema.bar) {
    features.push(
      <li key="bar" className="flex items-center">
        <span role="img" aria-label="Bar">
          <LiaCocktailSolid />
        </span>
        Bar
      </li>
    );
  }

  if (cinema.cafe) {
    features.push(
      <li key="cafe" className="flex items-center">
        <span role="img" aria-label="Cafe">
          <IoMdCafe />
        </span>
        Cafe
      </li>
    );
  }

  if (cinema.audioDescription) {
    features.push(
      <li key="audioDescription" className="flex items-center">
        <span role="img" aria-label="Audio Description">
          <FaAudioDescription />
        </span>
        Audio Description
      </li>
    );
  }

  if (cinema.closedCaptions) {
    features.push(
      <li key="closedCaptions" className="flex items-center">
        <span role="img" aria-label="Closed Captions">
          <BiSolidCaptions />
        </span>
        Closed Captions
      </li>
    );
  }

  if (cinema.relaxedScreenings) {
    features.push(
      <li key="relaxedScreenings" className="flex items-center">
        <span role="img" aria-label="Relaxed Screenings">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Pastel_Neurodiversity_Symbol.png" alt="Neurodiversity symbol" width="20" height="20" />
        </span>
        Relaxed Screenings
      </li>
    );
  }

  if (cinema.wheelchairAccessible) {
    const wheelchairAccessibility =
    cinema.wheelchairAccessible === "Partial"
      ? "Some wheelchair access"
      : "Full wheelchair access";
    features.push(
      <li key="wheelchairAccessible" className="flex items-center">
        <span role="img" aria-label="Wheelchair Accessible">
          <FaWheelchair />
        </span>
        {wheelchairAccessibility}
      </li>
    );
  }

  if (cinema.freeCarerTickets) {
    features.push(
      <li key="freeCarerTickets" className="flex items-center">
        <span role="img" aria-label="Free Carer Tickets">
          <BsFillTicketPerforatedFill />
        </span>
        Free tickets for carers
      </li>
    );
  }


  // Add more conditions and features as needed...

  return (
    <ul>
      {features.map((feature) => feature)}
    </ul>
  );
};

export default CinemaFeaturesList;

import { h1style, h2style } from "@/Styles/Tailwind-Styles";
import { CinemaType } from "@/Types/Object-Interfaces";
import { LiaCocktailSolid } from "react-icons/lia";
import { IoMdCafe } from "react-icons/io";
import { FaAudioDescription } from "react-icons/fa";
import { BiSolidCaptions } from "react-icons/bi";
import { FaWheelchair } from "react-icons/fa";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import Image from "next/image";

interface Props {
  cinema: CinemaType;
}

const Cinema = ({ cinema }: Props) => {
  return (
    <>
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          layout="fill"
          src={cinema.images.exterior}
          alt="External cinema"
        />
      </div>

      <h1 className={h1style}>{cinema.cinemaName}</h1>
      <p>DESCRIPTION: {cinema.about}</p>

      {cinema.bar && (
        <>
          <h2 className={h2style}>Bar</h2> <LiaCocktailSolid />
          <p>
            {cinema.cinemaName} has an on-site bar which serves alcoholic and
            soft drinks.
          </p>
        </>
      )}
      {cinema.cafe && (
        <>
          <h2 className={h2style}>Cafe</h2>
          <IoMdCafe />
          <p>{cinema.cinemaName} has a cafe which serves food and hot drinks</p>
        </>
      )}

      {cinema.audioDescription && (
        <>
          <h2 className={h2style}>Audio Description</h2>
          <FaAudioDescription />
          <p>{cinema.visualImpairmentDetails}</p>
        </>
      )}
      {cinema.closedCaptions && (
        <>
          <h2 className={h2style}>Closed Captions</h2>
          <BiSolidCaptions />
          <p>{cinema.HoHDetails}</p>
        </>
      )}
      {cinema.relaxedScreenings && (
        <>
          <h2 className={h2style}>Relaxed Screenings</h2>
          <p>{cinema.neurodiverseDetails}</p>
        </>
      )}
      {cinema.wheelchairAccessible && (
        <>
          <h2 className={h2style}>Wheelchair Accessibility</h2>
          <FaWheelchair />
          <p>{cinema.wheelchairDetails}</p>
        </>
      )}
      {cinema.freeCarerTickets && (
        <>
          <h2 className={h2style}>Free Carer Tickets</h2>
          <BsFillTicketPerforatedFill />
          <p>{cinema.freeCarerTicketsDetails}</p>
        </>
      )}
      <h2 className={h2style}>Contact</h2>
      <p>{cinema.address}</p>
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          layout="fill"
          src={cinema.images.Interior1}
          alt="External cinema"
        />
      </div>

      <div className="flex">
        <div
          className="relative w-full overflow-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            layout="fill"
            alt="interior2"
            src={cinema.images.Interior2}
          />
        </div>
        <div
          className="relative w-full overflow-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            layout="fill"
            alt="interior2"
            src={cinema.images.Interior3}
          />
        </div>
      </div>
    </>
  );
};

export default Cinema;

import { h1style, h2style } from "@/Styles/Tailwind-Styles";
import { CinemaType } from "@/Types/Object-Interfaces";
import { LiaCocktailSolid } from "react-icons/lia";
import { IoMdCafe } from "react-icons/io";
import { FaAudioDescription } from "react-icons/fa";
import { BiSolidCaptions } from "react-icons/bi";
import { FaWheelchair } from "react-icons/fa";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import Image from "next/image";
import InfoSection from "./InfoSection";

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
        <InfoSection
          title="Bar"
          IconComponent={LiaCocktailSolid}
          description={`${cinema.cinemaName} has an on-site bar which serves alcoholic and
        soft drinks.`}
        />
      )}
      {cinema.cafe && (
        <InfoSection
          title="Cafe"
          IconComponent={IoMdCafe}
          description={`${cinema.cinemaName} has a cafe which serves food and hot drinks`}
        />
      )}

      {cinema.audioDescription && (
        <InfoSection
          title="Audio Description"
          IconComponent={FaAudioDescription}
          description={cinema.visualImpairmentDetails as string}
        />
      )}
      {cinema.closedCaptions && (
        <InfoSection
          title="Closed Captions"
          IconComponent={BiSolidCaptions}
          description={cinema.HoHDetails as string}
        />
      )}
      {cinema.relaxedScreenings && (
        <InfoSection
          title="Relaxed Screenings"
          description={cinema.neurodiverseDetails as string}
        />
      )}
      {cinema.wheelchairAccessible && (
        <InfoSection
          title="Weelchair Accessibility"
          IconComponent={FaWheelchair}
          description={cinema.wheelchairDetails as string}
        />
      )}
      {cinema.freeCarerTickets && (
        <InfoSection
          title="Free Carer Tickets"
          IconComponent={BsFillTicketPerforatedFill}
          description={cinema.freeCarerTicketsDetails as string}
        />
      )}
      <InfoSection title="Contact" description={cinema.address} />
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

import { DbCinemaType } from "@/Types/Object-Interfaces";
import { LiaCocktailSolid } from "react-icons/lia";
import { IoMdCafe } from "react-icons/io";
import { FaAudioDescription, FaInfinity } from "react-icons/fa";
import { BiSolidCaptions } from "react-icons/bi";
import { FaWheelchair } from "react-icons/fa";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import Image from "next/image";
import InfoSection from "./InfoSection";

interface Props {
  cinema: DbCinemaType;
}

const Cinema = ({ cinema }: Props) => {
  return (
    <div className="mx-5 md:w-1/2 md:mx-auto flex flex-col gap-5">
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          fill={true}
          src={cinema.img_exterior}
          alt="External cinema"
        />
      </div>

      <h1 className="text-4xl font-bold">{cinema.cinema_name}</h1>
      <p>DESCRIPTION: {cinema.about}</p>

      {cinema.bar && (
        <InfoSection
          title="Bar"
          IconComponent={LiaCocktailSolid}
          description={`${cinema.cinema_name} has an on-site bar which serves alcoholic and
        soft drinks.`}
        />
      )}
      {cinema.cafe && (
        <InfoSection
          title="Cafe"
          IconComponent={IoMdCafe}
          description={`${cinema.cinema_name} has a cafe which serves food and hot drinks`}
        />
      )}

      {cinema.audio_description && (
        <InfoSection
          title="Audio Description"
          IconComponent={FaAudioDescription}
          description={cinema.visual_impairment_details as string}
        />
      )}
      {cinema.closed_captions && (
        <InfoSection
          title="Closed Captions"
          IconComponent={BiSolidCaptions}
          description={cinema.hoh_details as string}
        />
      )}
      {cinema.relaxed_screenings && (
        <InfoSection
          title="Relaxed Screenings"
          IconComponent={FaInfinity}
          description={cinema.neurodiverse_details as string}
        />
      )}
      {cinema.wheelchair_accessible && (
        <InfoSection
          title="Wheelchair Accessibility"
          IconComponent={FaWheelchair}
          description={cinema.wheelchair_details as string}
        />
      )}
      {cinema.free_carer_tickets && (
        <InfoSection
          title="Free Carer Tickets"
          IconComponent={BsFillTicketPerforatedFill}
          description={cinema.free_carer_tickets_details as string}
        />
      )}
      <InfoSection title="Contact" description={cinema.address} />
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          fill={true}
          src={cinema.img_interior_1}
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
            fill={true}
            alt="interior2"
            src={cinema.img_interior_2}
          />
        </div>
        <div
          className="relative w-full overflow-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            fill={true}
            alt="interior2"
            src={cinema.img_interior_3}
          />
        </div>
      </div>
    </div>
  );
};

export default Cinema;

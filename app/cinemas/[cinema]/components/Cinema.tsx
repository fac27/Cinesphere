import { h2style } from "@/Styles/Tailwind-Styles";
import { CinemaType } from "@/Types/Object-Interfaces";
import Image from "next/image";

interface Props {
  cinema: CinemaType;
}

const Cinema = ({ cinema }: Props) => {
  return (
    <>
      <Image
        width={500}
        height={500}
        src={cinema.images.exterior}
        alt="External cinema"
      />
      <h1>{cinema.cinemaName}</h1>
      <p>DESCRIPTION: {cinema.about}</p>

      {cinema.bar && (
        <>
          <h2 className={h2style}>Bar</h2>
          <p>
            {cinema.cinemaName} has an on-site bar which serves alcoholic and
            soft drinks.
          </p>
        </>
      )}
      {cinema.cafe && (
        <>
          <h2 className={h2style}>Cafe</h2>
          <p>{cinema.cinemaName} has a cafe which serves food and hot drinks</p>
        </>
      )}

      {cinema.audioDescription && (
        <>
          <h2 className={h2style}>Audio Description</h2>
          <p>{cinema.visualImpairmentDetails}</p>
        </>
      )}
      {cinema.closedCaptions && (
        <>
          <h2 className={h2style}>Closed Captions</h2>
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
          <p>{cinema.wheelchairDetails}</p>
        </>
      )}
      {cinema.freeCarerTickets && (
        <>
          <h2 className={h2style}>Free Carer Tickets</h2>
          <p>{cinema.freeCarerTicketsDetails}</p>
        </>
      )}
      <h2 className={h2style}>Contact</h2>
      <p>{cinema.address}</p>

      <Image
        width={500}
        height={500}
        alt="interior1"
        src={cinema.images.Interior1}
      />
      <div>
        <Image
          width={250}
          height={250}
          alt="interior2"
          src={cinema.images.Interior2}
        />
        <Image
          width={250}
          height={250}
          alt="interior3"
          src={cinema.images.Interior3}
        />
      </div>
    </>
  );
};

export default Cinema;

import Image from "next/image";

export function Cinema({ cinema }) {
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
          <h1>Bar</h1>
          <p>
            {cinema.cinemaName} has an on-site bar which serves alcoholic and
            soft drinks.
          </p>
        </>
      )}
      {cinema.cafe && (
        <>
          <h1>Cafe</h1>
          <p>{cinema.cinemaName} has a cafe which serves food and hot drinks</p>
        </>
      )}

      {cinema.audioDescription && (
        <>
          <h1>Audio Description</h1>
          <p>{cinema.visualImpairmentDetails}</p>
        </>
      )}
      {cinema.closedCaptions && (
        <>
          <h1>Closed Captions</h1>
          <p>{cinema.HoHDetails}</p>
        </>
      )}
      {cinema.relaxedScreenings && (
        <>
          <h1>Relaxed Screenings</h1>
          <p>{cinema.neurodiverseDetails}</p>
        </>
      )}
      {cinema.wheelchairAccessible && (
        <>
          <h1>Wheelchair Accessibility</h1>
          <p>{cinema.wheelchairDetails}</p>
        </>
      )}
      {cinema.freeCarerTickets && (
        <>
          <h1>Free Carer Tickets</h1>
          <p>{cinema.freeCarerTicketsDetails}</p>
        </>
      )}
      <h1>Contact</h1>
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
}

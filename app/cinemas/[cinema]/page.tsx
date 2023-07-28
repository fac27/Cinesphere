import Screenings from "@/app/components/Screenings";
import Buttons from "./components/Buttons";
import Cinema from "./components/Cinema";
import cinemas from "@/Data/Cinemas";
import screenings from "@/Data/Screenings";

// eslint-disable-next-line no-unused-vars
const Page = ({ params }: { params: { cinema: string } }) => {
  const paramsCinema = params.cinema.replaceAll("%20", " ");
  const cinema = cinemas.find(
    (cinema) => cinema.cinemaName.toLowerCase() === paramsCinema.toLowerCase()
  );
  const screeningsFiltered = screenings.filter(
    (screening) => screening.cinema == paramsCinema
  );

  if (!cinema)
    return (
      <>
        <Buttons /> <h1>404 Cinema Not Found</h1>
      </>
    );
  return (
    <>
      <Buttons />
      <Cinema cinema={cinema} />
      <Screenings screenings={screeningsFiltered} showOnPage="cinema" />
    </>
  );
};

export default Page;

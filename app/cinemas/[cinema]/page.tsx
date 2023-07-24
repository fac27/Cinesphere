import Screenings from "@/app/components/Screenings";
import Buttons from "./components/Buttons";
import Cinema from "./components/Cinema";
import cinemas from "@/Data/Cinemas";

// eslint-disable-next-line no-unused-vars
const Page = ({ params }: { params: { cinema: string } }) => {
  const paramsCinema = params.cinema.replaceAll("%20", " ");
  const cinema = cinemas.find(
    (cinema) => cinema.cinemaName.toLowerCase() === paramsCinema.toLowerCase()
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
      <Screenings />
    </>
  );
};

export default Page;

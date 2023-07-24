import Buttons from "./components/Buttons";
import Cinema from "./components/Cinema";
import cinemas from "@/Data/Cinemas";

// eslint-disable-next-line no-unused-vars
const Page = ({ params }: { params: { cinema: string } }) => {
  const paramsCinema = params.cinema.replaceAll("-", " ");
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
    </>
  );
};

export default Page;

import Screenings from "@/app/components/Screenings";
import Buttons from "./components/Buttons";
import Cinema from "./components/Cinema";
import screenings from "@/Data/Screenings";
import getCinemaByName from "@/Lib/getCinemaByName";

const Page = async ({ params }: { params: { cinema: string } }) => {
  const paramsCinema = params.cinema.replaceAll("%20", " ");
  const cinema = await getCinemaByName(paramsCinema);
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
      <Screenings
        screenings={screeningsFiltered}
        showOnPage="cinema"
        cinema={cinema}
      />
    </>
  );
};

export default Page;

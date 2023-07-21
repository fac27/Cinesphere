import Buttons from "./components/Buttons";
import Cinema from "./components/Cinema";
import cinemas from "@/Data/Cinemas";

// eslint-disable-next-line no-unused-vars
const Page = ({ params }: { params: { cinema: string } }) => {
  const cinema = cinemas[3];
  return (
    <>
      <Buttons />
      <Cinema cinema={cinema} />
    </>
  );
};

export default Page;

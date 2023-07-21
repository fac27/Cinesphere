import Cinema from "./components/Cinema";
import cinemas from "@/Data/Cinemas";

const Page = ({ params }: { params: { cinema: string } }) => {
  const cinema = cinemas[3];
  return (
    <>
      <Cinema cinema={cinema} />
    </>
  );
};

export default Page;

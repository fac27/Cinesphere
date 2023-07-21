import { blackBtnStyle } from "@/Styles/Tailwind-Styles";
import Cinema from "./components/Cinema";
import cinemas from "@/Data/Cinemas";

const Page = ({ params }: { params: { cinema: string } }) => {
  const cinema = cinemas[3];
  return (
    <>
      <div className="flex justify-around">
        <button>Back</button>
        <button className={blackBtnStyle}>Listings</button>
      </div>
      <Cinema cinema={cinema} />
    </>
  );
};

export default Page;

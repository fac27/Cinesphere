import getAllCinemas from "@/Lib/getAllCinemas";
import CinemaPage from "./components/CinemaPage";
import { CinemaType } from "@/Types/Object-Interfaces";

const Page = async () => {
  const cinemas: CinemaType[] = await getAllCinemas();
  return <CinemaPage cinemas={cinemas} />;
};

export default Page;

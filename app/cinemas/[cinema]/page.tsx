import { Cinema } from "./components/Cinema";
import cinemas from "@/Data/Cinemas";

export default function Page({ params }: { params: { cinema: string } }) {
  const cinema = cinemas[3];
  return (
    <>
      <Cinema cinema={cinema} />
    </>
  );
}

import { blackBtnStyle } from "@/Styles/Tailwind-Styles";
import Link from "next/link";

const ScreeningsLink = () => {
  return (
    <Link href={"#screenings"} className={"uppercase " + blackBtnStyle}>
      screenings
    </Link>
  );
};

export default ScreeningsLink;

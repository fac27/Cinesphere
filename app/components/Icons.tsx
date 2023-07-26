import { ScreeningType } from "@/Types/Object-Interfaces";
import { FaAudioDescription } from "react-icons/fa";
import { BiSolidCaptions } from "react-icons/bi";
import { FaBabyCarriage } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";

interface Props {
  screening: ScreeningType;
}

const Icons = ({ screening }: Props) => {
  const iconArr = [];
  screening.audioDescription && iconArr.push(<FaAudioDescription />);
  (screening.closedCaptions || screening.subtitles) &&
    iconArr.push(<BiSolidCaptions />);
  screening.babyFriendly && iconArr.push(<FaBabyCarriage />);
  screening.relaxedScreening && iconArr.push(<FaInfinity />);

  return (
    <div className="flex justify-center align-middle gap-1">{iconArr}</div>
  );
};

export default Icons;

import { ScreeningType } from "@/Types/Object-Interfaces";
import { FaAudioDescription } from "react-icons/fa";
import { BiSolidCaptions } from "react-icons/bi";
import { FaBabyCarriage } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

interface Props {
  screening: ScreeningType;
}

const Icons = ({ screening }: Props) => {
  const iconArr = [];
  screening.audioDescription &&
    iconArr.push(<FaAudioDescription key={uuidv4()} />);
  (screening.closedCaptions || screening.subtitles) &&
    iconArr.push(<BiSolidCaptions key={uuidv4()} />);
  screening.babyFriendly && iconArr.push(<FaBabyCarriage key={uuidv4()} />);
  screening.relaxedScreening && iconArr.push(<FaInfinity key={uuidv4()} />);

  return (
    <div className="flex justify-center align-middle gap-1">{iconArr}</div>
  );
};

export default Icons;

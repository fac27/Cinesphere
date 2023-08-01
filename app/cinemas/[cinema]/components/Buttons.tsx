import { blackBtnStyle } from "@/Styles/Tailwind-Styles";
import BackButton from "@/app/components/BackButton";

const Buttons = () => {
  return (
    <div className="m-5 flex justify-around">
      <BackButton page={"cinemas"} />
      <button className={blackBtnStyle}>Listings</button>
    </div>
  );
};

export default Buttons;

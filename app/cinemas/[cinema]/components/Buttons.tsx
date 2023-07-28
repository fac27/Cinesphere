import { blackBtnStyle } from "@/Styles/Tailwind-Styles";

const Buttons = () => {
  return (
    <div className="m-5 flex justify-around">
      <button>Back</button>
      <button className={blackBtnStyle}>Listings</button>
    </div>
  );
};

export default Buttons;

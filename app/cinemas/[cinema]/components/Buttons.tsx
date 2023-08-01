import BackButton from "@/app/components/BackButton";
import ScreeningsLink from "@/app/components/ScreeningsLink";

const Buttons = () => {
  return (
    <div className="m-5 flex justify-around">
      <BackButton page={"cinemas"} />
      <ScreeningsLink />
    </div>
  );
};

export default Buttons;

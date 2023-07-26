import React from "react";

import Filter from "./Filter";
// eslint-disable-next-line no-unused-vars
import { genres, languages, ageRating, era, score } from "@/Data/Filters";

interface Props {
  isVisible: boolean;
}

const Modal = ({ isVisible }: Props): React.JSX.Element => {
  return (
    <dialog open={isVisible} className="text-center my-4">
      <Filter filters={genres} category="GENRE" />
      <Filter filters={languages} category="LANGUAGE" />
      <Filter filters={era} category="ERA" />
      <form method="dialog">
        <button type="submit" className="p-2 text-white bg-black rounded-lg">
          Done
        </button>
      </form>
    </dialog>
  );
};

export default Modal;

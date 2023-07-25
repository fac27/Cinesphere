import Filter from "./Filter"
import { genres, languages, ageRating, era, score } from "@/Data/Filters"

interface Props {
  isVisible: boolean
}

const Modal = ({isVisible}: Props) => {
  return (
  <dialog open={isVisible ? true : undefined} className="text-center my-4">
  <Filter filters={genres} category="GENRE"/>
  <Filter filters={languages} category="LANGUAGE"/>
  <Filter filters={ageRating} category="AGE RATING"/>
  <Filter filters={era} category="ERA"/>
  <Filter filters={score} category="SCORE"/>
  <form method="dialog">
    <button type="submit" className="p-2 text-white bg-black rounded-lg">
          Done
    </button>
  </form>
</dialog>
  )
}

export default Modal
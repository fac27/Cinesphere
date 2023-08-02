import { Dispatch, SetStateAction } from "react";
import FilterButton from "../../components/FilterButton";

interface Props {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const FilterBar = ({ setIsVisible }: Props) => {
  return (
    <div className="flex justify-end mt-4 w-5/6 md:w-1/2 mr-auto ml-auto">
      <FilterButton setIsVisible={setIsVisible} />
    </div>
  );
};

export default FilterBar;

import { Dispatch, SetStateAction } from "react";
import FilterButton from "../../components/FilterButton"


interface Props {
    setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const FilterBar = ({setIsVisible}: Props) => {
    return (
        <div className="flex flex-row justify-center mt-4">
            <input
            type="text"
            className="p-2 w-40 flex border border-black rounded-lg"
            placeholder="search"
            ></input>
            <FilterButton setIsVisible={setIsVisible}/>
        </div>
    )
}


export default FilterBar
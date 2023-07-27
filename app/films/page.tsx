"use client";


import FilmsContainer from "./components/FilmsContainer";

// import { exampleGenres } from "@/Data/Filters";
// import { useFilters } from "@/app/Context/store";

const Films = () => {


  // const filterContext = useFilters();
  // const genres = filterContext?.genres as string[];
  // const setGenres = filterContext?.setGenres as React.Dispatch<React.SetStateAction<string[]>>;

  // setGenres(exampleGenres)
  
  

  return (
    <>

      <FilmsContainer />
    </>
  );
};

export default Films;

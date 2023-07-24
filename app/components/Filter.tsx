import React from "react";

import FilterTag from "./FilterTag";

interface Props {
  genres: string[]
}

const Filter = ({ genres }: Props) => {
  return (
    <>
      <div className="bg-black text-white text-center p-2">
        <h1>GENRE</h1>
      </div>
      {genres.map((genre: string) => (
        <FilterTag key={genre} genre={genre} />
      ))}
    </>
  );
};

export default Filter;

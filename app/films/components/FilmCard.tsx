import { FC } from "react"

import { getFilmData } from "@/Utils/getFilmData"

const filmName: string = "The Royal Tenenbaums"
const genre: string = "comedy"
const year: number = 2009
const length:string = '109 mins'
const director:string = "Wes Anderson"

const FilmCard: FC = () => {
  
  getFilmData("tt1462764");


  return (
    <div
    // style="background-image: url('...');"
    >
      <h1>{filmName}</h1>
      <h2>{genre} / {year} / {length}</h2>
      <h2>{director}</h2>
    </div>
  )
}

export default FilmCard;

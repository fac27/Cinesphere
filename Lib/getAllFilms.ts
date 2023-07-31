// import { CinemaType } from "@/Types/Object-Interfaces";
import supabaseClient from "./supabaseClient";

const getAllFilms = async () => {
  const { data, error } = await supabaseClient
    .from("film_temp")
    .select("id")
    .select("*");
  if (error) {
    console.log(`Error getting cinema data: ${error.message}`);
    throw error;
  }
  console.log('GET ALL FILMS:', data);
  return data;
};

export default getAllFilms;
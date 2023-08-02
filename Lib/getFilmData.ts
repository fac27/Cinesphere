// import { FilmType } from "@/Types/Object-Interfaces";
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
  return data;
};

export default getAllFilms;

export const getIndvFilm = async (id: string) => {
  const { data, error } = await supabaseClient
    .from("film_temp")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(`Error getting cinema data: ${error.message}`);
    throw error;
  }
  return data;
};

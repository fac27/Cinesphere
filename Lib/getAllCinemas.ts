import { CinemaType } from "@/Types/Object-Interfaces";
import supabaseClient from "./supabaseClient";

const getAllCinemas = async (): Promise<CinemaType[]> => {
  const { data, error } = await supabaseClient.from("venue").select("*");

  if (error) {
    console.log(`Error getting cinemas: ${error.message}`);
    throw error;
  }

  return data;
};

export default getAllCinemas;

import { CinemaType } from "@/Types/Object-Interfaces";
import supabaseClient from "./supabaseClient";

const getAllCinemas = async (): Promise<CinemaType[]> => {
  let { data, error } = await supabaseClient.from("venue").select("*");

  if (error) {
    console.log(`Error getting cinemas: ${error.message}`);
    throw error;
  }

  console.log("Data :", data);
  return data;
};

export default getAllCinemas;

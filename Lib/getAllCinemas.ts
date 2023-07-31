// import { CinemaType } from "@/Types/Object-Interfaces";
import supabaseClient from "./supabaseClient";

const getAllCinemas = async () => {
  const { data, error } = await supabaseClient.from("venue").select("*");
  if (error) {
    console.log(`Error getting cinema data: ${error.message}`);
    throw error;
  }
  return data;
};

export default getAllCinemas;

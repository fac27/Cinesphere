// import { CinemaType } from "@/Types/Object-Interfaces";
import transformObj from "@/Utils/transformObj";
import supabaseClient from "./supabaseClient";

const getAllCinemas = async () => {
  const { data, error } = await supabaseClient
    .from("venue")
    .select("id")
    .select("*");
  if (error) {
    console.log(`Error getting cinema data: ${error.message}`);
    throw error;
  }
  const transformedData = transformObj(data);
  return transformedData;
};

export default getAllCinemas;

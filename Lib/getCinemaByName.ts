// import { CinemaType } from "@/Types/Object-Interfaces";
import supabaseClient from "./supabaseClient";

const getCinemaByName = async (name: string) => {
  const { data, error } = await supabaseClient
    .from("venue")
    .select("*")
    .eq("cinema_name", name);
  if (error) {
    console.log(`Error getting cinema data: ${error.message}`);
    throw error;
  }
  return data[0];
};

export default getCinemaByName;

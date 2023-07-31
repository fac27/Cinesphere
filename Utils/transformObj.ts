import { CinemaType, DbCinemaType } from "@/Types/Object-Interfaces";

const transformObj = (arr: DbCinemaType[]): CinemaType[] => {
  const newArr = arr.map((cinema) => {
    let newObj: any = {};
    for (let key in cinema) {
      if (key === "audio_description") {
        newObj["Audio Description"] = cinema[key];
      } else if (key === "closed_captions") {
        newObj["Closed Captions"] = cinema[key];
      } else if (key === "relaxed_screenings") {
        newObj["Relaxed Screenings"] = cinema[key];
      } else if (key === "free_carer_tickets") {
        newObj["Free Carer Tickets"] = cinema[key];
      } else if (key === "wheelchair_accessible") {
        newObj["Wheelchair Accessible"] = cinema[key] ? true : "Partial";
      } else if (key === "bar") {
        newObj["Bar"] = cinema[key];
      } else if (key === "cafe") {
        newObj["Cafe"] = cinema[key];
      } else {
        newObj[key] = cinema[key];
      }
    }
    return newObj as CinemaType;
  });
  return newArr;
};

export default transformObj;

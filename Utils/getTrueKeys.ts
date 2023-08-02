import { CinemaType } from "@/Types/Object-Interfaces";

export function getTrueKeys(obj: CinemaType) {
    const keys = [];
    for (const key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key) && obj[key] === true) {
        keys.push(key);
      }
    }
    return keys;
  }
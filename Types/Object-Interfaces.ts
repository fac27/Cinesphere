export interface CinemaType {
  cinemaName: string;
  about: string;
  address: string;
  postcode: string;
  area: string;
  website: string;
  "Audio Description": boolean;
  "Closed Captions": boolean;
  "Relaxed Screenings": boolean;
  "Wheelchair Accessible": boolean | string; // Use "boolean | string" since one of the cinemas has "Partial" for this property
  "Free Carer Tickets": boolean;
  wheelchairDetails?: string; // Optional property
  HoHDetails?: string | boolean; // Optional property, and the last cinema has a "null" value for this property
  visualImpairmentDetails?: string | boolean; // Optional property, and one cinema has a "boolean" value for this property
  neurodiverseDetails?: string | boolean; // Optional property
  freeCarerTicketsDetails?: string | boolean; // Optional property
  Bar: boolean;
  Cafe: boolean;
  images: {
    exterior: string;
    Interior1: string;
    Interior2: string;
    Interior3: string;
  };
  [key: string]: any;
}

export interface LanguageCodeObjType {
  [languageName: string]: string;
}

export interface GenreCodeObjType {
  [genreName: string]: number;
}

export interface FilmType {
    backdrop_img: string;
    director: string;
    genre: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_img: string;
    release_date: string;
    runtime: number;
    vote_average: number;
}

export interface ScreeningType {
  cinema: string;
  releaseYear?: string;
  dateTime: string;
  time?: string;
  filmName: string;
  audioDescription: boolean;
  closedCaptions: boolean;
  subtitles: boolean;
  relaxedScreening: boolean;
  babyFriendly: boolean;
  imdbId: string;
}

export interface DbCinemaType {
  id: number;
  cinema_name: string;
  about: string;
  postcode: string;
  website: string;
  audio_description: boolean;
  closed_captions: boolean;
  relaxed_screenings: boolean;
  wheelchair_accessible: boolean;
  free_carer_tickets: boolean;
  wheelchair_details: string;
  hoh_details: string;
  visual_impairment_details: string;
  neurodiverse_details: string;
  free_carer_tickets_details: string;
  bar: boolean;
  cafe: boolean;
  img_exterior: string;
  img_interior_1: string;
  img_interior_2: string;
  img_interior_3: string;
  address: string;
  area: string;
}

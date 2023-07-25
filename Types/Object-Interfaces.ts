export interface CinemaType {
  cinemaName: string;
  about: string;
  address: string;
  area: string;
  website: string;
  audioDescription: boolean;
  closedCaptions: boolean;
  relaxedScreenings: boolean;
  wheelchairAccessible: boolean | string; // Use "boolean | string" since one of the cinemas has "Partial" for this property
  freeCarerTickets: boolean;
  wheelchairDetails?: string; // Optional property
  HoHDetails?: string | boolean; // Optional property, and the last cinema has a "null" value for this property
  visualImpairmentDetails?: string | boolean; // Optional property, and one cinema has a "boolean" value for this property
  neurodiverseDetails?: string | boolean; // Optional property
  freeCarerTicketsDetails?: string | boolean; // Optional property
  bar: boolean;
  cafe: boolean;
  images: {
    exterior: string;
    Interior1: string;
    Interior2: string;
    Interior3: string;
  };
}

export interface FilmType {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | any; // Update the type based on the actual data structure
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
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

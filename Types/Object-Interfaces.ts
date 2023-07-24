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
  [key: string]: any;
}

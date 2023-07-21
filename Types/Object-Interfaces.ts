export interface Cinema {
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
    HoHDetails?: string | null; // Optional property, and the last cinema has a "null" value for this property
    visualImpairmentDetails?: string | boolean; // Optional property, and one cinema has a "boolean" value for this property
    neurodiverseDetails?: string | null; // Optional property
    freeCarerTicketsDetails?: string; // Optional property
    bar: boolean;
    cafe: boolean;
    images: {
      exterior: string;
      Interior1: string;
      Interior2: string;
      Interior3: string;
    };
  }
  
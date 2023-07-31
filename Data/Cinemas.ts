import { CinemaType } from "../Types/Object-Interfaces";

export const cinemas: CinemaType[] = [
  {
    cinemaName: "The Lexi",
    about:
      "The Lexi is London's only social enterprise cinema, a volunteer-run picture palace with strong links not just to our local community, but to a unique charity project thousands of miles away in South Africa.",
    address: "194b Chamberlayne Road, Kensal Rise\nLondon NW10 3JU",
    postcode: "NW10 3JU",
    area: "Kensal Rise",
    website: "https://thelexicinema.co.uk/",
    "Audio Description": true,
    "Closed Captions": true,
    "Relaxed Screenings": true,
    "Wheelchair Accessible": "Partial",
    "Free Carer Tickets": true,
    wheelchairDetails:
      "The Lexi Cinema’s retrofitted Edwardian building presents access challenges, but we're committed to improving access. Wheelchair seats can be booked by phone or at the box office. Accessible gender-neutral toilets are available.",
    HoHDetails:
      "Hearing loop upgraded to Dolby Fidelio system. Headsets available. Check program for closed caption and audio described screenings.",
    visualImpairmentDetails:
      "Dolby Fidelio offers audio description for some films. Guide dogs welcome.",
    neurodiverseDetails:
      "Relaxed Screenings offer autism-friendly environment with no ads/trailers, lower volume/lighting. Download Visual Guide for first-time visits.",
    freeCarerTicketsDetails:
      "Free carer tickets available. Book in advance or in-person, no ID required.",
    Bar: true,
    Cafe: false,
    images: {
      exterior: "/assets/cinema-images/the-lexi-exterior.jpeg",
      Interior1: "/assets/cinema-images/the-lexi-interior-1.jpeg",
      Interior2: "/assets/cinema-images/the-lexi-interior-2.jpeg",
      Interior3: "/assets/cinema-images/the-lexi-interior-3.jpeg",
    },
  },

  {
    cinemaName: "The David Lean Cinema",
    about:
      "The David Lean cinema is a 68 seat arts cinema based in the Croydon Clocktower arts complex. It is run by a non-profit community interest company and staffed by volunteers.",
    address:
      "The David Lean Cinema, Croydon Clocktower, Katharine Street, Croydon, CR9 1ET",
    postcode: "CR9 1ET",
    area: "Croydon",
    website: "https://www.davidleancinema.org.uk/",
    "Audio Description": false,
    "Closed Captions": true,
    "Relaxed Screenings": false,
    "Wheelchair Accessible": true,
    "Free Carer Tickets": true,
    wheelchairDetails:
      "Cinema accessible by ramp and lift. Up to 2 wheelchair spaces available.",
    HoHDetails:
      "Infrared receivers with personal loop provided. Monthly subtitled screenings.",
    visualImpairmentDetails: false,
    neurodiverseDetails: false,
    freeCarerTicketsDetails:
      "There is dedicated disabled parking available nearby",
    Bar: true,
    Cafe: true,
    images: {
      exterior: "/assets/cinema-images/david-lean-exterior.jpeg",
      Interior1: "/assets/cinema-images/david-lean-interior-1.jpeg",
      Interior2: "/assets/cinema-images/david-lean-interior-2.jpeg",
      Interior3: "/assets/cinema-images/david-lean-interior-3.jpeg",
    },
  },
  {
    cinemaName: "ArtHouse",
    about:
      "A former Salvation Army Hall that has been transformed into a dynamic new cultural venue for film, fine art, live music, discussion groups, theatre, live streaming, workshops, dance, comedy and more.",
    address: "159A Tottenham Lane, N8 9BT",
    postcode: "N8 9BT",
    area: "Crouch End",
    website: "https://www.arthousecrouchend.co.uk/",
    "Audio Description": false,
    "Closed Captions": true,
    "Relaxed Screenings": false,
    "Wheelchair Accessible": true,
    "Free Carer Tickets": true,
    wheelchairDetails:
      "To book designated space and adjoining seat, email info@arthousecrouchend.co.uk or visit in person. Spaces released if unbooked 24h prior.",
    HoHDetails: false,
    visualImpairmentDetails: false,
    neurodiverseDetails: false,
    freeCarerTicketsDetails: false,
    Bar: true,
    Cafe: true,
    images: {
      exterior: "/assets/cinema-images/art-house-exterior.jpeg",
      Interior1: "/assets/cinema-images/art-house-interior-1.jpeg",
      Interior2: "/assets/cinema-images/art-house-interior-2.jpeg",
      Interior3: "/assets/cinema-images/art-house-interior-3.jpeg",
    },
  },
  {
    cinemaName: "ActOne",
    about:
      "A community-led cinema and café, nestled in Acton’s historic Passmore Edwards Library with two 60-seat screening rooms fully equipped with the latest digital technology and a beautiful lounge.",
    address: "ActOne Cinema\n119 - 121 High Street\nLondon, W3 6NA",
    postcode: "W3 6NA",
    area: "Acton",
    website: "https://actonecinema.co.uk/",
    "Audio Description": false,
    "Closed Captions": false,
    "Relaxed Screenings": true,
    "Wheelchair Accessible": true,
    "Free Carer Tickets": true,
    wheelchairDetails:
      "Fully wheelchair-accessible. Ramp from street level. Wheelchair seats bookable online. Accessible gender-neutral toilets.",
    HoHDetails: false,
    visualImpairmentDetails: false,
    neurodiverseDetails:
      "Relaxed Screenings offer autism-friendly environment. Informal setting, exit anytime.",
    freeCarerTicketsDetails:
      "Carers get free ticket. Book in advance via email or in-person.",
    Bar: true,
    Cafe: true,
    images: {
      exterior: "/assets/cinema-images/actone-exterior.jpeg",
      Interior1: "/assets/cinema-images/actone-interior-1.jpeg",
      Interior2: "/assets/cinema-images/actone-interior-2.jpeg",
      Interior3: "/assets/cinema-images/actone-interior-3.jpeg",
    },
  },
  {
    cinemaName: "Catford Mews",
    about:
      "Catford Mews is a brand new independent entertainment venue in Lewisham with three cinema screens and a spacious foyer containing a food court with a number of independent local food vendors.",
    address: "32 Winslade Way\nCatford Centre\nLondon\nSE6 4JU London",
    postcode: "SE6 4JU",
    area: "Catford",
    website: "https://catford-mews.co.uk/",
    "Audio Description": false,
    "Closed Captions": true,
    "Relaxed Screenings": true,
    "Wheelchair Accessible": true,
    "Free Carer Tickets": true,
    wheelchairDetails:
      "Fully wheelchair-accessible. Wheelchair spaces in front row. Assistance dogs welcome.",
    HoHDetails:
      "Screenings with subtitles for Deaf and Hard of Hearing. Foreign language films have subtitles.",
    visualImpairmentDetails: false,
    neurodiverseDetails:
      "We host relaxed screenings of older family films and of new releases. In these screenings the lights are slightly raised and the volume is lower than usual, for a gentler cinema experience. We aim to offer at least one relaxed screening a week, but it’s best to confirm the film and times on our website which will clearly mark any relaxed screening.",
    freeCarerTicketsDetails:
      "CEA cardholders can bring a carer free of charge to any screening they’re purchasing a ticket for. Please ensure that you bring your CEA card to present to a member of staff.",
    Bar: true,
    Cafe: true,
    images: {
      exterior: "/assets/cinema-images/catford-mews-exterior.jpeg",
      Interior1: "/assets/cinema-images/catford-mews-interior-1.jpeg",
      Interior2: "/assets/cinema-images/catford-mews-interior-2.jpeg",
      Interior3: "/assets/cinema-images/catford-mews-interior-3.jpeg",
    },
  },
  {
    cinemaName: "Chiswick Cinema",
    about:
      "Chiswick Cinema offers five screens, a restaurant and a private Members’ restaurant and bar. Enjoy a mixture of current releases, family screenings and event cinema in luxurious surroundings.",
    address: "The Chiswick Cinema,\n94 – 96 Chiswick High Road,\nW4 1SH",
    postcode: "W4 1SH",
    area: "Chiswick",
    website: "https://www.chiswickcinema.co.uk/",
    "Audio Description": true,
    "Closed Captions": true,
    "Relaxed Screenings": false,
    "Wheelchair Accessible": true,
    "Free Carer Tickets": true,
    wheelchairDetails:
      "Fully accessible to wheelchair users. Lifts to all levels, step-free access to screens, bar, restaurant, and café. Assistance dogs allowed.",
    HoHDetails: false,
    visualImpairmentDetails:
      "Narration track through headset for some films. Check availability before visit.",
    neurodiverseDetails: false,
    freeCarerTicketsDetails:
      "CEA cardholders get free carer ticket. Book online, in-person, or over the phone.",
    Bar: true,
    Cafe: true,
    images: {
      exterior: "/assets/cinema-images/chiswick-exterior.jpeg",
      Interior1: "/assets/cinema-images/chiswick-interior-1.jpeg",
      Interior2: "/assets/cinema-images/chiswick-interior-2.jpeg",
      Interior3: "/assets/cinema-images/chiswick-interior-3.jpeg",
    },
  },
  {
    cinemaName: "The Prince Charles",
    about:
      "The last of the independents still operating in London’s cine-famous ‘West End’ and one of the most popular independent cinemas in the UK, screening a huge variety of films past and present.",
    address: "7 Leicester Pl\n\nLondon\n\nWC2H 7BY",
    postcode: "WC2H 7BY",
    area: "Leicester Square",
    website: "https://princecharlescinema.com/",
    "Audio Description": true,
    "Closed Captions": true,
    "Relaxed Screenings": false,
    "Wheelchair Accessible": false,
    "Free Carer Tickets": true,
    wheelchairDetails:
      "No full wheelchair access due to narrow stairwell. Updates will be provided if possible changes.",
    HoHDetails:
      "Select screenings have subtitles. Foreign language films have subtitles.",
    visualImpairmentDetails:
      "Dolby Fidelio system offers Hearing Impaired and Visually Impaired options. Check availability.",
    neurodiverseDetails: false,
    freeCarerTicketsDetails:
      "CEA cardholders get free carer ticket. Book online or in-person.",
    Bar: true,
    Cafe: false,
    images: {
      exterior: "/assets/cinema-images/prince-charles-exterior.jpeg",
      Interior1: "/assets/cinema-images/prince-charles-interior-1.jpeg",
      Interior2: "/assets/cinema-images/prince-charles-interior-2.jpeg",
      Interior3: "/assets/cinema-images/prince-charles-interior-3.jpeg",
    },
  },
];

export default cinemas;

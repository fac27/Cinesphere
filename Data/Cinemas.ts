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
    audioDescription: true,
    closedCaptions: true,
    relaxedScreenings: true,
    wheelchairAccessible: "Partial",
    freeCarerTickets: true,
    wheelchairDetails:
      "The Lexi Cinema’s retrofitted Edwardian building presents a few access challenges, but we are 100% committed to constantly improving access for all.\n Drop off point The recommended drop off point for wheelchair users is around the corner from the cinema, the first left turn onto Hardinge Road. There is a drop kerb at the entrance to the car park for the Kensal Rise Constitutional Club on the immediate left-hand side of the turning. There is a raised kerb further along, should any visitors need a kerb to help them alight from a vehicle.\n The Box Office and Screen 1 have level access from the street. Our box office counter also has a lower recessed section. The Balcony and Main Bar are unfortunately not wheelchair accessible. We are very happy to serve you in your seat if you’d like anything from the bar – if you place your order at the box office on arrival we will bring your drinks to you.\n To access Screen 2 there is a gravel car park to cross at the back of the building which may not be optimal for all. There is an intercom at this entrance which will be answered by the Box Office volunteer. Upon greeting you and understanding that you require access, they will release the door electronically. Our duty manager will meet you there to deploy the portable ramp if required, and to ensure you have all you need. Yourself or a companion may present themselves at the Box Office first, or go directly to the Screen 2 entrance. If you would like any assistance crossing the car park, presenting at the Box Office or calling on either of the phone numbers below, is advisable. There is a small bar for Screen 2 but this won’t always be open, so please check ahead of your visit.\n Wheelchair seats can be booked through our booking line 11am - 6pm, Monday - Friday. Outside of these times, you can call the office on 0208 955 1521. In Screen 1 these are seats B1 and B2 and in Screen 2 these are A0 and A1. The duty manager on the day will be expecting you and we can make them aware of any other access needs you may have. You are welcome to transfer into a seat, or we can remove the seat to make space for your wheelchair.\n Accessible gender-neutral toilets These are found immediately inside the main entrance, and in the Screen 2 lounge.",
    HoHDetails:
      'Our hearing loop has been upgraded to the Dolby Fidelio system, and we have headsets for customers to use in the auditoriums. You can also bring your own earphones if you prefer. Please ask for a device at the box office and let us know which screen you’re heading to so we can tune you in! Read below for further detail. We run screenings with closed captions regularly, so please check our programme for details.\n Other events such as Relaxed and Dementia-friendly screenings will be defined appropriately in our programme listings.\n CC = Closed Captions (Subtitled dialogue) AD = Audio Described e.g. "Aeroplane flies over head”. Provided through a headset with adjustable volume on request at Box Office. Only for films labelled as such. The film will not be subtitled unless also specified.\n HI = Hearing Impaired. Dialogue is amplified through a headset at adjustable volume. Units to access this facility are available for all films, at the Box Office. The film will not be subtitled unless also specified.',
    visualImpairmentDetails:
      "The Dolby Fidelio system also offers audio description, but currently not all films we screen will have audio description available. Where films do come with audio description files we will indicate this by tagging screenings with the AD (Audio Described) tag, as well as featuring them on the Audio Described page on the Accessibility tab of our website. For films marked as AD, please ask for a headset at the box office and let us know which screen you’re going to.\n Guide dogs are welcome.",
    neurodiverseDetails:
      "Our Relaxed Screenings are Autism-friendly and include films from our main programme in a more relaxed environment, with no adverts or trailers, better lighting and lower sound volumes. We also keep social distancing in place to allow for more space between seats. Relaxed Screenings are tailored for a neurodiverse audience but also for anyone who would appreciate a more informal cinema setting, where you are able to exit the screening at any time if you need a breakout space.\n If youre visiting the Lexi for the first time and would like to know what to expect from your visit so you can plan ahead, youre welcome to download our Visual Guide here. It shows the journey to the cinema from Kensal Rise overground and provides a visual guide of navigating the cinema space to prepare you for your visit.",
    freeCarerTicketsDetails:
      "Free tickets for carers\n Those with access needs will be charged the usual price for any screening. However, if you have a carer who needs to accompany you, they are entitled to a free ticket. These can be booked in advance over the phone (we wont charge the booking fee), or in person at the box office. We always recommend booking in advance to ensure you get the seats that meet your needs. Our staff know that not all disabilities are visible so we will not ask to see any ID.",
    bar: true,
    cafe: false,
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
    audioDescription: false,
    closedCaptions: true,
    relaxedScreenings: false,
    wheelchairAccessible: true,
    freeCarerTickets: true,
    wheelchairDetails:
      "The cinema is accessible by ramp and lift. Up to 2 wheelchair spaces are available – advance booking is recommended as these will be re-assigned to standard seating if demand for a screening is high and they remain unbooked.",
    HoHDetails:
      "Infrared receivers with personal loop are available for those with impaired hearing (note that this facility is not available at all screenings as the Council Chamber has a similar facility which may cause interference during meetings). At least one film a month is scheduled with subtitles for hard of hearing patrons. See film listings for details. Most months also have foreign language film screenings which deploy English sub titles.",
    visualImpairmentDetails: false,
    neurodiverseDetails: false,
    freeCarerTicketsDetails:
      "There is dedicated disabled parking available nearby",
    bar: true,
    cafe: true,
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
    audioDescription: false,
    closedCaptions: true,
    relaxedScreenings: false,
    wheelchairAccessible: true,
    freeCarerTickets: true,
    wheelchairDetails:
      "To book the designated space and adjoining seat, please email info@arthousecrouchend.co.uk or visit us in person at the venue. The wheelchair position and neighbouring seat are available at all performances and will be released for general sale 24hours prior to performance if not booked.",
    HoHDetails: false,
    visualImpairmentDetails: false,
    neurodiverseDetails: false,
    freeCarerTicketsDetails: false,
    bar: true,
    cafe: true,
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
    audioDescription: false,
    closedCaptions: false,
    relaxedScreenings: true,
    wheelchairAccessible: true,
    freeCarerTickets: true,
    wheelchairDetails:
      "All areas of our venue are wheelchair accessible. A ramp from street level brings you to the main entrance of ActOne CInema. From there, there is level access to the Box Office, Cafe/Bar, Screen 1, Screen 2 and the disabled toilets.\nWheelchair seats for Screen 1 and Screen 2 can be booked through our online booking system.\nAccessible gender-neutral toilets. These are found immediately inside the main entrance.",
    HoHDetails: false,
    visualImpairmentDetails: false,
    neurodiverseDetails:
      "Our Relaxed Screenings are autism-friendly and include films from our main programme in a more relaxed environment, with no adverts or trailers, better lighting and lower sound volumes. Relaxed Screenings are tailored for a neurodiverse audience but also for anyone who would appreciate a more informal cinema setting, where you are able to exit the screening at any time if you need a breakout space.",
    freeCarerTicketsDetails:
      "Those with access needs will be charged the usual price for any screening. However, if you have a carer who needs to accompany you, they are entitled to a free ticket. These can be booked in advance if you contact us via email, or in person at the box office.",
    bar: true,
    cafe: true,
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
    audioDescription: false,
    closedCaptions: true,
    relaxedScreenings: true,
    wheelchairAccessible: true,
    freeCarerTickets: true,
    wheelchairDetails:
      "We are fully wheelchair-accessible. and all of our screens have at least one permanent wheelchair space. If you require a wheelchair space please let us know in advance and we'll reserve it for you. Wheelchair spaces are located in the front row of each screen. Assistance dogs may be taken into the cinema – please tell us when booking to ensure your seat has enough space.\nWe have two accessible toilets in the building.",
    HoHDetails:
      "we screen captioned screenings throughout the week. This is both for new releases, and when possible for older films. The screenings are clearly marked as ‘Subtitled’ or ‘Captioned’ on our What’s On page and in our printed listings.",
    visualImpairmentDetails: false,
    neurodiverseDetails:
      "We host relaxed screenings of older family films and of new releases. In these screenings the lights are slightly raised and the volume is lower than usual, for a gentler cinema experience. We aim to offer at least one relaxed screening a week, but it’s best to confirm the film and times on our website which will clearly mark any relaxed screening.",
    freeCarerTicketsDetails:
      "CEA cardholders can bring a carer free of charge to any screening they’re purchasing a ticket for. Please ensure that you bring your CEA card to present to a member of staff.",
    bar: true,
    cafe: true,
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
    audioDescription: true,
    closedCaptions: true,
    relaxedScreenings: false,
    wheelchairAccessible: true,
    freeCarerTickets: true,
    wheelchairDetails:
      "The Chiswick Cinema is fully accessible to wheelchair users or anyone with limited mobility. There are lifts to all levels and step-free access to all screens, as well as the bar, restaurant and café. Each of our screens have step-free rows.\n\nWhen you arrive at the cinema, please let a member of staff know if there is anything we can assist you with. Whether it’s moving your booked tickets to another part of the auditorium, information on our Audio Description headsets or helping you to your seat, we’ll assist you wherever we can. A passenger lift services all floors of the cinema including both bars and restaurants.",
    HoHDetails: false,
    visualImpairmentDetails:
      "or selected films, a narration track is played through a special headset and fills the gaps between dialogue by describing what’s happening on screen. The track is undetectable to anyone not wearing a headset and so doesn’t affect their viewing experience.\n\nMost new films are offered with Audio Description available so please do reach out to the team to check it is available for you in advance of your visit. If you need the induction loop or a headset, please ask a member of staff when you arrive – we can also recommend the best seats to use in the screen.",
    neurodiverseDetails: false,
    freeCarerTicketsDetails:
      "We can only take CEA bookings at the Chiswick Cinema Main Bar for the time being. If you wish to book your tickets in advance, please book the total number of tickets you require, and visit the box office when you arrive at the cinema to get the carer ticket refunded.",
    bar: true,
    cafe: true,
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
    audioDescription: true,
    closedCaptions: true,
    relaxedScreenings: false,
    wheelchairAccessible: false,
    freeCarerTickets: true,
    wheelchairDetails:
      "We do not have wheelchair access throughout the entire building due to rejections from the council to add in a ramp or stair lift in our stairwell, as it's too narrow. Sadly, the mechanics of the problem make it look like this may never be possible to fix, but should that change we will update this section of the website.",
    HoHDetails:
      "Select screenings are presented with Subtitles for Deaf and Hard of Hearing, these will be marked with 'SDH' next to the performance time. \n\n\n\nForeign Language live action feature films and animated titles are presented with Subtitles, unless otherwise stated. We may on occasion state SUB (Subtitled) next to animated titles, this would usually be due to the film being on general release and our need to differentiate our shows from those taking place elsewhere.",
    visualImpairmentDetails:
      "We've installed Dolby Fidelio at the PCC - a wireless audio system that delivers both Hearing Impaired audio (HI) for hard-of-hearing patrons, and Visually Impaired Narration (VI) for visually impaired patrons. We have four transmitters available for free use during performances.\n\n\n\nWhen in use, the headset can provide a HI or VI stream to both ears, or HI and VI together (one for each ear). You can use the supplied plug-in headphones or bring along your own if you'd prefer. It connects with a typical stereo phono plug. You control the volume on the device yourself.\n\n\n\nFor our digital screenings, there's a 95% chance we have an audio description track that can be transmitted for the performance. Please check with us before travelling if audio description is available for your chosen screening.\n\n\n\nFor our film screenings, which you can see listed as 35mm and 70mm, there are no audio description capabilities.",
    neurodiverseDetails: false,
    freeCarerTicketsDetails:
      "An in-date CEA card provides one free ticket alongside a paid for ticket.\n\n\n\nYou can book online, in person or over the phone.\n\n\n\nThe process for using your CEA card to make a booking online is below.\n\n\n\n1. When buying tickets you will have the option to choose a Carer (CEA Card) ticket type alongside your regular ticket type. Click Add to Order\n\n\n\n2. On the next screen there is a button that says CEA CARD NUMBERS. Please click Apply CEA Card .\n\n\n\n3. On the following pop up window please enter in a valid CEA Card number and click the Apply button to qualify for the discount.\n\n\n\n4. You should now see that the Carer (CEA Card) ticket has zero cost amd you can now move to the payment screen with a free carer ticket.\n\n\n\nPlease note that only one Carer ticket can be discounted per booking. If you wish to book for multiple films please do so in separate transactions or call our box office on the number below.\n\n\n\nAny issues please call 0207 494 3654 or drop by in person.",
    bar: true,
    cafe: false,
    images: {
      exterior: "/assets/cinema-images/prince-charles-exterior.jpeg",
      Interior1: "/assets/cinema-images/prince-charles-interior-1.jpeg",
      Interior2: "/assets/cinema-images/prince-charles-interior-2.jpeg",
      Interior3: "/assets/cinema-images/prince-charles-interior-3.jpeg",
    },
  },
];

export default cinemas;

"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
// import L from "leaflet";
import { CinemaType } from "@/Types/Object-Interfaces";
// import CinemaMapCard from "./CinemaMapCard";

interface Props {
  cinemas: CinemaType[];
}

const Map = ({ cinemas }: Props) => {
  const [newCinemas, setnewCinemas] = useState<CinemaType[]>([]);

  useEffect(() => {
    const getLocation = async (postcode: string) => {
      const response = await fetch("/api/coordinates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ postcode }),
      });

      return response.json();
    };

    const getCinemaLocations = async () => {
      const cinemaLocations = cinemas.map(async (cinema: CinemaType) => {
        const cinemaLocation = await getLocation(cinema.postcode);
        cinema.location = cinemaLocation;
        return cinema;
      });

      Promise.all(cinemaLocations).then((resolvedCinemaLocations) => {
        setnewCinemas(resolvedCinemaLocations);
      });
    };

    getCinemaLocations();
  }, [cinemas]);

  // const customIcon = new L.Icon({
  //   iconUrl: "/assets/pin1.png",
  //   iconSize: [35, 41],
  //   iconAnchor: [12, 41],
  //   popupAnchor: [1, -34],
  // });

  console.log(cinemas);
  console.log(newCinemas);

  return (
    <>
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={11}
        scrollWheelZoom={false}
        className="mb-10 mt-3 mr-auto ml-auto h-96 md:w-1/2 rounded-2xl w-4/5"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* {newCinemas.map((newCinema) => (
          <Marker
            key={newCinema.postcode}
            position={newCinema.location}
            icon={customIcon}
          >
            <Popup>
              <CinemaMapCard cinema={newCinema} />
            </Popup>
          </Marker>
        ))} */}
      </MapContainer>
    </>
  );
};

export default Map;

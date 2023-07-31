"use client";

import cinemas from "@/Data/Cinemas";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { v4 as uuidv4 } from "uuid";
import CinemaCard from "../cinemas/components/CinemaCard";

interface LocationType {
  id: string;
  lat: number;
  lon: number;
  name: string;
}

const Map = () => {
  const [locations, setLocations] = useState<LocationType[]>([]);

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
      const cinemaLocations = cinemas.map(async (cinema) => {
        const cinemaLocation = await getLocation(cinema.postcode);
        cinemaLocation.id = uuidv4();
        cinemaLocation.name = cinema.cinemaName;
        return cinemaLocation;
      });

      Promise.all(cinemaLocations).then((resolvedCinemaLocations) => {
        setLocations(resolvedCinemaLocations);
      });
    };

    getCinemaLocations();
  }, []);

  console.log(locations);

  const customIcon = new L.Icon({
    iconUrl: "/assets/pin1.png",
    iconSize: [35, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <>
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={11}
        scrollWheelZoom={false}
        style={{
          height: "500px",
          width: "90%",
          margin: "2rem auto",
          borderRadius: "1rem",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lon }}
            icon={customIcon}
          >
            <Popup className="h-full w-96">
              <CinemaCard
                cinema={cinemas.find(
                  (cinema) => cinema.cinemaName === location.name
                )}
                distances={[]}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;

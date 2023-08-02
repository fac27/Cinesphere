import "./globals.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Header from "./components/Header";
import { FilterProvider } from "./Context/store";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cinesphere",
  description: "Find local independent film",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ scrollBehavior: "smooth" }} lang="en">
      <FilterProvider>
        <body className={ibmPlexMono.className + " overflow-x-hidden"}>
          <Header />
          {children}
        </body>
      </FilterProvider>
    </html>
  );
}

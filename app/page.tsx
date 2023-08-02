import React from "react";
import Link from "next/link";
import Image from "next/image";

const Home: React.FC = (): React.JSX.Element => {
  return (
    <>
      <div className="mt-10 mr-auto ml-auto w-80 md:w-1/3 bg-bgColour2 p-6 rounded-2xl border border-black">
        <h1 className="text-2xl font-bold">Cinesphere</h1>
        <p className="mt-5">
          Cinesphere connects you to groundbreaking film, and the unique venues
          that screen them. We can be your local guide to the extraordinary
          realm of indie film. Let&#39;s celebrate the bold, the undiscovered,
          and the awe-inspiring.
        </p>
      </div>

      <div className="mt-12 mr-auto ml-auto w-80">
        <p className="text-center text-xl">I want to browse:</p>

        <div className="mt-6 flex gap-10 justify-center">
          <Link href={"/films"} className="films__container">
            <div className="relative w-32 h-32 md:w-64 md:h-64 flex items-center justify-center">
              <Image
                className="rounded"
                src="/assets/home-images/films.jpg"
                alt={`a photo of vintage film poster`}
                layout="fill"
                objectFit="cover"
              />

              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded" />
              <p className="relative text-white text-xl md:text-3xl text-center">
                Films
              </p>
            </div>
          </Link>

          <Link href={"/cinemas"} className="cinemas__container">
            <div className="relative w-32 h-32 md:w-64 md:h-64 flex items-center justify-center">
              <Image
                className="rounded"
                src="/assets/home-images/cinemas.webp"
                alt={`a photo of inside cinema theater`}
                layout="fill"
                objectFit="cover"
              />

              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded" />
              <p className="relative text-white text-xl md:text-3xl text-center">
                Cinemas
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

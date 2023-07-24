import Header from "./components/Header";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Header />

      <div className="mt-10 mr-auto ml-auto w-80 bg-bgColour2 p-4 rounded-2xl border border-black">
        <h1 className="text-2xl font-bold">Cinesphere</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
          lorem sed felis euismod tristique non in tortor. Phasellus convallis a
          est eget euismod. Nam consequat porttitor dolor eu hendrerit.
        </p>
      </div>

      <div className="mt-10 mr-auto ml-auto w-80">
        <p>I want to browse</p>

        <div className="mt-6 flex gap-10">
          <Link href={"/films"}>
            <div className="relative w-32 h-32">
              <Image
                className="rounded"
                src="/assets/home-images/films.jpg"
                alt={`a photo of vintage film poster`}
                layout="fill"
                objectFit="cover"
              />

              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded" />
              <p className="relative text-white text-xl text-center pt-10">
                Films
              </p>
            </div>
          </Link>

          <Link href={"/films"}>
            <div className="relative w-32 h-32">
              <Image
                className="rounded"
                src="/assets/home-images/cinemas.webp"
                alt={`a photo of inside cinema theater`}
                layout="fill"
                objectFit="cover"
              />

              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded" />
              <p className="relative text-white text-xl text-center pt-10">
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

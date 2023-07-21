import Header from "./components/Header";
import Link from "next/link";

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
            <div className="bg-[url(https://images.pexels.com/photos/3056056/pexels-photo-3056056.jpeg?cs=srgb&dl=pexels-collis-3056056.jpg&fm=jpg)] bg-cover">
              Films
            </div>
          </Link>
          <Link href={"/cinemas"}>
            <div className="bg-[url(https://i2-prod.dailyrecord.co.uk/incoming/article18847157.ece/ALTERNATES/s1200b/2_IMG_1823.jpg)] bg-cover">
              Cinemas
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

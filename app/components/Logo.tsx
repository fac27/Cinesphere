import Link from "next/link";
import Image from "next/image";
import cinesphere from "../../public/assets/logo/cinesphere-01.svg";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex gap-0 items-center justify-end lg:justify-center"
    >
      <Image height={70} alt="Cinesphere Logo" src={cinesphere} />
      <h1 className="underline text-3xl">cinesphere</h1>
    </Link>
  );
};
export default Logo;

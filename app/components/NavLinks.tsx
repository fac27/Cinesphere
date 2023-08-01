import NavListItem from "./NavListItem";
interface Props {
  isOpen: boolean;
}

const NavLinks = ({ isOpen }: Props) => {
  return (
    <nav
      className={`absolute -right-4 transform border shadow ${
        isOpen ? "-translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out flex-column justify-end mr-2 z-50`}
    >
      <ul className="h-screen w-screen p-12 md:h-auto md:w-auto md:text-left md:mr-5 flex flex-col justify-start gap-14 bg-white text-center text-3xl">
        <NavListItem top={true} link={"Home"} />
        <NavListItem link={"Films"} />
        <NavListItem link={"Cinemas"} />
        <NavListItem link={"Contact"} />
      </ul>
    </nav>
  );
};

export default NavLinks;

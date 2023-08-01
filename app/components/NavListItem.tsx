interface Props {
  top?: boolean;
  link: string;
}

const NavListItem = ({ top, link }: Props) => {
  return (
    <li className={`p-2.5 ${top && "mt-4"}`}>
      <a
        className="hover:text-purple-700"
        href={`${top ? "/" : `/${link.toLowerCase()}`}`}
      >
        {link}
      </a>
    </li>
  );
};

export default NavListItem;

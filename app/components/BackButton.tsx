import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";

interface Props {
  page: string;
}

export function BackButton({ page }: Props) {
  return (
    <Link href={`/${page}`} className="uppercase flex gap-2 items-center">
      <span>
        <BsArrowLeftCircle />
      </span>
      back
    </Link>
  );
}

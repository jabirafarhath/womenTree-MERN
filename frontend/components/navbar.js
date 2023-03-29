import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className=" flex justify-between pt-2 pb-3 ">
      <div className="w-1/2 ml-2">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={70} height={50} />
        </Link>
      </div>
      <ul className="w-1/3 flex justify-evenly my-auto font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

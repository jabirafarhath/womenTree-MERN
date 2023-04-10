import { useUser } from "@/middlewares/authUser";
import Link from "next/link";
export default function UserNavbar({userId}) {
  return (
    <div className="my-36">
      <ul className=" text-center">
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white">
          <i className="mx-2 fa-sharp fa-solid fa-house"></i>
          <Link href="/user/" className="">
            Home
          </Link>
        </li>
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white">
          <i className="mx-2 fa-solid fa-magnifying-glass"></i>
          <Link href="/user/search">Search</Link>
        </li>
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white">
          <i className="mx-2 fa-solid fa-message"></i>
          <Link href="/user/messages">Messages</Link>
        </li>
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white">
          <i className="mx-2 fa-solid fa-bell"></i>
          <Link href="/user/notifications">Notification</Link>
        </li>
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white">
          <i className="mx-2 fa-solid fa-user"></i>
          <Link href={`/user/profile/${userId}`}>Profile</Link>
        </li>
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white">
          <i className="mx-2 fa-solid fa-right-from-bracket"></i>
          <a href="http://localhost:3001/auth/logout">Logout</a>
        </li>
      </ul>
    </div>
  );
}

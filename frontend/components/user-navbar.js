import Link from "next/link";
export default function UserNavbar() {
  return (
    <div className="my-36">
      <ul className=" text-center">
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white"><i className="mx-2 fa-sharp fa-solid fa-house"></i>
          <Link href="/user/" className="">
            Home
          </Link>
        </li>
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white"><i className="mx-2 fa-solid fa-magnifying-glass"></i>
          <a href="/user/search">Search</a>
        </li>
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white"><i className="mx-2 fa-solid fa-message"></i>
          <a href="/user/messages">Messages</a>
        </li>
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white"><i className="mx-2 fa-solid fa-bell"></i>
          <a href="/user/notifications">Notification</a>
        </li>
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white"><i className="mx-e2 fa-solid fa-user"></i>
          <Link href="/user/profile">Profile</Link>
        </li>
        <li className="p-4 text-gray-100 hover:bg-gray-700 hover:text-white"><i className="mx-2 fa-solid fa-right-from-bracket"></i>
          <a href="http://localhost:3001/auth/logout">Logout</a>
        </li>
      </ul>
    </div>
  );
}

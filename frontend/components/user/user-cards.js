import Image from "next/image";
import Link from "next/link";
export default function UserCard({user}) {
  // console.log(user);
  return (
    <div className="p-3.5 bg-white rounded-md m-1 ">
      <div className="card-image">
        <Image
          alt=""
          className=""
          src="https://pbs.twimg.com/profile_images/1623868562103500802/XOIKsyCe_400x400.jpg"
          width={174}
          height={144}
        ></Image>
      </div>
      <div className="card-content">
        <h1 className="text-xl font-bold">{user.name}</h1>
        <p className=" text-gray-700 text-sm">
              {user.location}
            </p>
        <div className="my-2">
          
          <div className="flex justify-between mt-2">
            <p className="mr-2 text-gray-700 font-semibold text-sm">
              <i className="fa-solid fa-user mr-1"></i>{user.userType}
            </p>
            <div className="flex">
              <p className="ml-2 text-sm font-bold text-gray-900">{user.ratingOn10}/10</p>
            </div>
          </div>
        </div>
      </div>
      <div className="view-button  justify-center flex text-center">
        <Link href={`/user/profile/${(user._id)}`} className="px-2 py-1 bg-yellow-500 rounded-md w-full">
        View Profile
        </Link>

      </div>
    </div>
  );
}

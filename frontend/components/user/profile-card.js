import Image from "next/image"
import Link from "next/link"

export default function ProfileCard({currentUser}){
    return (
        <div className="bg-slate-100 rounded-lg p-4 my-2 mr-3 lg:w-1/2">
            <div className="flex">
              <div className="mx-3 hidden sm:block">
                <Image
                  alt=""
                  className="rounded-full"
                  src={currentUser.image}
                  width={144}
                  height={144}
                ></Image>
              </div>
              <div className="my-auto sm:mx-4 mx-auto text-center sm:text-left">
                <div className="my-3">
                  <h1 className="text-xl leading-4 font-semibold">
                    {currentUser.name}
                  </h1>
                 {currentUser.location? <p>{currentUser.location}</p>:
                 <p>SetUp your Profile first</p>
                 }
                </div>
                <div className="mt-4">
                  <Link
                    href={`/edit`}
                    className="bg-gray-600 text-yellow-300 p-2 rounded-md"
                  >
                    Setup Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
    )
}
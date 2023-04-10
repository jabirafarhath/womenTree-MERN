import UserLayout from "@/components/user/user-layout";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import UserCard from "@/components/user/user-cards";
import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from "@/middlewares/authUser";
import useFetch from "@/middlewares/useFetch";
import ErrorLayout from "@/components/error";
import ProfileCard from "@/components/user/profile-card";

export default function UserHome() {
  const { currentUser, loginError } = useUser();
  const { users, fetchError } = useFetch();

  return (
    <UserLayout>
      {currentUser.location && currentUser.userType ? (
        <>
          <div className="bg-gray-300 rounded-3xl">
            <div className="p-1">
              {/* Top */}
              <div className="flex flex-col md:flex-row  m-2">
                {/* profile info */}
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
                        <p>Kochi</p>
                      </div>
                      <div className="mt-4">
                        <Link
                          href={`user/profile/${currentUser._id}`}
                          className="bg-gray-600 text-yellow-300 p-2 rounded-md"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Search bar option */}
                <div className="bg-slate-100 text-center rounded-lg p-4 my-2 mr-3 lg:w-1/2 ">
                  <div className="mt-10">
                    <h1 className="text-2xl font-semibold leading-4">
                      Grab your services now!
                    </h1>
                    <p className="">Search and find</p>
                  </div>
                  <div className="my-4">
                    <Link
                      href="/user/search"
                      className="p-2 bg-slate-500 text-yellow-400 rounded-lg"
                    >
                      Search
                    </Link>
                  </div>
                </div>
              </div>
              {/* Cards */}
              <div className="bg-slate-200 rounded-lg p-4 my-2 mx-2">
                <div className="p-1 my-1 ">
                  <h1 className="text-2xl font-bold text-gray-800">
                    Find service providers
                  </h1>
                </div>
                <div className="flex  flex-wrap">
                  {users.map((user) => {
                    return <UserCard key={user._id} user={user} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* profile info */}
          <ProfileCard currentUser={currentUser}/>
        </>
      )}
    </UserLayout>
  );
}

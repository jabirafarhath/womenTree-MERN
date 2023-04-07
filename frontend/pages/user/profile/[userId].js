import axios from "axios";
import { useEffect, useState } from "react";
import UserLayout from "@/components/user/user-layout";
import { useUser } from "@/middlewares/authUser";
import Image from "next/image";
import Link from "next/link";
import ErrorLayout from "@/components/error";
import { useRouter } from "next/router";
import useFetchUser from "@/middlewares/getUser";
import WorkExperience from "@/components/user/work/workExp";
import Education from "@/components/user/edu/education";
import Certifications from "@/components/user/cert/certifications";
import Languages from "@/components/user/lang/languages";


export default function Profile() {
  const router = useRouter();
  const { userId } = router.query;
  const { user, userError } = useFetchUser(userId);
  const { currentUser, authError } = useUser();
  console.log(user);
  console.log(currentUser);
  const isSame = user.email === currentUser.email ? true : false;
  console.log(isSame);

  if (authError)
    return (
      <ErrorLayout>
        <h1>{authError}</h1>
      </ErrorLayout>
    );

  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Basic Info */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="flex md:justify-left justify-center  items-center h-48 bg-gray-800 relative">
            <Image
              alt=""
              className="md:left-6 h-32 w-32 rounded-full absolute bottom-0 transform translate-y-1/2"
              src="https://pbs.twimg.com/profile_images/1623868562103500802/XOIKsyCe_400x400.jpg"
              width={144}
              height={144}
            ></Image>
          </div>
          <div className="px-6 py-4 mt-12">
            <div className="flex justify-between flex-col sm:flex-row ">
              <div className="mb-3">
                <h1 className="font-bold text-3xl text-gray-800">
                  {user.name}
                </h1>
                <p>@{user.username}</p>
              </div>
              <div className="mb-3 sm:mt-3">
                {isSame && (
                  <Link href="/edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                )}

                {!isSame && (
                  <Link
                    className="bg-yellow-400 p-1 rounded-md border-2  sm:p-2 sm:rounded-full sm:border-2 border-gray-800 hover:bg-yellow-500 hover:text-gray-800"
                    href="/user/profile/edit"
                  >
                    Connect
                  </Link>
                )}
              </div>
            </div>

            <div className="my-2">
              <div className="my-2">
                <p className="font-semibold text-gray-700 text-sm">
                  <i className="fa-solid fa-location-dot mr-1"></i>
                  {user.location}
                </p>
              </div>

              <div className="flex justify-between mt-2">
                <p className="mr-2 text-gray-700 font-semibold text-sm">
                  <i className="fa-solid fa-user mr-1"></i>
                  {user.userType}
                </p>
                <div className="flex">
                  <p className="ml-2 text-sm font-bold text-gray-900">
                    {user.ratingOn10}/10
                  </p>

                  <div className="w-1 h-1 mt-2.5 mx-1 bg-gray-500 rounded-full dark:bg-gray-400"></div>
                  <Link
                    href="/"
                    className="text-sm font-medium text-gray-900 underline hover:no-underline"
                  >
                    73 reviews
                  </Link>

                  {!isSame && (
                    <>
                      <div className="w-1 h-1 mt-2.5 mx-1 bg-gray-500 rounded-full dark:bg-gray-400"></div>
                      <Link
                        href="#"
                        className="text-sm font-medium text-gray-900 underline hover:no-underline"
                      >
                        Add review
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="bio">
              <p className="text-gray-700 text-base">{user.bio}</p>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        {user.work && user.work.length != 0 && (
          <WorkExperience isSame={isSame} work={user.work} />
        )}

        {/* Education Section */}
        {user.education && user.education.length != 0 && (
          <Education isSame={isSame} edu={user.education} />
        )}

        {/* Certifications Section */}
        {user.certifications && (user.certifications).length != 0 && (
          <Certifications
            isSame={isSame}
            certifications={user.certifications}
          />
        )}
        {/* Languages Section */}
        {user.languages && (user.languages).length != 0 && (
          <Languages isSame={isSame} languages={user.languages} />
        )}
      </div>
    </UserLayout>
  );
}

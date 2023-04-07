import axios from "axios";
import { useEffect, useState } from "react";
import UserLayout from "@/components/user/user-layout";
import { useUser } from "@/middlewares/authUser";
import Link from "next/link";

export default function EditProfile() {
  const { currentUser, error } = useUser();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [bio, setBio] = useState();
  const [userType, setType] = useState();

  const updatedValues = { name, age, bio, userType };

  const saveChanges = () => {
    axios
      .post(
        "http://localhost:3001/profile/update",
        { values: updatedValues },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserLayout>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 w-full my-4 mx-2">
          <h1 className="font-bold text-3xl">Profile</h1>

          <form
            className="mt-4"
            method="POST"
            action="http://localhost:3001/profile/update"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                defaultValue={currentUser.name}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Age</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="age"
                type="number"
                onChange={(e) => setAge(e.target.value)}
                defaultValue={currentUser.age}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="email"
                type="email"
                readOnly
                value={currentUser.email}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Bio</label>
              {currentUser.bio != "Tell us about yourself" && (
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={5}
                  id="bio"
                  type="text"
                  onChange={(e) => setBio(e.target.value)}
                  defaultValue={currentUser.bio}
                />
              )}
              {currentUser.bio === "Tell us about yourself" && (
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={5}
                  id="bio"
                  type="text"
                  onChange={(e) => setBio(e.target.value)}
                  placeholder={currentUser.bio}
                />
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Are you a job seeker or a job provider?
              </label>
              <select
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userType"
                type="text"
                onChange={(e) => setType(e.target.value)}
                defaultValue={currentUser.userType}
              >
                <option value="Job Seeker">Job Seeker</option>
                <option value="Job Provider">Job Provider</option>
              </select>
            </div>

            <div className="mb-4">
              <button
                onClick={saveChanges}
                type="submit"
                className="p-2 bg-yellow-500 hover:bg-yellow-400 rounded-md"
              >
                Save Changes
              </button>
              <button
                type="reset"
                className="mx-2 p-2 bg-gray-700 hover:bg-gray-600 text-yellow-500 hover:text-yellow-400 rounded-md"
              >
                Cancel
              </button>
            </div>
            <div className="">
              <a
                href="http://localhost:3001/profile/delete"
                onClick={() => {
                  alert("Are you sure to delete your account");
                }}
                className="text-sm font-semibold mt-6 text-red-700 underline hover:text-red-900"
              >
                Delete your account permanently
              </a>
            </div>
          </form>
        </div>
        <div className="lg:mt-14 lg:ml-8 p-1 text-center lg:text-left">
          <div className="bg-slate-200 p-4 rounded-xl">
          <div className="underline p-2">
            <Link href="/edit/education"><i className="fa-solid fa-pen-to-square"></i>Edit Education Details</Link>
          </div>
          <div className="underline p-2">
            <Link href="/edit/work"><i className="fa-solid fa-pen-to-square"></i>Edit Work Experience</Link>
          </div>
          <div className="underline p-2">
            <Link href="/edit/certifications"><i className="fa-solid fa-pen-to-square"></i>Edit Certifications Details</Link>
          </div>
          <div className="underline p-2">
            <Link href="/edit/languages"><i className="fa-solid fa-pen-to-square"></i>Edit Languages</Link>
          </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

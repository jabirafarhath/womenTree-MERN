import axios from "axios";
import { useEffect, useState } from "react";
import UserLayout from "@/components/user/user-layout";
import { useUser } from "@/middlewares/authUser";
import Link from "next/link";
import { useRouter } from "next/router";

export default function EditProfile() {
  const router = useRouter();
  const { currentUser, error } = useUser();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [bio, setBio] = useState();
  const [userType, setType] = useState();
  const [location, setLocation] = useState();
  const [username, setUsername] = useState();

  const updatedValues = { name, age, bio, userType, location, username };

  const saveChanges = () => {
    axios
      .put(`http://localhost:3001/profile/${currentUser._id}`, updatedValues, {
        withCredentials: true,
      })
      .then((response) => {
        router.push(`/user/profile/${currentUser._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    axios
      .delete("http://localhost:3001/profile/delete", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        router.push("/");
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

          <div className="mt-4">
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
              <label className="block text-gray-700 font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                defaultValue={currentUser.username}
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
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                defaultValue={currentUser.location}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Bio</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={5}
                id="bio"
                type="text"
                onChange={(e) => setBio(e.target.value)}
                defaultValue={currentUser.bio}
              />
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
              <button
                onClick={() => {
                  alert("Are you sure to delete your account");
                  handleDelete();
                }}
                className="text-sm font-semibold mt-6 text-red-700 underline hover:text-red-900"
              >
                Delete your account permanently
              </button>
            </div>
          </div>
        </div>
        <div className="lg:mt-14 lg:ml-8 p-1 text-center lg:text-left">
          <div className="bg-slate-200 p-4 rounded-xl">
            <div className="underline p-2">
              <Link href="/edit/education">
                <i className="fa-solid fa-pen-to-square"></i>Edit Education
                Details
              </Link>
            </div>
            <div className="underline p-2">
              <Link href="/edit/work">
                <i className="fa-solid fa-pen-to-square"></i>Edit Work
                Experience
              </Link>
            </div>
            <div className="underline p-2">
              <Link href="/edit/certifications">
                <i className="fa-solid fa-pen-to-square"></i>Edit Certifications
                Details
              </Link>
            </div>
            <div className="underline p-2">
              <Link href="/edit/languages">
                <i className="fa-solid fa-pen-to-square"></i>Edit Languages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

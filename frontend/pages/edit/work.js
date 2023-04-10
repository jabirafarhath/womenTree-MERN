import UserLayout from "@/components/user/user-layout";
import WorkExperience from "@/components/user/work/workExp";
import { useUser } from "@/middlewares/authUser";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";


export default function EditWork() {
  const router = useRouter()
  const { currentUser, error } = useUser();
  const [post, setPost] = useState();
  const [durationInMonths, setDuration] = useState();
  const [desc, setDesc] = useState();
  const [location, setLocation] = useState();

  const work = currentUser.work
    ? [...currentUser.work, { post, durationInMonths, desc, location }]
    : [{ post, durationInMonths, desc, location }];


  const saveChanges = () => {
    axios
      .put(
        `http://localhost:3001/profile/${currentUser._id}`,
        { work },
        { withCredentials: true }
      )
      .then((response) => {
        router.push(`/user/profile/${currentUser._id}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserLayout>
      <div className="rounded-xl my-4 p-4 bg-gray-100">
        <h1 className="font-bold text-2xl">Add Work Experience</h1>

        
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Post</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              id="name"
              type="text"
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Duration in months
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Description about Job
            </label>

            <textarea
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tell us about your job"
              rows={5}
              id="bio"
              type="text"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <button
              onClick={saveChanges}
              className="p-2 bg-yellow-500 hover:bg-yellow-400 rounded-md"
            >
              Add Experience
            </button>
            <button
              type="reset"
              className="mx-2 p-2 bg-gray-700 hover:bg-gray-600 text-yellow-500 hover:text-yellow-400 rounded-md"
            >
              Cancel
            </button>
          </div>
      </div>
    </UserLayout>
  );
}

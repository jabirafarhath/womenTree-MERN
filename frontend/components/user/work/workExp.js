import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WorkExperience({ isSame, works, userId }) {
  const [work, setWork] = useState(works);
  const handleDelete = async (idToDelete) => {
    const newWork = work.filter((item) => {
      return item._id !== idToDelete;
    });
    setWork(newWork);
    axios
      .put(
        `http://localhost:3001/profile/${userId}`,
        { work: newWork },
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
    <div className="bg-white shadow rounded-lg overflow-hidden mt-6">
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <p>
            {isSame && (
              <>
                <Link href="/edit/work" className="fa-solid fa-plus"></Link>
              </>
            )}
          </p>
        </div>
        {/* experience */}
        {work &&
          work.map((workExp) => {
            return (
              <div key={workExp._id}>
                <div className="exp my-6">
                  <div className="flex justify-between">
                    <h1 className=" font-semibold">
                      {workExp.post}, {workExp.location}
                    </h1>
                    <p className=" ">
                      {workExp.durationInMonths} months
                      {isSame && (
                        <button
                          onClick={() => {
                            handleDelete(workExp._id);
                          }}
                          className="fa-solid fa-trash mx-2 font-normal"
                        ></button>
                      )}
                    </p>
                  </div>
                  <div className="mt-2">
                    {workExp.desc != "Work description" && (
                      <p>{workExp.desc}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

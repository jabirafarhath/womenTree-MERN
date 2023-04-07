import EduCard from "./edu-card";

export default function Education({ isSame, education }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden mt-2">
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p>{isSame && <i className="fa-solid fa-pen-to-square"></i>}</p>
        </div>
        <div className="edu my-6">
          <ul className="">
            {/* Edu */}
            {education.map((edu) => {
              <EduCard key={edu} edu={edu} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function EduCard({ edu }) {
  return (
    <li className="my-3">
      <h1 className="font-bold text-sm">{edu.qualification}</h1>
      <div className="flex justify-between my-1">
        <p className="">
          {edu.institute}, {edu.location}
        </p>
        <p>{edu.year}</p>
      </div>
    </li>
  );
}

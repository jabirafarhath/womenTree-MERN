export default function WorkCard({ workExp }) {
  return (
    <>
      <div className="exp my-6">
        <div className="flex justify-between">
          <h1 className=" font-semibold">
            {workExp.post}, {workExp.location}
          </h1>
          <p className=" font-semibold">{workExp.durationInMonths}</p>
        </div>
        <div className="mt-2">
          {workExp.desc != "Work description" && <p>{workExp.desc}</p>}
        </div>
      </div>
    </>
  );
}

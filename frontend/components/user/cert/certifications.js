export default function Certifications({ certifications }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden mt-2">
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <p>{isSame && <i className="fa-solid fa-pen-to-square"></i>}</p>
        </div>
        <div className="edu my-6">
          <ul className="">
            {certifications.map((cert) => {
              <li className="my-3">
                <div className="flex justify-between my-1">
                  <p className="">{cert.name}</p>
                  <p>{cert.year}</p>
                </div>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

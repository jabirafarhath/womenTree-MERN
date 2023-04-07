export default function Languages({ isSame, languages }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden mt-2">
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <p>{isSame && <i className="fa-solid fa-pen-to-square"></i>}</p>
        </div>
        <div className="my-6 languages">
          <ul>
            {languages.map((language) => {
              <li className="mt-1">English</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

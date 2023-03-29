export default function PriceCard({ title, desc, amount }) {
  return (
    <>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl my-3">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {title}
            </div>
            <p className="mt-2 text-gray-500">{desc}</p>

            {amount && (
              <div className="mt-4">
                <span className="text-gray-600 text-2xl font-semibold">
                  ${amount}
                </span>
                <span className="text-gray-500">/month</span>
              </div>
            )}
            {!amount && (
              <div className="mt-4">
                <span className="text-gray-600 text-2xl font-semibold">Free</span>
              </div>
            )}

            <div className="mt-6 ">
              <a
                href="#"
                className="p-2 bg-blue-100 rounded-lg text-indigo-500 hover:text-indigo-600 font-semibold"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

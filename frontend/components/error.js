import Link from "next/link";
import Script from "next/script";

export default function ErrorLayout({ children }) {
  return (
    <>
    <Script
          src="https://kit.fontawesome.com/b06251a790.js"
          crossorigin="anonymous"
        ></Script>
    <div className="flex justify-center items-center text-center mt-52">
      <div className=" bg-gray-400 px-4 py-3 w-1/3 rounded-lg">
        <div className="my-2">
        <h2 className="text-3xl font-bold">Uh Oh☹️!</h2>
        <p>An error occurred!</p>
        </div>
        <div className="my-2">
        {children}
        </div>
        <div className="mt-6 mb-3">
        <Link href='/' className="bg-yellow-400 p-1 rounded-md border-2  sm:p-2 sm:rounded-full sm:border-2 border-gray-800 hover:bg-yellow-500 hover:text-gray-800 ">Back to home</Link>
        </div>
      </div>
    </div>
    </>
  );
}

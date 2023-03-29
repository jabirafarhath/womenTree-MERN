import Layout from "@/components/layout";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WomenTree / Home</title>
      </Head>
      <Layout>
        <div className="flex my-16">
          <div className="m-auto">
            <h1 className="font-bold text-6xl text-yellow-600">WomenTree</h1>
            <p>connecting women with the world of work!</p>
            <div className="flex justify-center mt-4">
              <a
                href=""
                className="py-2 px-3 bg-yellow-600 rounded-md mx-2 text-white hover:bg-yellow-700"
              >
                Login
              </a>
              <a
                href=""
                className="py-2 px-3 bg-gray-600 rounded-md text-white hover:bg-gray-700"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="m-auto">
            <Image
              src="/images/homeImage.jpg"
              alt="empowered women"
              width={344}
              height={344}
              className="rounded-full"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

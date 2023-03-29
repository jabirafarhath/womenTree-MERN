import Head from "next/head";
import Script from "next/script";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/b06251a790.js"
        crossorigin="anonymous"
      ></Script>
      <Head>
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </Head>
      <div className="bg-slate-200 flex flex-col min-h-screen">
        <div className="bg-slate-300">
          <div className="max-w-3xl m-auto ">
            <Navbar />
          </div>
        </div>
        <div className="bg-slate-200 ">
          <div className="max-w-3xl mx-auto my-8">{children}</div>
        </div>
        <div className="bg-slate-300 mt-auto">
          <div className="max-w-md mx-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

import Script from "next/script";
import Head from "next/head";
import UserNavbar from "./user-navbar";
import { useAuthCheck } from "@/middlewares/authCheck";
import ErrorLayout from "../error";

export default function UserLayout({ children }) {
  const { isAuthenticated, UserId, error } = useAuthCheck();

  if (error) {
    return (
      <ErrorLayout>
        <h1>{error}</h1>
      </ErrorLayout>
    );
  }

  if (isAuthenticated) {
    return (
      <>
        <Script
          src="https://kit.fontawesome.com/b06251a790.js"
          crossorigin="anonymous"
        ></Script>
        <Head>
          <link
            rel="shortcut icon"
            href="/images/logo.png"
            type="image/x-icon"
          />
        </Head>

        <div className="flex justify-between">
          <div className="bg-gray-800 w-1/4 h-screen fixed">
            <UserNavbar />
          </div>
          <div
            className="p-6 w-3/4"
            style={{ position: "relative", left: "25%" }}
          >
            {children}
          </div>
        </div>
      </>
    );
  }
}

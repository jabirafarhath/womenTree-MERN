import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
export default function About() {
  return (
    <>
      <Head>
        <title>WomenTree / About</title>
      </Head>

      <Layout>
        <h1 className="text-3xl font-bold">
            About
        </h1>
        <p className="my-3">
          womentree is a web platform that connects women job seekers with job
          providers to facilitate employment opportunities. We aim to empower
          unskilled women by providing them jobs like babysitting, cooking,
          househelp and tailoring which allow them to become financially
          independent. <br />
          <br /> Our web app helps working women find reliable services
          for tasks like childcare, eldercare, cleaning and laundry so that they
          can focus on their careers without stress. womentree brings women
          together to support each others professional and personal growth.
        </p>
        <h2>
          <Link
            href="/"
            className="text-blue-900 hover:text-blue-800 font-semibold"
          >
            Back to home
          </Link>
        </h2>
      </Layout>
    </>
  );
}

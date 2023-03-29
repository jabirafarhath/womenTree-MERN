import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PriceCard from "@/components/price_card";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>WomenTree / Pricing</title>
      </Head>
      <Layout>
        <div className="">
          <h1 className="font-bold text-3xl">Pricing</h1>
            <PriceCard title="Basic" desc="Get your first 3 trials" amount=""/>
            <PriceCard title="Premium" desc="Access to all connections to book your service/job" amount="199"/>

        </div>
      </Layout>
    </>
  );
}

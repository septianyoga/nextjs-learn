import Navbar from "@/components/layouts/Navbar";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>Helo bro</div>
      <Link href={"product"}>Go To Products</Link>
    </div>
  )
}

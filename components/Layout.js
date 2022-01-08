import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import { useRouter } from "next/router";
export default function Layout({ children, title = "Kevin Palowa" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container mx-auto max-w-3xl font-sans">
        <NavBar />
      </div>
      <main className="max-w-xl mx-auto container">{children}</main>
    </div>
  );
}

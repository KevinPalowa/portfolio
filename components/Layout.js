import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
export default function Layout({ children, title = "Kevin Palowa" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container mx-auto max-w-3xl font-sans px-5 md:p-0">
        <NavBar />
      </div>
      <main className="max-w-2xl mx-auto container p-5 md:p-0">{children}</main>
    </div>
  );
}

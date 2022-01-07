import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Page</title>
      </Head>
      <div className="container mx-auto max-w-3xl font-sans">
        <NavBar />
      </div>
      <main>{children}</main>
    </div>
  );
}

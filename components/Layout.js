import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
export default function Layout({ children, title = "Kevin Palowa" }) {

  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container mx-auto max-w-3xl font-sans px-5 md:p-0">
        <NavBar />
      </div>
      <motion.main
        variants={animations}
        transition={{ duration: 1 }}
        initial="initial"
        animate="animate"
        exit="exit"
        className="max-w-3xl mx-auto container p-5 md:p-0"
      >
        {children}

        <Footer />
      </motion.main>
    </div>
  );
}

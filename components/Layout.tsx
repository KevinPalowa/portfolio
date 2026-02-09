import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const defaultTitle = "Kevin Palowa — Frontend Developer & UI Engineer";
const defaultDescription =
  "Portfolio resmi Kevin Palowa. Frontend Developer yang berfokus pada Next.js, React, dan arsitektur scalable untuk tech companies.";

export default function Layout({
  children,
  title = defaultTitle,
  description = defaultDescription,
}: LayoutProps) {
  const url = "https://kevinpalowa.com";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Kevin Palowa" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Kevin Palowa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
      </Head>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <NavBar />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <Footer />
      </div>
    </>
  );
}

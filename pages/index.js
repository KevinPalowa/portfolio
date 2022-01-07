import Head from "next/head";
import Hero from "../components/Hero"
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Next Page</title>
      </Head>
      <div className="container mx-auto max-w-3xl font-sans">
        <NavBar/>
        <Hero/>
      </div>
    </main>
  );
}

import Head from "next/head";
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Next Page</title>
      </Head>
      <div className="container mx-auto max-w-4xl font-sans">
        <NavBar/>
      </div>
    </main>
  );
}

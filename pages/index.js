import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Next Page</title>
      </Head>
      <div className="container mx-auto max-w-4xl">
        <p className="text-red-200">Test</p>
      </div>
    </main>
  );
}

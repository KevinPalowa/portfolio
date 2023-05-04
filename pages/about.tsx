import Layout from "../components/Layout";

export default function about() {
  return (
    <Layout title="About - Kevin Palowa">
      <h2 className="font-semibold text-2xl">About</h2>
      <h1 className="font-semibold text-3xl">Muhammad Kevin Alviansyah</h1>
      <article className="space-y-3 mt-5 text-[#D1D5DB] text-lg">
        <p>
          Hi, my name is Muhammad and I have a passion for all things
          computer-related, particularly hardware, software, and operating
          systems. I have been coding since I was in high school and fell in
          love with it right away. There&apos;s nothing more satisfying than
          solving a difficult problem and finding a solution.
        </p>
        <p>
          As I continued to learn, I became particularly interested in web
          programming. I am currently working with React development and I am
          always exploring and learning new things. There&apos;s so much to
          learn in the React environment, and I am motivated to continue
          improving my skills.
        </p>
        <p>
          Thank you for taking the time to read my about page section. I am
          excited to see where my coding journey takes me next!
        </p>
      </article>
    </Layout>
  );
}

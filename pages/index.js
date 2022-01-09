import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Kevin Palowa - Home">
      <Hero />
      <div className='space-y-3 mt-14'>
        <h3 className='font-semibold text-xl'>Work</h3>
        <p className="text-sm">Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop.</p>
      </div>
    </Layout>
  );
}

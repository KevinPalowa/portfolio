import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Section from "../components/Section"
export default function Home() {
  return (
    <Layout title="Kevin Palowa - Home">
      <Hero />
      <Section title='Work'>
        <p className="text-sm tracking-wide line ">Hi! My name is Kevin Palowa i'm currently working with React ecosystem, and love linux</p>
      </Section>
      <Section title='My Projects'>
        <p className="text-sm tracking-wide line ">Hi! My name is Kevin Palowa i'm currently working with React ecosystem, and love linux</p>
      </Section>
    </Layout>
  );
}

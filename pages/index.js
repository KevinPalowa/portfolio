import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Cards from "../components/Cards";
export default function Home() {
  return (
    <Layout title="Kevin Palowa - Home">
      <Hero />
      <Section title="Work">
        <p className="text-sm tracking-wide line ">
          Hi! My name is Kevin Palowa i&aposm currently working with React
          ecosystem, and love linux
        </p>
      </Section>
      <Section title="My Projects">
        <Cards />
      </Section>
    </Layout>
  );
}

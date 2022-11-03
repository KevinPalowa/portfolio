import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
type Props = { children?: React.ReactNode; title: string };
export default function Layout({ children, title = "Kevin Palowa" }: Props) {
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Kevin Palowa" />
        <meta name="description" content="blog pribadi" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <NavBar />
        <motion.main
          variants={animations}
          transition={{ duration: 1 }}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grow"
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  );
}

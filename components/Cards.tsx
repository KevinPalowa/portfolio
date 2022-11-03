import { motion } from "framer-motion";
import Card from "./Card";
export default function Cards() {
  const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  return (
    <motion.div
      variants={animations}
      transition={{ duration: 1 }}
      initial="initial"
      animate="animate"
      exit="exit"
      className="grid md:grid-cols-2 gap-3"
    >
      <Card
        src="/images/ecommerce.png"
        title="E Commerce"
        githubUrl="https://github.com/kevinpalowa/ecommerce"
        demoUrl="https://ecommerce-phi-sage.vercel.app/"
      >
        An ecommerce with Next,stripe and sanity
      </Card>
      <Card
        src="/images/moviesweb.png"
        title="Movie List Web"
        githubUrl="https://github.com/kevinpalowa/movies-web"
        demoUrl="http://movies-web-six.vercel.app/"
      >
        Movie Web with tmdb API
      </Card>
      <Card
        src="/images/countries.png"
        title="countries List Web"
        githubUrl="https://github.com/kevinpalowa/countries"
        demoUrl="https://countries-bay-rho.vercel.app/"
      >
        List countries using api
      </Card>
    </motion.div>
  );
}

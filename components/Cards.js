import Card from "./Card";
import { motion } from "framer-motion";
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
        href="https://github.com/KevinPalowa/ecommerce"
      >
        An ecommerce with Next,stripe and sanity
      </Card>
      <Card
        src="/images/ecommerce.png"
        title="Movie List Web"
        href="https://github.com/KevinPalowa/nft-market"
      >
        Movie Web with tmdb API
      </Card>
    </motion.div>
  );
}

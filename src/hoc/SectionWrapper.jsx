import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, slideIn, staggerContainer } from "../utils/motions";

// Higher-Order Component to wrap sections with consistent styling and animation. This is a function that takes a component and an idName as arguments and returns a new component/function.
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      //every section will have padding and be centered using styles from the styles module
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

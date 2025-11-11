import motion from "framer-motion";
import styles from "../styles";
import stagggerContainer from "../utils/motions";


// Higher-Order Component to wrap sections with consistent styling and animation. This is a function that takes a component and an idName as arguments and returns a new component/function.
const SectionWrapper = (Component, idName) => 
    function HOC() {
  return (
    <motion.section
      variants={stagggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.paddingX} ${styles.flexCenter}`}
    >
      <Component />
    </motion.section>
  )
}

export default SectionWrapper;
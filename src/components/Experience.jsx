import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import {motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import  styles  from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motions" 

const Experience = () => {
  return (
   <>
   {/* Motion div for animating the section header. The textVariant function is used to define the animation. The variants are passed to the motion.div component. */}
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I have done so far</p>
    <h2 className={styles.sectionHeadText}>Work Experience.</h2>
   </motion.div>

   
   </>
  )
}

// Exporting the Experience component wrapped with the SectionWrapper HOC. The second argument "work" is used for additional configuration or styling within the HOC.
export default SectionWrapper(Experience, "work");
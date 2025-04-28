import * as motion from "motion/react-client"
import FloatingCard from "./floating-card";



export default function Cards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex gap-8 w-full relative"
    >
      <FloatingCard
        href="/"
        image="/next.svg"
        title="Work"
      />


      <FloatingCard
        href="/"
        image="/next.svg"
        title="Thoughts"
      />

      <FloatingCard
        href="/"
        image="/next.svg"
        title="About"
      />
    </motion.div>
  )
}
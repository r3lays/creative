import * as motion from "motion/react-client"

export default function Reason() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <h1 className="text-lg font-semibold lg:text-2xl text-primary">A Creative space for my life, work, and thoughts.</h1>
      <p className="text-muted-foreground text-base">&quot;Less is more&quot; - A Computer</p>
    </motion.div>
  );
}
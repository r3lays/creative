import * as motion from "motion/react-client";
import GitHubCalendar from "react-github-calendar";

export default function Activity() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="md:w-full flex items-center justify-center flex-col gap-2"
    >
      <div className="overflow-x-auto max-w-sm md:max-w-full">
        <GitHubCalendar hideMonthLabels colorScheme="light" username="r3lays" />
      </div>
    </motion.div>
  );
}

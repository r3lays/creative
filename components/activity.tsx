import * as motion from "motion/react-client"
import Link from "next/link";
import * as React from "react";
import GitHubCalendar from "react-github-calendar";



export default function Activity() {
  return (
    <motion.div initial={{ opacity: 0, filter: "blur(12px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex items-center justify-center flex-col gap-2">
      <h1 className="font-medium text-muted-foreground text-sm flex gap-1">💻 Building: <p className="text-primary/50 hover:text-primary transition-all underline">Not sure yet...</p></h1>
      <div className="hidden sm:block">
        <GitHubCalendar
          hideMonthLabels
          colorScheme="light"
          username="r3lays"
        />
      </div>
    </motion.div>
  );
}

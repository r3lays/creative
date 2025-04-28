import * as React from "react";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client"



export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100, }}
      animate={{ opacity: 1, y: 0, }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"
    >
      <Button className="rounded-xl min-w-40" size="lg">Contact</Button>
    </motion.footer>
  );
}

"use client";

import Activity from "@/components/activity";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-2 z-50"
    >
      <p className="text-sm text-muted-foreground">
        Prev founder of{" "}
        <Link href="https://x.com/module" className="text-primary">
          module
        </Link>
        , acquired by{" "}
        <Link href="https://x.com/reservoir0x" className="text-primary">
          reservoir
        </Link>
        .
      </p>
      <div className="flex flex-col gap-2 min-h-60">
        <Activity />
      </div>
    </motion.div>
  );
}

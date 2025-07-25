import { Github } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40, filter: "blur(12px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col w-full gap-2"
    >
      <h1 className="text-lg flex items-center font-medium font-[family-name:var(--font-playfair)]">
        r3lays
        <Link href="https://github.com/r3lays" className="ml-2">
          <Github className="w-4 h-4" />
        </Link>
      </h1>
      <div className="flex flex-col w-full">
        <h3 className="text-sm font-medium text-muted-foreground font-[family-name:var(--font-playfair)]">
          Frontend Engineer
        </h3>
        <p className="text-sm text-muted-foreground font-medium">
          Focused on building scalable and efficient web applications.
        </p>
      </div>
    </motion.div>
  );
}

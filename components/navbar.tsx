"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "./ui/button";
import * as React from "react";

const NAV_ITEMS = [
  {
    label: "/home",
    href: "/",
  },
  {
    label: "/work",
    href: "/work",
    disabled: true,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const isMobile = useMediaQuery("(max-width: 640px)");

  const router = useRouter();

  const handleClick = React.useCallback(
    (href: string) => {
      router.push(href);
    },
    [router]
  );

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-fit text-primary w-full items-center justify-center flex absolute bottom-0 p-4 gap-4"
      >
        <div className="flex flex-row gap-4">
          <Button
            disabled
            variant="link"
            size="icon"
            onClick={() => handleClick("/work")}
          >
            <span
              className={cn(
                "text-sm text-muted-foreground",
                isActive("/work") && "text-primary"
              )}
            >
              /work
            </span>
          </Button>
          <Button variant="link" size="icon" onClick={() => handleClick("/")}>
            <span
              className={cn(
                "text-sm text-muted-foreground",
                isActive("/") && "text-primary"
              )}
            >
              /home
            </span>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex z-50 flex-col gap-4 h-full items-center justify-center"
      initial={{ opacity: 0, x: -40, filter: "blur(12px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {NAV_ITEMS.map((item) => (
        <Link
          aria-disabled={item.disabled}
          className={cn(
            "hover:text-primary/80 hover:scale-105 transition-all text-sm text-muted-foreground font-medium",
            isActive(item.href) && "text-primary",
            item.disabled && "opacity-50 cursor-not-allowed"
          )}
          href={item.disabled ? "#" : item.href}
          key={item.label}
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
}

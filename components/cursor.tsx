"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "motion/react";
import * as React from "react";

export default function AnimatedCursor() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isClicked, setIsClicked] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const defaultSpring = { damping: 40, stiffness: 600, mass: 1 };
  const dragSpring = { damping: 32, stiffness: 300, mass: 1.1 };
  const springConfig = isClicked ? dragSpring : defaultSpring;

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };
    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", hideCursor);

    const handleDown = () => setIsClicked(true);
    const handleUp = () => setIsClicked(false);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={cn(
        "hidden sm:block fixed top-0 left-0 w-4 h-4 rounded-full bg-black/70 shadow-lg pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-colors duration-200",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        scale: isClicked ? 0.8 : 1,
        boxShadow: isClicked
          ? "0 2px 16px 4px rgba(0,0,0,0.35)"
          : "0 2px 8px 2px rgba(0,0,0,0.25)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      aria-hidden
    />
  );
}

"use client";
import * as motion from "motion/react-client";
import FloatingCard from "./floating-card";
import { type Cards, useCardContext } from "@/contexts/CardContext";

const CARDS = [
  {
    image: "/next.svg",
    title: "Work",
    key: "work",
  },
  {
    image: "/next.svg",
    title: "Thoughts",
    key: "thoughts",
  },
] as const;

export default function Cards() {
  const { setSelectedCard } = useCardContext();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
          },
        },
      }}
      initial="hidden"
      animate="show"
      className="flex gap-8 w-full"
    >
      {CARDS.map((card) => (
        <FloatingCard
          key={card.key}
          image={card.image}
          title={card.title}
          onClick={() => setSelectedCard(card.key as Cards)}
        />
      ))}
    </motion.div>
  );
}

"use client";

import * as motion from "motion/react-client";
import { Card, CardFooter, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  onClick: () => void;
};

export default function FloatingCard({ image, title, onClick }: Props) {
  return (
    <motion.button
      variants={{
        hidden: {
          opacity: 0,
          x: -20,
          filter: "blur(10px)",
        },
        show: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            duration: 0.8,
            ease: "easeOut",
          },
        },
      }}
      whileHover={{ y: -15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="w-96 h-60 bg-muted/80 rounded-lg z-10 border-none">
        <CardContent>
          <Image src={image} alt={title} width={100} height={100} />
        </CardContent>
        <CardFooter>
          <CardTitle>{title}</CardTitle>
        </CardFooter>
      </Card>
    </motion.button>
  );
}

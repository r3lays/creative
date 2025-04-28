import * as motion from "motion/react-client"
import {
  Card,
  CardFooter,
  CardContent,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  image: string;
  title: string;
};



export default function FloatingCard({ href, image, title }: Props) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card className="w-64 h-60 bg-muted border-none">
          <CardContent >
            <Image src={image} alt={title} width={100} height={100} />
          </CardContent>
          <CardFooter>
            <CardTitle>{title}</CardTitle>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}

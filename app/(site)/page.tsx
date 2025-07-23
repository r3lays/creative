import HomeView from "@/components/pages/home";

export const metadata = {
  title: "r3lays - Creative Space",
  description: "A creative space for my life, work, and thoughts.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <HomeView />
    </div>
  );
}

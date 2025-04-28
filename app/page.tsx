import Activity from "@/components/activity";
import Header from "@/components/header";
import Reason from "@/components/reason";

export const metadata = {
  title: "r3lays - Creative Space",
  description: "A creative space for my life, work, and thoughts.",
}

export default function Home() {
  return (
    <div className="grid grid-rows-[0.5fr_1fr_1fr] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px]">
        <Reason />
        <Activity />
      </main>
    </div>
  );
}

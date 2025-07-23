import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-rows-[0.5fr_2fr_1fr] items-center px-6 min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <div className="flex flex-row h-full w-full">
        <Navbar />
        <div className="flex h-full flex-col w-full items-center justify-center gap-4">
          {children}
        </div>
      </div>
    </main>
  );
}

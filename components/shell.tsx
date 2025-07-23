import Background from "./background";
import AnimatedCursor from "./cursor";
import Header from "./header";
import Navbar from "./navbar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatedCursor />
      <Background />
      <main className="grid grid-rows-[0.5fr_2fr_1fr] items-center px-6 min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
        <Header />
        <div className="flex flex-row">
          <Navbar />
          {children}
        </div>
      </main>
    </>
  );
}

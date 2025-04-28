import Link from "next/link";
import * as React from "react";
import GitHubCalendar from "react-github-calendar";



export default function Activity() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2">
      <h1 className="font-medium text-muted-foreground text-sm">💻 Building: <Link href="https://github.com/r3lays" className="text-primary/50 hover:text-primary transition-all underline">Creative</Link></h1>
      <div className="hidden sm:block">
        <GitHubCalendar
          hideMonthLabels
          colorScheme="light"
          username="r3lays"
        />
      </div>
    </div>
  );
}

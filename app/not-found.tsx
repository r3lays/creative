'use client'
import * as React from 'react';
import { motion } from "motion/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';

function Search() {

  const router = useRouter();

  const [search, setSearch] = React.useState("");

  const handleSearch = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, [setSearch]);


  const handleSubmit = React.useCallback(() => {
    router.push(`https://google.com/search?q=${search}`)
  }, [router, search]);


  return (
    <div className="flex w-full flex-1 grow gap-2">
      <Input onChange={handleSearch} placeholder="I was looking for..." />
      <Button disabled={!search} onClick={handleSubmit} variant='outline' size='default'>
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default function Home() {

  return (
    <div className="flex flex-col items-center h-screen justify-center font-[family-name:var(--font-geist-sans)]">
      <motion.div
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-2"
      >
        <h1 className="text-2xl font-semibold text-primary">404 Not Found</h1>
        <p className="text-muted-foreground text-base">&quot;What are you looking for here?&quot; - A Computer</p>
        <Search />
      </motion.div>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Click this link to the scrapper</h1>
        <Link href="/data">
          <Button>vamonos</Button>
        </Link>
      </div>
    </main>
  );
}

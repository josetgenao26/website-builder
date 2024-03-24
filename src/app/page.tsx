"use client";

import { Button } from "@/modules/common/components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="mb-8 text-5xl font-bold">Home page</h1>
        <Button
          onClick={() => {
            alert("You have clicked on the example button");
          }}
        >
          Example Button
        </Button>
      </div>
    </main>
  );
}

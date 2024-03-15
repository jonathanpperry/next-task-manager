"use client";

import { SignIn } from "@clerk/nextjs";

function Page() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignIn />
    </div>
  );
}

export default Page;

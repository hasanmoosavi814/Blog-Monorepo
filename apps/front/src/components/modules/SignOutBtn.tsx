"use client";

import { useRouter } from "next/navigation";

export const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await fetch("/api/auth/signout");
    router.push("/");
    router.refresh();
  };

  return (
    <button onClick={handleSignOut} className="cursor-pointer">
      Sign Out
    </button>
  );
};

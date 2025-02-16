"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = false;

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/home");
    } else {
      router.push("/sign");
    }
  }, [router, isLoggedIn]);

  return null; // or return a loading state while redirecting
}

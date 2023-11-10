"use client";
import { auth } from "@/lib/firebase.config";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { isAuthPages, isPrivatePages } from "./useAuthorization";
import { usePathname, useRouter } from "next/navigation";

export const useAuthState = () => {
  const [authed, setAuthed] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { replace } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      // console.log("on auth state", user);
      if (user) {
        const uid = user.uid;
        if (isAuthPages(pathname)) {
          replace("/profile");
        }
      } else {
        if (isPrivatePages(pathname)) {
          replace("/login");
        }
      }
      setIsLoading(false);
      setAuthed(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return {
    authed,
    isLoading,
  };
};

"use client";
import { TOKENS_ENUM } from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookieFromBrowser, removeCookieFromBrowser, setCookieFromBrowser } from "./utils";
import { AuthService } from "@/services/auth/auth.services";

import { User, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase.config";
import { doc, onSnapshot } from "firebase/firestore";
import { TUser, userSchema } from "@/lib/schema";
// import { isServer } from "@tanstack/react-query";

export const useAuthorization = () => {
  const [authed, setAuthed] = useState<User | null>(null);
  const [user, setUser] = useState<TUser | null>(null);
  const pathname = usePathname();
  const { replace } = useRouter();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log("on auth state", user);
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
      setAuthed(user);
    });

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    if (authed) {
      const unsubscribe = onSnapshot(doc(db, "users", authed.uid), (doc) => {
        const d = doc.data();
        const user = userSchema.parse(d);
        console.log("Current data: ", user);
        setUser(user);
        return () => unsubscribe();
      });
    }
    return () => {};
  }, [authed]);

  useEffect(() => {
    if (authed) {
      if (isAuthPages(pathname)) void replace("/profile");
    } else {
      if (isPrivatePages(pathname)) void replace("/login");
    }
  }, [pathname]);

  return { authed, user };
};

const isAuthPages = (pathname: string) => ["/login", "/register"].includes(pathname);
const isPrivatePages = (pathname: string) => "profile".includes(pathname);

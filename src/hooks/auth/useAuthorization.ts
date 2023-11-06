"use client";
import { TOKENS_ENUM } from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookieFromBrowser, removeCookieFromBrowser, setCookieFromBrowser } from "./utils";
import { AuthService } from "@/services/auth/auth.services";
// import { isServer } from "@tanstack/react-query";

export const useAuthorization = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isAuth, setIsAuth] = useState(() => {
    if (typeof window === undefined) return false;
    else {
      const access_token = getCookieFromBrowser(TOKENS_ENUM.ACCESS_TOKEN);

      if (access_token) return true;
      else return false;
    }
  });
  useEffect(() => {
    //   const access_token = localStorage.getItem(TOKENS_ENUM.ACCESS_TOKEN)
    // const access_token = getCookie<string>(TOKENS_ENUM.ACCESS_TOKEN);
    // const refresh_token = getCookie<string>(TOKENS_ENUM.REFRESH_TOKEN);
    const access_token = getCookieFromBrowser(TOKENS_ENUM.ACCESS_TOKEN);
    const refresh_token = getCookieFromBrowser(TOKENS_ENUM.REFRESH_TOKEN);
    if (access_token) {
      setIsAuth(true);
    } else setIsAuth(false);
    if (access_token && isAuthPages(pathname)) void replace("/profile");
    if (!access_token && refresh_token) void not_access_token_and_has_refresh_token(refresh_token);
    if (!access_token && !refresh_token && isPrivatePages(pathname)) void replace("/login");
    return () => {};
  }, [pathname]);

  const not_access_token_and_has_refresh_token = async (refresh_token: string) => {
    try {
      const tokens = await AuthService.refresh(refresh_token);
      if (tokens && tokens.access_token) {
        // setCookie(TOKENS_ENUM.ACCESS_TOKEN, tokens.access_token, { expires: 0.1 });
        // setCookie(TOKENS_ENUM.REFRESH_TOKEN, tokens.access_token, { expires: 7 });
        setCookieFromBrowser(TOKENS_ENUM.ACCESS_TOKEN, tokens.access_token, { expires: 0.1 });
        setCookieFromBrowser(TOKENS_ENUM.ACCESS_TOKEN, tokens.refresh_token, { expires: 7 });
        setIsAuth(true);
      }
    } catch (error) {
      return clear_info_and_redirect();
    }
  };
  const clear_info_and_redirect = () => {
    // removeCookie(TOKENS_ENUM.ACCESS_TOKEN);
    // removeCookie(TOKENS_ENUM.REFRESH_TOKEN);
    removeCookieFromBrowser(TOKENS_ENUM.ACCESS_TOKEN);
    removeCookieFromBrowser(TOKENS_ENUM.REFRESH_TOKEN);
    setIsAuth(false);
    // localStorage && localStorage.clear();
    // setIsAuth(false);

    // replace('/login');
  };

  return { isAuth, setIsAuth };
};

const isAuthPages = (pathname: string) => ["/login", "/register"].includes(pathname);
const isPrivatePages = (pathname: string) => ["/profile"].includes(pathname);

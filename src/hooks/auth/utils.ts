import ClientCookie from "js-cookie";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const getCookieFromBrowser = (key: string) => {
  return ClientCookie.get(key);
};

export const removeCookieFromBrowser = (key: string) => {
  ClientCookie.remove(key);
};

export const setCookieFromBrowser = (
  key: string,
  value: any,
  options: Partial<Cookies.CookieAttributes | undefined> = undefined
) => {
  ClientCookie.set(key, value, options);
};

// export const getCookie = <T>(key: string): T | undefined => {
//   if (typeof window === "undefined") return getCookieFromServer(key) as any;
//   else return getCookieFromBrowser(key) as any;
// };

// export const removeCookie = (key: string) => {
//   if (typeof window === "undefined") return removeCookieFromServer(key);
//   else return removeCookieFromBrowser(key);
// };

// export const setCookie = (
//   key: string,
//   value: any,
//   options?: Partial<Cookies.CookieAttributes | ResponseCookie | undefined>
// ) => {
//   if (typeof window === "undefined")
//     return setCookieFromServer(key, value, options as Partial<ResponseCookie | undefined>);
//   else
//     return setCookieFromBrowser(
//       key,
//       value,
//       options as Partial<Cookies.CookieAttributes | undefined>
//     );
// };

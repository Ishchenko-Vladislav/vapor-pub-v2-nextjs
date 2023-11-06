import { cookies } from "next/headers";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const removeCookieFromServer = (key: string) => {
  const cookieStore = cookies();
  cookieStore.delete(key);
};

export const getCookieFromServer = (key: string) => {
  const cookieStore = cookies();
  return cookieStore.get(key) as string | undefined;
};

export const setCookieFromServer = (
  key: string,
  value: any,
  options: Partial<ResponseCookie | undefined> = undefined
) => {
  const cookieStore = cookies();
  cookieStore.set(key, value, options);
};

// import { AuthService } from "@/services/auth/auth.service";
import axios from "axios";
import cookie from "js-cookie";
import { redirect, useRouter } from "next/navigation";
import Cookies from "next/headers";
import { TOKENS_ENUM } from "@/lib/constants";
import { AuthService } from "@/services/auth/auth.services";
import {
  getCookieFromServer,
  removeCookieFromServer,
  setCookieFromServer,
} from "@/hooks/auth/cookie";
// import { getCookie, removeCookie, setCookie } from "@/hooks/auth/utils";
// import { TOKENS_ENUM } from "@/utils/constants";
export const axiosInstance = axios.create({
  baseURL: process.env.SERVER_URL,
});
// function redirectToLoginPage() {
//   const router = useRouter();
//   router.push("/login"); // Замените '/login' на путь к вашей странице входа
// }

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // const refresh_token = getCookie(TOKENS_ENUM.REFRESH_TOKEN);
        const refresh_token = getCookieFromServer(TOKENS_ENUM.REFRESH_TOKEN);
        if (!refresh_token) {
          return Promise.reject(error);
        }
        const tokens = await AuthService.refresh(refresh_token as string);
        // setCookie(TOKENS_ENUM.ACCESS_TOKEN, tokens.access_token, { expires: 0.1 });
        // setCookie(TOKENS_ENUM.REFRESH_TOKEN, tokens.access_token, { expires: 7 });
        setCookieFromServer(TOKENS_ENUM.ACCESS_TOKEN, tokens.access_token, { expires: 0.1 });
        setCookieFromServer(TOKENS_ENUM.ACCESS_TOKEN, tokens.refresh_token, { expires: 7 });
        originalRequest.headers.Authorization = `Bearer ${tokens.access_token}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        // removeCookie(TOKENS_ENUM.ACCESS_TOKEN);
        // removeCookie(TOKENS_ENUM.REFRESH_TOKEN);
        removeCookieFromServer(TOKENS_ENUM.ACCESS_TOKEN);
        removeCookieFromServer(TOKENS_ENUM.REFRESH_TOKEN);
        return Promise.reject(error);
      }
    } else if (error.response && error.response.status === 401 && originalRequest._retry) {
      removeCookieFromServer(TOKENS_ENUM.ACCESS_TOKEN);
      removeCookieFromServer(TOKENS_ENUM.REFRESH_TOKEN);
    }
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.request.use(
  (config) => {
    // const access_token = cookie.get(TOKENS_ENUM.ACCESS_TOKEN);
    const access_token = getCookieFromServer(TOKENS_ENUM.ACCESS_TOKEN);
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// axios.defaults. = {
//   throttle: 0, // Отключить задержку
// };

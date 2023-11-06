import { API_URL, AUTH_ROUTE, TOKENS_ENUM } from "@/lib/constants";
import axios from "axios";
import Cookie from "js-cookie";
import { ITokens, ILoginDTO, IRegisterDTO } from "./auth.interface";
// import { removeCookie, setCookie } from "@/hooks/auth/utils";

export const AuthService = {
  login(payload: ILoginDTO) {
    return axios.post<ITokens>(AUTH_ROUTE.login(), payload).then((res) => res.data);
  },
  register(payload: IRegisterDTO) {
    return axios.post<ITokens>(AUTH_ROUTE.register(), payload).then((res) => res.data);
  },
  logout() {
    // Cookie.remove(TOKENS_ENUM.ACCESS_TOKEN);
    // Cookie.remove(TOKENS_ENUM.REFRESH_TOKEN);
    // removeCookie(TOKENS_ENUM.ACCESS_TOKEN);
    // removeCookie(TOKENS_ENUM.REFRESH_TOKEN);
  },
  async refresh(token: string) {
    const response = await axios.post<ITokens>(AUTH_ROUTE.refresh(), {
      refresh_token: token,
    });
    return response.data;
  },

  setTokensToCookie({ access_token, refresh_token }: ITokens) {
    if (!access_token || !refresh_token) return;
    // setCookie(TOKENS_ENUM.ACCESS_TOKEN, access_token, { expires: 0.1 });
    // setCookie(TOKENS_ENUM.REFRESH_TOKEN, access_token, { expires: 7 });
    Cookie.set(TOKENS_ENUM.ACCESS_TOKEN, access_token, { expires: 0.1 });
    Cookie.set(TOKENS_ENUM.REFRESH_TOKEN, refresh_token, { expires: 7 });
  },
};

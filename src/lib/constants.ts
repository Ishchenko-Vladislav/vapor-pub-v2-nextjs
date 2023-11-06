export const API_URL = `${process.env.SERVER_URL}`;
export const ACCESS_TOKEN_MAX_AGE = 10 * 60 * 60 * 1000;
export enum TOKENS_ENUM {
  ACCESS_TOKEN = "access_token",
  REFRESH_TOKEN = "refresh_token",
}

export const AUTH_ROUTE = {
  refresh: () => API_URL + "/auth/v1/secret/refresh",
  login: () => API_URL + "/auth/login",
  register: () => API_URL + "/auth/register",
};

"use client";
// import { PAGES_ROUTE, TOKENS_ENUM } from "@/utils/constants";
import { usePathname, useRouter } from "next/navigation";
// import { cookies } from "next/headers";
import Cookie from "js-cookie";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthorization } from "@/hooks/auth/useAuthorization";
import { TUser } from "@/lib/schema";
import { User } from "firebase/auth";
// import { AuthService } from "@/services/auth/auth.service";
// import { IAuthUser, useIsAuth } from "@/hooks/useAuth";
// import { Preloader } from "@/components/preloader/Preloader";

interface IAuthorizationContext {
  // user: any;
  authed: User | null;
  user: TUser | null;
}

const AuthorizationContext = createContext({} as IAuthorizationContext);
export const useAuth = () => {
  return useContext(AuthorizationContext);
};
export const AuthorizationProvider = ({ children }: { children: ReactNode }) => {
  const { authed, user } = useAuthorization();
  return (
    <AuthorizationContext.Provider value={{ authed, user }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

// const publicRoute = [PAGES_ROUTE.login, PAGES_ROUTE.register];

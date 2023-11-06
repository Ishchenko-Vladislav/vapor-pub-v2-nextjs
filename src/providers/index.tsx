"use client";

import { FC, PropsWithChildren } from "react";
import { QueryClient, useQuery, QueryClientProvider } from "@tanstack/react-query";
import { ToasterContainer } from "./Toaster";
import { AuthorizationProvider } from "@/context/Authorization";

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <AuthorizationProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ToasterContainer />
      </QueryClientProvider>
    </AuthorizationProvider>
  );
};

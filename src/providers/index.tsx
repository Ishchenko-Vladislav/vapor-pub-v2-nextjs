"use client";

import { FC, PropsWithChildren } from "react";
import { QueryClient, useQuery, QueryClientProvider } from "@tanstack/react-query";
import { ToasterContainer } from "./Toaster";
import { AuthorizationProvider } from "@/context/Authorization";
import { CartContextProvider } from "@/context/CartContext";
import { CatalogContextProvider } from "@/context/CatalogContext";

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
      <CartContextProvider>
        <CatalogContextProvider>
          {children}
          <ToasterContainer />
        </CatalogContextProvider>
      </CartContextProvider>
    </AuthorizationProvider>
  );
};

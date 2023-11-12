"use client";
import { ProductRef, useGetAllProducts } from "@/hooks/product/useGetAllProducts";
import { createContext, useContext, PropsWithChildren, FC } from "react";

type CatalogContextT = {
  products: ProductRef[];
  productsByType: (type: string) => ProductRef[];
};
const CatalogContext = createContext({} as CatalogContextT);
export function useCart() {
  return useContext(CatalogContext);
}

export const CatalogContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isEmpty, products } = useGetAllProducts();
  const productsByType = (type: string) => products.filter((el) => el.product.type === type);
  return (
    <CatalogContext.Provider value={{ products, productsByType }}>
      {children}
    </CatalogContext.Provider>
  );
};

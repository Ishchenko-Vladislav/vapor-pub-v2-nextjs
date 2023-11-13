"use client";
import { ProductRef, useGetAllProducts } from "@/hooks/product/useGetAllProducts";
import { TProduct } from "@/lib/schema";
import { createContext, useContext, PropsWithChildren, FC } from "react";

type CatalogContextT = {
  products: ProductRef[];
  isEmpty: boolean;
  productsByType: (type: TypeProduct) => ProductRef[];
};
const CatalogContext = createContext({} as CatalogContextT);
export function useCatalog() {
  return useContext(CatalogContext);
}
type TypeProduct = "vozol-star" | "vozol-gear" | "elfbar-ebdesign";

export const CatalogContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isEmpty, products } = useGetAllProducts();
  const productsByType = (type: TypeProduct) => products.filter((el) => el.product.type === type);
  return (
    <CatalogContext.Provider value={{ products, isEmpty, productsByType }}>
      {children}
    </CatalogContext.Provider>
  );
};

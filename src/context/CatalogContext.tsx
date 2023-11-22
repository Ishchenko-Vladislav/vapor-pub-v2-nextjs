"use client";
import { ProductRef, useGetAllProducts } from "@/hooks/product/useGetAllProducts";
import { TProduct } from "@/lib/schema";
import { createContext, useContext, PropsWithChildren, FC, useMemo } from "react";

type CatalogContextT = {
  products: ProductRef[];
  isEmpty: boolean;
  productsByType: (type: TypeProduct) => ProductRef[];
  newProducts: ProductRef[];
  topSellers: ProductRef[];
};
const CatalogContext = createContext({} as CatalogContextT);
export function useCatalog() {
  return useContext(CatalogContext);
}
type TypeProduct = "vozol-star" | "vozol-gear" | "elfbar-ebdesign";

export const CatalogContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isEmpty, products } = useGetAllProducts();
  const productsByType = (type: TypeProduct) => products.filter((el) => el.product.type === type);
  const topSellers = useMemo(() => {
    return products.filter((el) => el.product.topSeller);
  }, [products]);
  const newProducts = useMemo(() => {
    return products.filter((el) => el.product.newProduct);
  }, [products]);
  return (
    <CatalogContext.Provider value={{ products, isEmpty, topSellers, newProducts, productsByType }}>
      {children}
    </CatalogContext.Provider>
  );
};

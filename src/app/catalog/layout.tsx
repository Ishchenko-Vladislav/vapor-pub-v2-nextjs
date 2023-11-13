import { CatalogContextProvider } from "@/context/CatalogContext";
import { FC, PropsWithChildren } from "react";

interface Props {}

const layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  // const {} = CatalogContextProvider()
  return <CatalogContextProvider>{children}</CatalogContextProvider>;
};
export default layout;

import { CheckoutContextProvider } from "@/context/CheckoutContext";
import { FC, PropsWithChildren } from "react";

interface Props {}

const layout: FC<PropsWithChildren> = ({ children }) => {
  return <CheckoutContextProvider>{children}</CheckoutContextProvider>;
};

export default layout;

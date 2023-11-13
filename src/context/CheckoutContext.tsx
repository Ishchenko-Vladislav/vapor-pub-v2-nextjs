"use client";
import { db } from "@/lib/firebase.config";
import { TOrderType, TPromo, TShippingMethodNames, promoSchema } from "@/lib/schema";
import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";

type TCheckoutContext = {
  promo: TPromo | null;
  isActivePromo: boolean;
  shippingName: TShippingMethodNames;
  shippingPrice: number;
  checkValidPromo: (text: string) => void;
  onChangeShippingMethod: (t: TShippingMethodNames) => void;
};
const CheckoutContext = createContext({} as TCheckoutContext);

export const useCheckout = () => useContext(CheckoutContext);

export const CheckoutContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [promo, setPromo] = useState<TPromo | null>(null);
  const [isActivePromo, setIsActivePromo] = useState<boolean>(false);
  const [shippingName, setShippingName] = useState<TShippingMethodNames>("PNL");
  const checkValidPromo = async (name: string) => {
    // const validPromo = promoSchema.parse(props);
    try {
      const q = query(collection(db, "promo"), where("name", "==", name));
      const isExist = await getDocs(q);
      if (isExist.size > 0) {
        const vp = promoSchema.parse(isExist.docs[0].data());
        setPromo(vp);
        setIsActivePromo(true);
        toast.success("Промокод успешно активирован");
      } else {
        setIsActivePromo(false);
        toast.error("Такого промокода не существует");
      }
    } catch (error) {
      console.log("error when check valid promo");
    }
  };

  const shippingPrice = useMemo(() => {
    const d: Record<TShippingMethodNames, number> = {
      COUNTRY: 8,
      HAND: 0,
      PNL: 6,
    };
    return d[shippingName];
  }, [shippingName]);

  const onChangeShippingMethod = (t: TShippingMethodNames) => {
    setShippingName(t);
  };
  return (
    <CheckoutContext.Provider
      value={{
        promo,
        shippingName,
        shippingPrice,
        isActivePromo,
        checkValidPromo,
        onChangeShippingMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

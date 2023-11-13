import { db } from "@/lib/firebase.config";
import { TPromo, promoSchema } from "@/lib/schema";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";

export const useCheckout = () => {
  const [promo, setPromo] = useState<TPromo | null>(null);
  const [isActivePromo, setIsActivePromo] = useState<boolean>(false);
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

  return {
    checkValidPromo,
    isActivePromo,
    promo,
  };
};

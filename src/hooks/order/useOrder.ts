import { db } from "@/lib/firebase.config";
import { TOrderType, orderSchema } from "@/lib/schema";
import { collection, doc, limit, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

type TExist = "exist" | "not-exist" | "loading";
type TOrderRef = {
  order: TOrderType;
  id: string;
};
export const useOrder = (id: string | null | undefined = undefined) => {
  const [orderRef, setOrderRef] = useState<TOrderRef | null>(null);
  const [exist, setExist] = useState<TExist>("loading");

  useEffect(() => {
    if (!id) return;
    const q = query(collection(db, "orders"), where("id", "==", id), limit(1));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        setExist("not-exist");
        return;
      } else {
        const d = orderSchema.parse(querySnapshot.docs[0].data());
        setOrderRef({
          order: d,
          id: querySnapshot.docs[0].id,
        });
        setExist("exist");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [id]);

  return {
    orderRef,
    exist,
  };
};

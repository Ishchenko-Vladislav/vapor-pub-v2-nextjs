import { db } from "@/lib/firebase.config";
import { TOrderType, orderSchema } from "@/lib/schema";
import { collection, doc, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useLastOrder = (id: string | null | undefined = undefined) => {
  const [order, setOrder] = useState<TOrderType | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc"),
      where("customerId", "==", id),
      limit(1)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        setIsEmpty(querySnapshot.empty);
        return;
      } else {
        const d = orderSchema.parse(querySnapshot.docs[0].data());
        console.log("last order here", d);
        setOrder(d);
      }
      //   const ord: TOrderType[] = [];
      //   querySnapshot.forEach((doc) => {
      //     // cities.push(doc.data().name);
      //     // console.log("order doc", doc);
      //     try {
      //       const isValidOrder = orderSchema.parse(doc.data());
      //       ord.push(isValidOrder);
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   });
      //   setOrders(ord);
    });

    return () => {
      unsubscribe();
    };
  }, [id]);

  return { order };
};

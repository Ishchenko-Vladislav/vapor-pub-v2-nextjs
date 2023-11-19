import { db } from "@/lib/firebase.config";
import { TOrderType, orderSchema } from "@/lib/schema";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGetAllOrder = () => {
  const [orders, setOrders] = useState<TOrderType[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setIsEmpty(querySnapshot.empty);
      const ord: TOrderType[] = [];
      querySnapshot.forEach((doc) => {
        // cities.push(doc.data().name);
        // console.log("order doc", doc);
        try {
          const isValidOrder = orderSchema.parse(doc.data());
          ord.push(isValidOrder);
        } catch (error) {
          console.log(error);
        }
      });
      setOrders(ord);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { orders, isEmpty };
};

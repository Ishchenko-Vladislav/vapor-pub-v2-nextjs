import { db } from "@/lib/firebase.config";
import { TOrderType } from "@/lib/schema";
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
      const orders: TOrderType[] = [];
      querySnapshot.forEach((doc) => {
        // cities.push(doc.data().name);
        console.log("order doc", doc);
      });
      console.log("Current cities in CA: ", querySnapshot);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { orders, isEmpty };
};

import { db } from "@/lib/firebase.config";
import { TOrderType, TProduct, productSchema } from "@/lib/schema";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export type ProductRef = {
  product: TProduct;
  id: string;
};
export const useGetAllProducts = () => {
  const [products, setProducts] = useState<ProductRef[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setIsEmpty(querySnapshot.empty);
      const res: ProductRef[] = [];
      querySnapshot.forEach((doc) => {
        try {
          const validProduct = productSchema.parse(doc.data());
          res.push({ product: validProduct, id: doc.id });
        } catch (error) {
          console.log("no valid products");
        }
        // cities.push(doc.data().name);
        console.log("order doc", doc);
      });
      setProducts(res);
      console.log("Current cities in CA: ", querySnapshot);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { products, isEmpty };
};

import { db } from "@/lib/firebase.config";
import { TPromo, promoSchema } from "@/lib/schema";
import { collection, onSnapshot, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { addDocument, deleteDocument, getDocument } from "../firebase.utils";
import toast from "react-hot-toast";

type PromoRef = {
  promo: TPromo;
  id: string;
};

export const usePromo = () => {
  const [promo, setPromo] = useState<PromoRef[]>([]);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    const q = query(collection(db, "promo"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setIsEmpty(querySnapshot.empty);
      const res: PromoRef[] = [];
      querySnapshot.forEach((doc) => {
        try {
          const validProduct = promoSchema.parse(doc.data());
          res.push({ id: doc.id, promo: validProduct });
        } catch (error) {
          console.log("no valid products");
        }
        // cities.push(doc.data().name);
        // console.log("order doc", doc);
      });
      //   setProducts(res);
      setPromo(res);
      //   console.log("Current cities in CA: ", querySnapshot);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const addPromo = async (props: TPromo) => {
    try {
      const validPromo = promoSchema.parse(props);
      const q = query(collection(db, "promo"), where("name", "==", props.name));
      const isExist = await getDocs(q);
      if (isExist.size === 0) {
        const p = await addDocument("promo", validPromo);
      } else {
        return toast.error("Такой промокод уже существует");
      }
    } catch (error) {
      toast.error("Что то пошло не так");
    }
  };

  const deletePromo = async (id: string) => {
    try {
      await deleteDocument("promo", id);
      toast.success("Успешно удалено");
    } catch (error) {
      toast.error("Что то пошло не так");
    }
  };

  return { promo, isEmpty, deletePromo, addPromo };
};

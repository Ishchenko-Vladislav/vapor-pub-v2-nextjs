import { db } from "@/lib/firebase.config";
import { TOrderType } from "@/lib/schema";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";

export const useUpdateOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const updateStatus = async (status: TOrderType["status"], id: string) => {
    setIsLoading(true);
    const orderRef = doc(db, "orders", id);
    try {
      await updateDoc(orderRef, {
        status: status,
      });
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    updateStatus,
  };
};

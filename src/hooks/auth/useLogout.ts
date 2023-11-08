import { auth } from "@/lib/firebase.config";
import { getMessageFromFirebaseError } from "@/lib/utils";
import { FirebaseError } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const logout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      push("/");
    } catch (error: any) {
      if (error instanceof FirebaseError) {
        toast.error(error.code);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { logout, isLoading };
};

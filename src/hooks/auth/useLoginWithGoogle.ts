import { auth, db } from "@/lib/firebase.config";
import {
  GoogleAuthProvider,
  UserCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
// import { TUser } from "./auth.interface";
import { setDocument } from "../firebase.utils";
import { FirebaseError } from "firebase/app";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { userSchema } from "@/lib/schema";

export const useLoginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const { push } = useRouter();
  const loginWithGoogle = async () => {
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      if (!result) return null;
      const { email, uid, phoneNumber, displayName, emailVerified } = result.user;
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        // const userDoc: TUser = {
        //   email: email!,
        //   emailVerified,
        //   phoneNumber,
        //   role: "user",
        //   userName: displayName!,
        //   uid
        // };
        const userDoc = userSchema.parse({
          uid,
          email,
          emailVerified,
          phoneNumber,
          userName: displayName,
        });
        await setDocument("users", uid, userDoc);
      }
      push("/profile");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
      }
    }
  };
  return {
    loginWithGoogle,
  };
  // signInWithPopup(auth, provider).then(async (result) => {

  //   const { email, uid, phoneNumber, displayName, emailVerified } = result.user;
  //   const docRef = doc(db, "users", uid);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) return null;
  //   const userDoc: Omit<TUser, "uid"> = {
  //     email: email!,
  //     emailVerified,
  //     phoneNumber,
  //     role: "user",
  //     userName: displayName!,
  //   };
  //   await setDocument("users", uid, userDoc);
  //   //   await setDoc(doc(db, 'users', uid), {
  //   //     email,
  //   //     uid,
  //   //     phoneNumber,
  //   //     role: 'user',
  //   //     userName: displayName,
  //   //   });
  // });
};

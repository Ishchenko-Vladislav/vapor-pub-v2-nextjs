import { useAuth } from "@/context/Authorization";
import { getMessageFromError, getMessageFromFirebaseError } from "@/lib/utils";
import { ILoginDTO, IRegisterDTO } from "@/services/auth/auth.interface";
import { AuthService } from "@/services/auth/auth.services";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { setCookieFromBrowser } from "./utils";
import { useState } from "react";
import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase.config";
import { addDocument, setDocument } from "../firebase.utils";
import { TRegisterDTO } from "./auth.interface";
import { FirebaseError } from "firebase/app";
import { userSchema } from "@/lib/schema";

type IProps = {
  redirect: string;
};
// export const useRegister = ({ redirect }: IProps) => {
//   const { push } = useRouter();
//   const { setIsAuth } = useAuth();
//   return useMutation({
//     mutationFn: async (payload: IRegisterDTO) => {
//       const res = AuthService.register(payload);
//       // toast.promise(res, {
//       //   loading: "Loading",
//       //   success: "Successfully",
//       //   error: (err) => err?.response?.data.message,
//       // });
//       const result = await res;
//       return result;
//     },
//     onSuccess: (data, variables, context) => {
//       AuthService.setTokensToCookie(data);

//       //   push("/");
//       //   console.log("data login here", data);
//       toast.success("Добро пожаловать");
//       if (redirect) {
//         push(redirect);
//       }
//       setIsAuth(true);
//     },
//     onError(error: any, variables, context) {
//       const message = getMessageFromError(error);
//       toast.error(message);
//       return error;
//     },
//   });
// };

type TState = "isSuccess" | "isError" | "loading";

export const useRegister = (options: IProps | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<TState>("loading");
  const { push } = useRouter();

  const register = async (registerDto: TRegisterDTO) => {
    setIsLoading(true);
    const { email, password, username } = registerDto;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await createUser(userCredential, username);
      setIsSuccess("isSuccess");

      if (options) {
        push(options.redirect);
      }
    } catch (error: any) {
      if (error instanceof FirebaseError) {
        toast.error(error.code);
      }
      setIsSuccess("isError");
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading };
};

const createUser = async (userCredential: UserCredential, userName: string) => {
  const { email, emailVerified, uid, phoneNumber } = userCredential.user;
  // const u: TUser = {
  //   uid: uid,
  //   email: email!,
  //   emailVerified: emailVerified,
  //   userName: userName,
  //   role: "user",
  //   phoneNumber: phoneNumber,
  // };
  const u = userSchema.parse({
    uid,
    email,
    emailVerified,
    phoneNumber,
    userName,
  });
  const user = await setDocument("users", uid, u);
  return user;
};

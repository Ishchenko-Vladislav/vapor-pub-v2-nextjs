import { useAuth } from "@/context/Authorization";
import { auth } from "@/lib/firebase.config";
import { getMessageFromError, getMessageFromFirebaseError } from "@/lib/utils";
import { AuthService } from "@/services/auth/auth.services";
import { useMutation } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { TLoginDTO } from "./auth.interface";
import { FirebaseError } from "firebase/app";

type IProps = {
  redirect: string;
};
// export const useLogin = ({ redirect }: IProps) => {
//   const { push } = useRouter();
//   const { setIsAuth } = useAuth();
//   return useMutation({
//     mutationFn: async (payload: ILoginDTO) => {
//       const res = AuthService.login(payload);
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
export const useLogin = (options: Partial<IProps | undefined> = undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<TState>("loading");
  const { push } = useRouter();
  const login = async (loginDto: TLoginDTO) => {
    setIsLoading(true);
    const { email, password } = loginDto;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const {} = userCredential.user;
      setIsSuccess("isSuccess");
      if (options && options.redirect) {
        push(options.redirect);
      }
    } catch (error: any) {
      // const message = getMessageFromFirebaseError(error);
      if (error instanceof FirebaseError) {
        toast.error(error.code);
      }
      setIsSuccess("isError");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, isSuccess };
};

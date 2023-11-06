import { useAuth } from "@/context/Authorization";
import { getMessageFromError } from "@/lib/utils";
import { ILoginDTO, IRegisterDTO } from "@/services/auth/auth.interface";
import { AuthService } from "@/services/auth/auth.services";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { setCookieFromBrowser } from "./utils";

type IProps = {
  redirect?: string;
};
export const useRegister = ({ redirect }: IProps) => {
  const { push } = useRouter();
  const { setIsAuth } = useAuth();
  return useMutation({
    mutationFn: async (payload: IRegisterDTO) => {
      const res = AuthService.register(payload);
      // toast.promise(res, {
      //   loading: "Loading",
      //   success: "Successfully",
      //   error: (err) => err?.response?.data.message,
      // });
      const result = await res;
      return result;
    },
    onSuccess: (data, variables, context) => {
      AuthService.setTokensToCookie(data);

      //   push("/");
      //   console.log("data login here", data);
      toast.success("Добро пожаловать");
      if (redirect) {
        push(redirect);
      }
      setIsAuth(true);
    },
    onError(error: any, variables, context) {
      const message = getMessageFromError(error);
      toast.error(message);
      return error;
    },
  });
};

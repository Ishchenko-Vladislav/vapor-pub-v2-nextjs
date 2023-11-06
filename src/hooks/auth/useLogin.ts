import { useAuth } from "@/context/Authorization";
import { getMessageFromError } from "@/lib/utils";
import { ILoginDTO } from "@/services/auth/auth.interface";
import { AuthService } from "@/services/auth/auth.services";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type IProps = {
  redirect?: string;
};
export const useLogin = ({ redirect }: IProps) => {
  const { push } = useRouter();
  const { setIsAuth } = useAuth();
  return useMutation({
    mutationFn: async (payload: ILoginDTO) => {
      const res = AuthService.login(payload);
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

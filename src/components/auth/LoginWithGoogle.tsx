"use client";
import { FC } from "react";
import { IoLogoGoogle } from "react-icons/io5";
import { Button } from "../ui/button";
import { useLoginWithGoogle } from "@/hooks/auth/useLoginWithGoogle";

interface Props {}

export const LoginWithGoogle: FC<Props> = () => {
  const { loginWithGoogle } = useLoginWithGoogle();
  return (
    <Button onClick={loginWithGoogle} variant={"outline"} className="flex items-center gap-2">
      <IoLogoGoogle />
      <span>Войти с помощью Google</span>
    </Button>
  );
};

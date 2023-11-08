import { LoginWithGoogle } from "@/components/auth/LoginWithGoogle";
import { LoginForm } from "@/components/auth/login-form/LoginForm";
import { RegisterForm } from "@/components/auth/register-form/RegisterForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { IoLogoGoogle } from "react-icons/io5";

interface Props {}
const page = (props: Props) => {
  return (
    <div className="w-full h-full">
      <div className="max-w-4xl w-full mx-auto px-2">
        <div className="py-20 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div>Авторизация</div>
          </div>
          <LoginForm />
          <div className="flex gap-2 items-center">
            <div className="">Еще нет аккаунта?</div>
            <Button variant={"ghost"} asChild>
              <Link href={"/register"}>Регистрация</Link>
            </Button>
          </div>
          <div className="flex gap-5 items-center w-full">
            <div className="w-full h-[1px] bg-border"></div>
            <div className="text-muted-foreground">или</div>
            <div className="w-full h-[1px] bg-border"></div>
          </div>
          <div>
            <LoginWithGoogle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

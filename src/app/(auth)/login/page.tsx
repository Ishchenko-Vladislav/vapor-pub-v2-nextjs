import { LoginForm } from "@/components/auth/login-form/LoginForm";
import { RegisterForm } from "@/components/auth/register-form/RegisterForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Props {}
const page = (props: Props) => {
  return (
    <div className="w-full h-full">
      <div className="max-w-4xl w-full mx-auto">
        <div className="py-20 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div>Авторизация</div>
            <div className="ml-auto">Еще нет аккаунта?</div>
            <Button variant={"ghost"} asChild>
              <Link href={"/register"}>Регистрация</Link>
            </Button>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;

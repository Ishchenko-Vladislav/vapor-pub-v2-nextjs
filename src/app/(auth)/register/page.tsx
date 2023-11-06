// 'use client'
import { RegisterForm } from "@/components/auth/register-form/RegisterForm";
import { Button } from "@/components/ui/button";
import { useRegister } from "@/hooks/auth/useRegister";
import Link from "next/link";
import React from "react";

interface Props {}
const page = (props: Props) => {
  return (
    <div className="w-full h-full">
      <div className="max-w-4xl w-full mx-auto">
        <div className="py-20 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div>Быстрая регистрация</div>
            <div className="ml-auto">У вас уже есть аккаунт?</div>
            <Button variant={"ghost"} asChild>
              <Link href={"/login"}>Войти</Link>
            </Button>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default page;

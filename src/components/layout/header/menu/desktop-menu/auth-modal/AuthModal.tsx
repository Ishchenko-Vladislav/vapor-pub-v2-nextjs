"use client";
import { LoginWithGoogle } from "@/components/auth/LoginWithGoogle";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/auth/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  email: z.string().email("Неверный формат email"),
  password: z.string(),
});
export const AuthModal = () => {
  const { login, isSuccess } = useLogin();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const buttonCloseRef = useRef<HTMLButtonElement>(null);
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    login(values);
  }
  useEffect(() => {
    if (isSuccess === "isSuccess") {
      form.reset();
      buttonCloseRef.current?.click();
    }
    return () => {};
  }, [isSuccess]);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex gap-2 items-center text-muted-foreground text-sm">
          <div>Авторизация</div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Войти</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>E-mail</FormLabel> */}
                  <FormControl>
                    <Input placeholder="Введите email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Пароль</FormLabel> */}
                  <FormControl>
                    <Input type="password" placeholder="Введите пароль" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Button type="submit">Войти</Button> */}
            <div className="flex gap-4 items-center">
              <Button type="submit">Войти</Button>
              <DialogClose asChild>
                <Button type="button" variant={"ghost"} asChild>
                  <Link href={"/register"}>Регистрация</Link>
                </Button>
              </DialogClose>
              <DialogClose ref={buttonCloseRef} />
            </div>
          </form>
        </Form>
        <div className="flex gap-5 items-center w-full">
          <div className="w-full h-[1px] bg-border"></div>
          <div className="text-muted-foreground">или</div>
          <div className="w-full h-[1px] bg-border"></div>
        </div>
        <div className="w-fit mx-auto">
          <LoginWithGoogle />
        </div>
        {/* <div className="flex flex-col gap-4 pt-8">
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <div className="flex gap-4 items-center">
            <Button>войти</Button>
            <DialogClose asChild>
              <Button  variant={"ghost"} asChild>
                <Link href={"/register"}>регистрация</Link>
              </Button>
            </DialogClose>
          </div>
        </div> */}
      </DialogContent>
    </Dialog>
  );
  //   return (
  //     <Dialog>
  //       <DialogTrigger>
  //         <div className="flex gap-2 items-center text-muted-foreground text-sm">
  //           <div>Авторизация</div>
  //         </div>
  //       </DialogTrigger>
  //       <DialogContent>
  //         <DialogHeader>
  //           <DialogTitle>Войти</DialogTitle>
  //         </DialogHeader>
  //         <div className="flex flex-col gap-4 pt-8">
  //           <Input placeholder="E-mail" />
  //           <Input placeholder="Password" />
  //           <div className="flex gap-4 items-center">
  //             <Button>войти</Button>
  //             <DialogClose asChild>
  //               <Button  variant={"ghost"} asChild>
  //                 <Link href={"/register"}>регистрация</Link>
  //               </Button>
  //             </DialogClose>
  //           </div>
  //         </div>
  //       </DialogContent>
  //     </Dialog>
  //   );
};

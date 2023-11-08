"use client";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/auth/useLogout";
import { FC } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {}

export const LogoutButton: FC<Props> = () => {
  const { logout } = useLogout();
  return (
    <div className="flex flex-col gap-10">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="xs:w-fit w-4/5 xs:mx-0 mx-auto" variant={"destructive"}>
            Выйти
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Вы уверены что хотите выйти с аккаунта?</AlertDialogTitle>
            {/* <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription> */}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Закрыть</AlertDialogCancel>
            <AlertDialogAction onClick={logout}>Выйти</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* <Button onClick={logout} className="w-fit" variant={"destructive"}>
        Выйти
      </Button> */}
    </div>
  );
};

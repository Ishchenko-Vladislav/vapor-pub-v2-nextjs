"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/Authorization";
import Link from "next/link";
import { FC } from "react";

interface Props {}

export const AdminHeader: FC<Props> = () => {
  const { user } = useAuth();
  return (
    <div className="py-6 flex justify-between items-center">
      <div>
        <h1 className="font-semibold">Профиль</h1>
      </div>
      {user && user.role === "admin" ? (
        <Button asChild variant={"outline"}>
          <Link href={"/admin"}>Админ панель</Link>
        </Button>
      ) : null}
    </div>
  );
};

"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

interface Props {}

export const AdminLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto py-10 flex items-center gap-10">
        <Button variant={"ghost"} asChild>
          <Link
            className={cn("", {
              ["text-primary"]: pathname === "/admin",
            })}
            href={"/admin"}
          >
            Заказы
          </Link>
        </Button>
        <Button variant={"ghost"} asChild>
          <Link
            className={cn("", {
              ["text-primary"]: pathname === "/admin/catalog",
            })}
            href={"/admin/catalog"}
          >
            Товары
          </Link>
        </Button>
        <Button variant={"ghost"} asChild>
          <Link
            className={cn("", {
              ["text-primary"]: pathname === "/admin/promo",
            })}
            href={"/admin/promo"}
          >
            Промо
          </Link>
        </Button>
      </div>
      <div>{children}</div>
    </div>
  );
};

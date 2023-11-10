"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Button } from "../ui/button";

interface Props {
  homeElement: string;
}

export const BreadCrumb: FC<Props> = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter(Boolean);
  //   console.log("pathNames", pathNames);
  return (
    <div>
      {pathNames.map((el, index) => {
        let href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const cur = index === 0 ? el : "/" + el;
        return (
          <span key={index}>
            <Button key={el} variant={"link"} asChild className="w-fit h-fit p-0">
              <Link href={href}>{el}</Link>
            </Button>
            {pathNames.length !== index + 1 && <span className="px-2">/</span>}
          </span>
          //   <Button key={el} variant={"link"} asChild className="w-fit h-fit p-0">

          //     <Link href={href}>{cur}</Link>
          //   </Button>
        );
      })}
    </div>
  );
};

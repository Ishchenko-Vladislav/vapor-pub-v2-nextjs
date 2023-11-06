"use client";
import { FC } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { CgOptions } from "react-icons/cg";
interface Props {}

export const Filter: FC<Props> = () => {
  return (
    <div className="max-w-xs w-full hidden md:flex flex-col bg-accent rounded p-4">
      <div className="flex items-center gap-2 pb-2">
        <CgOptions />
        <span>Фильтр</span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer w-fit">
        <Checkbox className="rounded" id="vozol-gear" />
        <Label className="cursor-pointer" htmlFor="vozol-gear">
          Vozol Gear
        </Label>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer w-fit">
        <Checkbox className="rounded" id="vozol-star" />
        <Label className="cursor-pointer" htmlFor="vozol-star">
          Vozol Star
        </Label>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer w-fit">
        <Checkbox className="rounded" id="elfbar-ebdesing" />
        <Label className="cursor-pointer" htmlFor="elfbar-ebdesing">
          Elfbar EBdesing
        </Label>
      </div>
    </div>
  );
};

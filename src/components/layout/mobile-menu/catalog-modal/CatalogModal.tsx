import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { BiHomeAlt2 } from "react-icons/bi";
import Image from "next/image";
import { RiShoppingBagLine, RiCloseLine, RiApps2Line } from "react-icons/ri";
import Link from "next/link";

interface Props {}

export const CatalogModal: FC<Props> = () => {
  return (
    <Dialog>
      <DialogTrigger className="webkit-highlight active:text-primary">
        {/* <BiHomeAlt2

        /> */}

        <div className="flex flex-col gap-1 justify-center items-center">
          <RiApps2Line />
          <div>
            <span>Каталог</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogClose>
          <DialogOverlay />
        </DialogClose>
        <div className="fixed bottom-0 left-0 z-50 w-full">
          <div className=" w-full bg-white rounded-xl py-4 border-t rounded-t-xl">
            <div className="w-full justify-end items-center flex px-5 relative">
              <div className="absolute left-1/2 -translate-x-1/2">Каталог</div>
              <DialogClose>
                <RiCloseLine />
              </DialogClose>
            </div>
            <div className="w-full h-fit flex flex-col">
              <DialogClose asChild>
                <Link className="px-4 w-full py-3" href={"/catalog"}>
                  Все
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link className="px-4 w-full py-3" href={"/catalog/vozol-gear"}>
                  Vozol Gear
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link className="px-4 w-full py-3" href={"/catalog/vozol-star"}>
                  Vozol Star
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link className="px-4 w-full py-3" href={"/catalog/elfbar-ebdesign"}>
                  Elfbar EBdesing
                </Link>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogPortal>
    </Dialog>
  );
};

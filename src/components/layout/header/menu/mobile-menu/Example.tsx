import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
  DialogClose,
} from "@/components/ui/dialog";

import { motion, AnimatePresence } from "framer-motion";

import { FaBarsStaggered } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { RiCloseLine } from "react-icons/ri";
import { IconBaseProps } from "react-icons";
import Link from "next/link";
interface Ilinks {
  title: string;
  icon: (className?: IconBaseProps) => JSX.Element;
  link: string;
}
export const links: Ilinks[] = [
  {
    icon: (className) => <SiTelegram {...className} />,
    link: "https://t.me/vaporpubpost",
    title: "Телеграм оператор",
  },
  {
    icon: (className) => <SiTelegram {...className} />,
    link: "https://t.me/vaporpub",
    title: "Телеграм канал",
  },
];
interface Props {}

const Example: FC<Props> = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <FaBarsStaggered className="text-xl" />
      </DialogTrigger>
      {/* <DialogPortal>
        <DialogOverlay />
        <div className="w-screen h-screen fixed inset-0 bg-transparent flex flex-col items-end z-50">
          <div className="max-w-sm w-full flex items-start h-full gap-2 absolute transition-all duration-1000">
            <DialogClose>
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center">
                <RiCloseLine />
              </div>
            </DialogClose>
            <div className="max-w-xs w-full h-full bg-background border-l border-border flex flex-col">
              <div className="text-center py-2">
                <span>Menu</span>
              </div>
            </div>
          </div>
        </div>
      </DialogPortal> */}
      <DialogContent className="w-screen h-screen max-w-full border-none">
        <div className="w-full h-full flex flex-col">
          <div className="mx-auto pb-5">Menu</div>
          <div className="w-full h-full flex flex-col gap-4 text-center justify-center text-xl">
            <div>
              <Link href={"/blog"}>Блог</Link>
            </div>
            <div>
              <Link href={"/catalog"}>Каталог</Link>
            </div>
            <div>
              <Link href={"/profile"}>Профиль</Link>
            </div>
          </div>
          <div className="flex justify-around">
            {links.map((item) => (
              <div className="flex flex-col justify-center items-center">
                <span className="text-xs">{item.title}</span>
                <Link target="_blank" href={item.link}>
                  {item.icon({ size: "1.3rem" })}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default Example;

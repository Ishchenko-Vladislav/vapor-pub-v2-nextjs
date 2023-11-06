import Image from "next/image";
import { FC } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Popover, PopoverContent, PopoverTrigger, PopoverClose } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
interface Props {}

export const CartItem: FC<Props> = () => {
  return (
    <div className="w-full px-3 py-2 rounded-md bg-accent flex gap-2">
      <div className="w-24 aspect-square relative shrink-0">
        <Image fill className="w-full object-contain" src={"/c_01.webp"} alt="image" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between items-center">
          <div>elf bar</div>
          <Popover>
            <PopoverTrigger>
              <div className="p-1 hover:bg-background rounded-full">
                <HiDotsVertical className="text-xl" />
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-0 flex flex-col w-fit origin-right">
              <PopoverClose asChild>
                <Button variant={"ghost"}>В закладки</Button>
              </PopoverClose>
              <PopoverClose asChild>
                <Button variant={"ghost"}>удалить</Button>
              </PopoverClose>
            </PopoverContent>
          </Popover>
        </div>
        <div></div>
      </div>
    </div>
  );
};

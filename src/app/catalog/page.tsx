import { Filter } from "@/components/pages/catalog/filter/Filter";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { CgOptions } from "react-icons/cg";
import { RiShoppingBagLine } from "react-icons/ri";

const im = "";
interface Props {}

const page = (props: Props) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto pb-10">
        <div className="flex flex-col">
          <div className="w-full py-10 relative px-2">
            <Image
              className="w-full object-contain rounded-sm xs:rounded-lg md:rounded-xl"
              width={1000}
              height={200}
              src={"/012.webp"}
              alt="bg"
            />
            <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-fit whitespace-nowrap">
              <span className="text-xs xs:text-base sm:text-xl font-bold">
                Одноразовые електронные сигареты
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-start px-2">
            {/* <Filter /> */}
            {/* <div className="fixed bottom-10 right-4 p-2 rounded-full bg-primary opacity-50 z-50">
              <CgOptions />
            </div> */}
            <div className="grid xs:mx-0 mx-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-4 ">
              {arr.map((el) => (
                <div
                  key={el}
                  className=" w-full h-auto p-1 xs:p-2 border border-border rounded-xl bg-secondary max-w-xs"
                >
                  <div className="w-full mx-auto aspect-square">
                    <img src="1.jpg" alt="dd" className="w-full object-contain mix-blend-darken" />
                  </div>
                  <div className="pt-4 px-1">
                    <div className="text-sm">
                      <span>Elf Bar 1500 Disposable 5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>30$</div>
                      <div>
                        <RiShoppingBagLine />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";
import { TProduct } from "@/lib/schema";
import Image from "next/image";
import { FC, useRef, useState } from "react";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
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
import { useForm } from "react-hook-form";

import { Popover, PopoverContent, PopoverTrigger, PopoverClose } from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUpdateProduct } from "@/hooks/product/useUpdateProduct";
import { uploadFile } from "@/hooks/file/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { numberToEUR } from "@/lib/utils";
import { v4 } from "uuid";
import { ProductRef } from "@/hooks/product/useGetAllProducts";
import { useDeleteProduct } from "@/hooks/product/useDeleteProduct";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface Props {}
const formSchema = z.object({
  title: z.string().default("Без названия"),
  description: z.string().default("Без описания"),
  discount: z.boolean().default(false),
  //   discountPrice: z.number().default(0),
  discountPrice: z.coerce.number().min(0).default(0),
  img: z.union([
    z.null(),
    z.object({
      url: z.string().default(""),
      path: z.string().default(""),
    }),
  ]),
  //   price: z.number().default(0),
  type: z.string(),
  price: z.coerce.number().min(0).default(0),
  status: z.boolean().default(false),

  topSeller: z.boolean().default(false),
  newProduct: z.boolean().default(false),
});

export const Product: FC<ProductRef> = ({ id, product }) => {
  const [file, setFile] = useState<File | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { update } = useUpdateProduct();
  const { deleteProduct } = useDeleteProduct();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...product },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    try {
      const fileToLoad = await loadFile();
      const payload = {
        ...values,
        img: fileToLoad,
      };
      const p = await update(payload, id);
      console.log("product here", p);
      if (closeButtonRef && closeButtonRef.current) closeButtonRef.current.click();
    } catch (error) {}
    // const { confirmPassword, ...payload } = values;
    // register(payload);
  }
  const loadFile = async () => {
    if (file) {
      const r = product.img ? product.img.path : "images/" + v4();
      return await uploadFile(r, file);
    } else return product.img ?? null;
  };
  return (
    <div className=" w-full h-auto p-1 xs:p-2 border border-border rounded-xl bg-secondary max-w-xs relative flex flex-col">
      {product.discount ? (
        <Image
          width={30}
          height={30}
          className="absolute top-3 right-3 z-10"
          src={"/discount.png"}
          alt="discoutn"
        />
      ) : null}
      {product.topSeller || product.newProduct ? (
        <div className="absolute top-2 left-2 flex flex-col gap-1 xs:gap-2 text-center z-10">
          {product.topSeller ? (
            <div className=" bg-red-500 text-white text-sm px-2 rounded-lg">Топ продаж</div>
          ) : null}
          {product.newProduct ? (
            <div className=" bg-blue-500 text-white text-sm px-2 rounded-lg">Новинка</div>
          ) : null}
        </div>
      ) : null}
      <div className="w-full mx-auto aspect-square relative shrink-0">
        {/* <img src="1.jpg" alt="dd" className="w-full object-contain mix-blend-darken" /> */}
        {product.img ? (
          <Image
            className="w-full object-contain mix-blend-darken"
            src={product.img.url}
            fill
            alt=""
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <MdOutlineImageNotSupported className="w-32 h-32" />
          </div>
        )}
      </div>
      <div className="pt-4 px-1 flex flex-col h-full">
        <div className="text-sm">
          <span>{product.title}</span>
        </div>
        <div className="flex items-center justify-between mt-auto ">
          <div>
            {product.status ? (
              <div>
                {product.discount ? (
                  <div className="flex items-baseline gap-1">
                    <div className="line-through text-muted-foreground text-sm">
                      {numberToEUR(product.price)}
                    </div>
                    <div className="text-red-500">{numberToEUR(product.discountPrice)}</div>
                  </div>
                ) : (
                  <div>{numberToEUR(product.price)}</div>
                )}
              </div>
            ) : (
              <div>Нет в наличии</div>
            )}
          </div>
          <div>
            <Dialog>
              <AlertDialog>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button size={"icon"} variant={"outline"}>
                      <AiOutlineSetting />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 flex flex-col w-fit">
                    <PopoverClose asChild>
                      <DialogTrigger asChild>
                        <Button variant={"ghost"}>Обновить</Button>
                      </DialogTrigger>
                    </PopoverClose>
                    <PopoverClose asChild>
                      <AlertDialogTrigger asChild>
                        <Button variant={"destructive"}>Удалить</Button>
                      </AlertDialogTrigger>
                    </PopoverClose>
                  </PopoverContent>
                </Popover>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Востановить товар будет не возможно
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Отменить</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteProduct({ id, product })}>
                      Удалить
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <DialogContent className="max-h-[95%] overflow-auto">
                <DialogHeader>
                  <DialogTitle>Обновить товар</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Название</FormLabel>
                          <FormControl>
                            <Input placeholder="Введите название" {...field} />
                          </FormControl>
                          {/* <FormDescription>This is your public display name.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div>
                      <div className=" max-w-xs">
                        <label
                          htmlFor="example1"
                          className="mb-1 block text-sm font-medium text-gray-700"
                        >
                          Добавить фото
                        </label>
                        <input
                          accept="image/*"
                          onChange={({ target }) => setFile(target.files && target.files[0])}
                          id="example1"
                          className="cursor-pointer file:cursor-pointer block w-full text-sm file:mr-4 file:rounded-md file:bg-primary file:border-0 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary/80 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                          type="file"
                        />
                      </div>
                    </div>
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Описание товара</FormLabel>
                          <FormControl>
                            {/* <Input placeholder="Введите описание" {...field} /> */}
                            <Textarea
                              placeholder="Введите описание"
                              className="resize-y h-full max-h-96"
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>This is your public display name.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Цена товара</FormLabel>
                          <FormControl>
                            {/* <Input placeholder="Введите цену" {...field} /> */}
                            <Input
                              placeholder="Введите цену"
                              value={field.value}
                              type="number"
                              onChange={field.onChange}
                              //   onChange={({ target }) => field.onChange(+target.value ?? "")}
                              //   onChange={(e) => {
                              // const inputValue: number = parseFloat(e.target.value);
                              // console.log("event", e);
                              // if (!isNaN(inputValue)) {
                              //   // Проверка, является ли введенное значение числом
                              //   field.onChange(inputValue); // Преобразование строки в число и вызов onChange
                              // } else if (inputValue === "") {
                              //   // Если введенная строка пустая
                              //   field.onChange(0); // Установить значение в 0
                              // }
                              //   }}
                            />
                          </FormControl>
                          {/* <FormDescription>This is your public display name.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="discountPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Цена при скидке</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Введите цену" {...field} />
                          </FormControl>
                          {/* <FormDescription>This is your public display name.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Тип товара</FormLabel>

                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Выберите тип товара" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Тип</SelectLabel>
                                <SelectItem value="vozol-gear">Vozol Gear</SelectItem>
                                <SelectItem value="vozol-star">Vozol Star</SelectItem>
                                <SelectItem value="elfbar-ebdesign">Elfbar EBdesing</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          {/* <FormControl> */}
                          {/* <Input type="number" placeholder="Введите цену" {...field} /> */}
                          {/* </FormControl> */}
                          {/* <FormDescription>This is your public display name.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="discount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Скидка</FormLabel>
                          <FormControl>
                            {/* <Input placeholder="Введите пароль" {...field} /> */}
                            <div className="flex gap-2 items-center">
                              <div>нет</div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  //   {...field}
                                  checked={field.value}
                                  onChange={field.onChange}
                                  type="checkbox"
                                  //   defaultValue={field}

                                  className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary/70 dark:peer-focus:ring-primary/80 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Скидка
                          </span> */}
                              </label>
                              <div>да</div>
                            </div>
                          </FormControl>
                          {/* <FormDescription>This is your public display name.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Товар в наличии</FormLabel>
                          <FormControl>
                            {/* <Input placeholder="Введите пароль" {...field} /> */}
                            <div className="flex gap-2 items-center">
                              <div>нет</div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  checked={field.value}
                                  onChange={field.onChange}
                                  type="checkbox"
                                  className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary/70 dark:peer-focus:ring-primary/80 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Скидка
                          </span> */}
                              </label>
                              <div>да</div>
                            </div>
                          </FormControl>
                          {/* <FormDescription>This is your public display name.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="topSeller"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Топ продаж</FormLabel>
                          <FormControl>
                            {/* <Input placeholder="Введите пароль" {...field} /> */}
                            <div className="flex gap-2 items-center">
                              <div>нет</div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  checked={field.value}
                                  onChange={field.onChange}
                                  type="checkbox"
                                  className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary/70 dark:peer-focus:ring-primary/80 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Скидка
                          </span> */}
                              </label>
                              <div>да</div>
                            </div>
                          </FormControl>
                          {/* <FormDescription>This is your public display name.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="newProduct"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Новинка</FormLabel>
                          <FormControl>
                            {/* <Input placeholder="Введите пароль" {...field} /> */}
                            <div className="flex gap-2 items-center">
                              <div>нет</div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  checked={field.value}
                                  onChange={field.onChange}
                                  type="checkbox"
                                  className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary/70 dark:peer-focus:ring-primary/80 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Скидка
                          </span> */}
                              </label>
                              <div>да</div>
                            </div>
                          </FormControl>
                          {/* <FormDescription>This is your public display name.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button type="submit">Обновить</Button>
                      <DialogClose ref={closeButtonRef} asChild>
                        <Button variant={"outline"} type="button">
                          Закрыть
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

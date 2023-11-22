"use client";
import { Button } from "@/components/ui/button";
import { FC, useRef, useState } from "react";
import { X } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProduct } from "@/hooks/product/useCreateProduct";
import { uploadFile } from "@/hooks/file/utils";
import { useGetAllProducts } from "@/hooks/product/useGetAllProducts";
import { Product } from "./product/Product";
import { v4 } from "uuid";
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
  price: z.coerce.number().min(0).default(0),
  status: z.boolean().default(false),
  type: z.string(),
  topSeller: z.boolean().default(false),
  newProduct: z.boolean().default(false),
});

export const CatalogPage: FC<Props> = () => {
  const [file, setFile] = useState<File | null>(null);
  const { add } = useCreateProduct();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const { products, isEmpty } = useGetAllProducts();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      discount: true,
      discountPrice: 0,
      img: null,
      price: 0,
      status: false,
      title: "",
    },
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
      const product = await add(payload);
      console.log("product here", product);
      if (closeButtonRef && closeButtonRef.current) closeButtonRef.current.click();
      form.reset();
    } catch (error) {}
    // const { confirmPassword, ...payload } = values;
    // register(payload);
  }
  const loadFile = async () => {
    if (file) {
      return await uploadFile("images/" + v4(), file);
    } else return null;
  };

  return (
    <div className="max-w-6xl w-full mx-auto px-2">
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"default"}>Создать новый продукт</Button>
          </DialogTrigger>
          <DialogContent className="max-h-[95%] overflow-auto">
            {/* <DialogClose asChild>
              <div className="absolute top-3 right-3 cursor-pointer">
                <X />
              </div>
            </DialogClose> */}
            <DialogHeader>
              <DialogTitle>Создать новый продукт</DialogTitle>
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
                  <Button type="submit">Создать</Button>
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
      <div>
        {isEmpty ? (
          <div> Нет товаров</div>
        ) : (
          <div className="grid xs:mx-0 mx-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-4 py-10">
            {products.map((el) => (
              // <div key={el.id}>{el.title}</div>
              <Product key={el.id} {...el} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

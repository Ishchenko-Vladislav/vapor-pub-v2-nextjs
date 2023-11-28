import { FC } from "react";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TShippingMethodNames, orderSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCheckout } from "@/context/CheckoutContext";
import { numberToEUR } from "@/lib/utils";
interface Props {
  //   onSubmit: (d: CheckoutField) => void;
}
export const formSchema = z.object({
  email: z.string().email(),
  userName: z.string(),
  phoneNumber: z.union([z.number(), z.string()]),
  country: z.union([
    z.literal("Netherlands"),
    z.literal("Luxembourg"),
    z.literal("Germany"),
    z.literal("France"),
    z.literal("Belgium"),
  ]),
  telegram: z.string(),
  city: z.string(),
  delivery: z.discriminatedUnion("shippingMethod", [
    z.object({
      shippingMethod: z.literal("PNL"),
      price: z.number().default(6),
      postcode: z.union([z.number(), z.string()]),
      street: z.string(),
      apartment: z.union([z.number(), z.string()]),
      house: z.union([z.number(), z.string()]),
    }),
    z.object({
      shippingMethod: z.literal("COUNTRY"),
      price: z.number().default(8),
      postcode: z.union([z.number(), z.string()]),
      street: z.string(),
      apartment: z.union([z.number(), z.string()]),
      house: z.union([z.number(), z.string()]),
    }),
    z.object({ shippingMethod: z.literal("HAND"), price: z.literal(0).default(0) }),
  ]),
});

export type CheckoutField = z.infer<typeof formSchema>;

export const CheckoutForm: FC<Props> = () => {
  const { onChangeShippingMethod, createOrder, shippingName, isLoading } = useCheckout();
  const form = useForm<CheckoutField>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "Netherlands",
      delivery: {
        shippingMethod: "PNL",
      },
    },
  });

  function onSubmit(values: CheckoutField) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    createOrder(values);
    // register(payload);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input placeholder="Введите свое имя" {...field} />
                </FormControl>
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="Введите email" {...field} />
                </FormControl>
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Номер телефона</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Введите номер телефона" {...field} />
                </FormControl>
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Страна</FormLabel>
                <Select defaultValue={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите страну" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Страна</SelectLabel>
                      <SelectItem value="Netherlands">Netherlands</SelectItem>
                      <SelectItem value="Luxembourg">Luxembourg</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="Belgium">Belgium</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* <FormControl>
                          <Input type="password" placeholder="Введите пароль" {...field} />
                        </FormControl> */}
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Город</FormLabel>

                <FormControl>
                  <Input type="text" placeholder="Введите название города" {...field} />
                </FormControl>
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="delivery.shippingMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Метод доставки</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={(value) => {
                    field.onChange(value);
                    onChangeShippingMethod(value as TShippingMethodNames);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите метод доставки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Метод доставки</SelectLabel>
                      <SelectItem value="COUNTRY">
                        Доставка в другие страны {numberToEUR(8)}
                      </SelectItem>
                      <SelectItem value="PNL">Доставка PostNL {numberToEUR(5)}</SelectItem>
                      <SelectItem value="HAND">Самовывоз {numberToEUR(0)}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* <FormControl>
                          <Input type="password" placeholder="Введите пароль" {...field} />
                        </FormControl> */}
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          {shippingName === "PNL" || shippingName === "COUNTRY" ? (
            <div className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="delivery.postcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Почтовый индекс</FormLabel>

                    <FormControl>
                      <Input type="text" placeholder="Введите почтовый индекс" {...field} />
                    </FormControl>
                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="delivery.street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Название улицы</FormLabel>

                    <FormControl>
                      <Input type="text" placeholder="Введите название улицы" {...field} />
                    </FormControl>
                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2 justify-between">
                <FormField
                  control={form.control}
                  name="delivery.house"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Дом</FormLabel>

                      <FormControl>
                        <Input
                          className="w-full"
                          type="text"
                          placeholder="Введите номер дома"
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
                  name="delivery.apartment"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Квартира</FormLabel>

                      <FormControl>
                        <Input type="text" placeholder="Введите номер квартиры" {...field} />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ) : shippingName === "HAND" ? (
            <div>
              <div>
                <span className="text-red-500">Важно</span>
              </div>
              <div>
                <span>Самовывоз только в городах Maastricht (Netherlands) & Kiel (Germany)</span>
              </div>
              <div>
                <span>Место выдачи можно узнать у администратора телеграмм канала</span>
              </div>
            </div>
          ) : null}

          <FormField
            control={form.control}
            name="telegram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телеграм</FormLabel>

                <FormControl>
                  <Input type="text" placeholder="@username" {...field} />
                </FormControl>
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          {/* {isLoading} */}
          <Button className="w-full" type="submit">
            {isLoading ? (
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 animate-spin"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fillRule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
                <span>loading</span>
              </div>
            ) : (
              <span>Оформить заказ</span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

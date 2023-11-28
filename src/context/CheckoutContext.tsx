"use client";
import { db } from "@/lib/firebase.config";
import { TOrderType, TPromo, TShippingMethodNames, orderSchema, promoSchema } from "@/lib/schema";
import { Timestamp, collection, getDocs, query, where } from "firebase/firestore";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useCart } from "./CartContext";
import { CheckoutField } from "@/components/pages/checkout/CheckoutForm";
import { v1, v3, v4, v5 } from "uuid";
import { addDocument, getDocument } from "@/hooks/firebase.utils";
import { useAuth } from "./Authorization";
import { ZodError } from "zod";
import { useRouter } from "next/navigation";

type TCheckoutContext = {
  promo: TPromo | null;
  isActivePromo: boolean;
  shippingName: TShippingMethodNames;
  shippingPrice: number;
  promoPrice: number;
  isLoading: boolean;
  isFreeShipping: TShippingFree;
  checkValidPromo: (text: string) => void;
  createOrder: (values: CheckoutField) => void;
  onChangeShippingMethod: (t: TShippingMethodNames) => void;
};
const CheckoutContext = createContext({} as TCheckoutContext);

export const useCheckout = () => useContext(CheckoutContext);
type TShippingFree =
  | null
  | "При заказе от 100 EUR доставка по нидерландам бесплатная"
  | "При заказе от 150 EUR доставка в другие страны бесплатная";
export const CheckoutContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [promo, setPromo] = useState<TPromo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { totalPrice, cart, reset } = useCart();
  const [isFreeShipping, setIsFreeShipping] = useState<TShippingFree>(null);
  const { push } = useRouter();
  // const [promoPrice, setPromoPrice] = useState<number>(0);
  const [isActivePromo, setIsActivePromo] = useState<boolean>(false);
  const [shippingName, setShippingName] = useState<TShippingMethodNames>("PNL");
  const { user } = useAuth();
  const checkValidPromo = async (name: string) => {
    // const validPromo = promoSchema.parse(props);
    try {
      const q = query(collection(db, "promo"), where("name", "==", name));
      const isExist = await getDocs(q);
      if (isExist.size > 0) {
        const vp = promoSchema.parse(isExist.docs[0].data());
        setPromo(vp);
        setIsActivePromo(true);
        toast.success("Промокод успешно активирован");
      } else {
        setIsActivePromo(false);
        toast.error("Такого промокода не существует");
      }
    } catch (error) {
      console.log("error when check valid promo");
    }
  };

  const shippingPrice: number = useMemo(() => {
    const d: Record<TShippingMethodNames, number> = {
      COUNTRY: 8,
      HAND: 0,
      PNL: 5,
    };
    if (totalPrice >= 100 && shippingName === "PNL") {
      setIsFreeShipping("При заказе от 100 EUR доставка по нидерландам бесплатная");
      return 0;
    } else if (totalPrice >= 150 && shippingName === "COUNTRY") {
      setIsFreeShipping("При заказе от 150 EUR доставка в другие страны бесплатная");
      return 0;
    } else {
      setIsFreeShipping(null);
    }
    return d[shippingName];
  }, [shippingName, totalPrice]);

  const promoPrice: number = useMemo(() => {
    if (isActivePromo && promo) {
      const p = totalPrice + shippingPrice;
      return Math.floor(p - p * (+promo?.discount / 100));
    } else return 0;
  }, [promo, isActivePromo]);

  function generateRandomNumber(length: number) {
    let result = "";
    const characters = "0123456789";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  const generateId = async () => {
    while (true) {
      const id = generateRandomNumber(6);
      const q = query(collection(db, "orders"), where("orderId", "==", id));
      const isExist = await getDocs(q);
      if (isExist.size === 0) {
        return id;
      }
      // const isExist = getDocument();
    }
  };

  const createOrder = async (values: CheckoutField) => {
    setIsLoading(true);
    // const data: TOrderType = {
    //   ...values,
    //   id: v4()
    // }
    try {
      const id = await generateId();
      const products: any = cart.map((el) => {
        return {
          discount: el.product.discount,
          discountPrice: el.product.discountPrice,
          title: el.product.title,
          id: el.product.id,
          img: el.product.img,
          price: el.product.price,
          quantity: el.quantity,
          totalPriceForProduct: el.product.discount
            ? Math.floor(el.quantity * el.product.discountPrice)
            : Math.floor(el.quantity * el.product.price),
        };
      });
      const data: TOrderType = {
        ...values,
        id,
        createdAt: new Date(),
        promo:
          isActivePromo && promo
            ? {
                isActive: true,
                name: promo.name,
                priceWithoutPromo: totalPrice + shippingPrice,
                discount: +promo.discount,
              }
            : {
                isActive: false,
              },
        customerId: (user && user.uid) || null,
        status: "на проверке",
        products: products,
        totalPrice: isActivePromo ? promoPrice : totalPrice + shippingPrice,
      };
      // console.log("isValidOrder", data);
      const isValidOrder = orderSchema.parse(data);
      const d = await addDocument("orders", isValidOrder);
      // console.log("end number of order", id);

      push(`/thank-you?order=${id}`);
    } catch (error) {
      // console.log(error!.message[0], error.issues);
      if (error instanceof ZodError) {
        toast.error(error.issues[0].message);
      } else {
        console.log("something went wrong when ordering", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeShippingMethod = (t: TShippingMethodNames) => {
    setShippingName(t);
  };
  return (
    <CheckoutContext.Provider
      value={{
        promo,
        shippingName,
        shippingPrice,
        isActivePromo,
        checkValidPromo,
        promoPrice,
        onChangeShippingMethod,
        createOrder,
        isLoading,
        isFreeShipping,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

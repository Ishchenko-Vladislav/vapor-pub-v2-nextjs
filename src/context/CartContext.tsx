import { TProduct } from "@/lib/schema";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import toast from "react-hot-toast";

type CartContextT = {
  cart: CartType[];
  totalPrice: number;
  increaseCartQuantity: (id: string, product: TProduct) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  getItemQuantity: (id: string) => number;
  reset: () => void;
};
type Props = {};
export type CartType = {
  id: string;
  product: TProduct;
  quantity: number;
};

const CartContext = createContext({} as CartContextT);
export function useCart() {
  return useContext(CartContext);
}
export const CartContextProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
  const [cart, setCart] = useState<CartType[]>(() => {
    if (typeof window === "undefined") return [];
    if (localStorage) {
      const c = JSON.parse(localStorage.getItem("cart") ?? "[]");
      return c;
    }
    return [];
  });

  const increaseCartQuantity = (id: string, product: TProduct) => {
    if (!product.status) return;
    const items = [...cart];
    if (items.find((item) => item.id === id) == null) {
      setCart([...cart, { id, quantity: 1, product }]);
      toast.success("Товар добавлен в корзину", {});
    } else {
      const res = items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(res);
    }
  };
  const decreaseCartQuantity = (id: string) => {
    const items = [...cart];
    if (items.find((item) => item.id === id)?.quantity == 1) {
      //   setCart(items.filter((item) => item.id !== id));
    } else {
      const res = items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(res);
    }
  };
  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (localStorage) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    return () => {};
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, cur) => {
      const { discount, discountPrice, price } = cur.product;
      const res = discount ? (acc += discountPrice * cur.quantity) : (acc += price * cur.quantity);
      return res;
    }, 0);
  }, [cart]);

  const getItemQuantity = (id: string) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const reset = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        decreaseCartQuantity,
        increaseCartQuantity,
        removeFromCart,
        getItemQuantity,
        reset,
        totalPrice,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

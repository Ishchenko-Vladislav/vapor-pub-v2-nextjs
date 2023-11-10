import { TProduct, productSchema } from "@/lib/schema";
import { addDocument } from "../firebase.utils";
import { v4 as uuidv4 } from "uuid";
export const useCreateProduct = () => {
  const add = async (createProductDTO: Partial<TProduct>) => {
    try {
      const payload = {
        ...createProductDTO,
        id: uuidv4(),
      };
      const validPayload = productSchema.parse(payload);
      const product = await addDocument("products", validPayload);
      return product;
    } catch (error) {
      console.log("error when create product", error);
    }
  };

  return { add };
};

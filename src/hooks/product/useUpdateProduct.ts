import { TProduct, productSchema } from "@/lib/schema";
import { addDocument, updateDocument } from "../firebase.utils";
import { v4 as uuidv4 } from "uuid";
export const useUpdateProduct = () => {
  const update = async (updateProductDTO: Partial<TProduct>, id: string) => {
    try {
      const payload = {
        ...updateProductDTO,
      };
      const validPayload = productSchema.partial().parse(payload);
      const product = await updateDocument("products", id, validPayload);
      return product;
    } catch (error) {
      console.log("error when create product", error);
    }
  };

  return { update };
};

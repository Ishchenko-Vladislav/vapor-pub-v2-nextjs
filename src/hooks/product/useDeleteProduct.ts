import { TProduct, productSchema } from "@/lib/schema";
import { addDocument, deleteDocument, updateDocument } from "../firebase.utils";
import { v4 as uuidv4 } from "uuid";
import { deleteFile } from "../file/utils";
import { ProductRef } from "./useGetAllProducts";
export const useDeleteProduct = () => {
  const deleteProduct = async (productRef: ProductRef) => {
    try {
      if (productRef.product.img) {
        await deleteFile(productRef.product.img.path);
      }
      await deleteDocument("products", productRef.id);
    } catch (error) {
      console.log("error when delete product", error);
    }
  };

  return { deleteProduct };
};

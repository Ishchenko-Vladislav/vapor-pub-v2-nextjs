import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const getMessageFromError = (error: any) => {
//   return error.response && error.response.data.message
//     ? typeof error.response.data.message === "object"
//       ? error.response.data.message[0]
//       : error.response.data.message
//     : typeof error.response === "object"
//     ? "message" in error.response && error.response.message
//     : "something went wrong";
// };
// const message =
export const getMessageFromError = (error: any) => {
  if (error.response && error.response.data && error.response.data.message) {
    if (typeof error.response.data.message === "object") {
      return error.response.data.message[0];
    } else {
      return error.response.data.message;
    }
  } else if (error.response && error.response.message) {
    if (typeof error.response.message === "object") {
      return error.response.message[0];
    } else {
      return error.response.message;
    }
  } else {
    return "Something went wrong";
  }
};

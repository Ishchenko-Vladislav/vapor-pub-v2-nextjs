import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getApp, getApps, initializeApp, FirebaseError } from "firebase/app";

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
export const getMessageFromFirebaseError = (error: FirebaseError) => {
  return error.message;
};

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
  } else if (error.message) {
    if (typeof error.message === "object") {
      return error.message[0];
    } else {
      return error.message;
    }
  } else {
    return "Something went wrong";
  }
};

export const numberToEUR = (number: number) =>
  Intl.NumberFormat("nl", { style: "currency", currency: "EUR" }).format(number);

export function formatCustomDate(dateD: any) {
  const date = new Date(dateD);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day} ${month} ${year} ${hours}:${minutes}`;
}

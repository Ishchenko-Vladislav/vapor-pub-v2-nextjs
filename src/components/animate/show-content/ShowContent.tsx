"use client";
import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";
interface Props {}

export const ShowContent: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          y: "100%",
        },
        animate: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.5,
      }}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        // amount: 0,
        margin: "300px",
      }}
    >
      {children}
    </motion.div>
  );
};

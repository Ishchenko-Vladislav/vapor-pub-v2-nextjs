"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
import { images } from "./data";
import { BiChevronLeft } from "react-icons/bi";

const wrap = (length: number, cur: number, dir: number) => {
  console.log(Math.abs((cur + dir) % length));
  const s = (cur + dir) % length;
  //   console.log("s", s);
  if (s < 0) return length - 1;

  //   if (cur === 0) return length - 1;
  //   if (cur === length - 1) return 0;
  return s;
  // const s =
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [imageIndex, setImageIndex] = useState(0);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  //   const imageIndex = wrap(0, images.length, page);
  //   const imageIndex = 0;
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setImageIndex((prev) => {
      const s = prev + newDirection;
      if (s < 0) return images.length - 1;
      if (s > images.length - 1) return 0;
      return s;
    });
  };

  const index = React.useMemo(() => wrap(images.length, page, direction), [page]);
  return (
    <div className="relative w-full flex items-center aspect-video rounded-xl overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          src={images[imageIndex]}
          transition={{
            x: { type: "linear", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute w-full h-full  rounded-xl"
        />
      </AnimatePresence>
      <button
        onClick={() => paginate(-1)}
        className="w-10 h-10 z-10 rounded-full select-none bg-white absolute top-1/2 -translate-y-1/2 left-2 flex justify-center items-center"
      >
        <BiChevronLeft />
      </button>
      <button
        onClick={() => paginate(1)}
        className="w-10 h-10 z-10 rotate-180 rounded-full select-none bg-white absolute top-1/2 -translate-y-1/2 right-2 flex justify-center items-center"
      >
        <BiChevronLeft />
      </button>
    </div>
  );
  //   return (
  //     <>
  //       <AnimatePresence initial={false} custom={direction}>
  //         <motion.img
  //           key={page}
  //           src={images[imageIndex]}
  //           custom={direction}
  //           variants={variants}
  //           className="w-full h-full object-cover"
  //           initial="enter"
  //           animate="center"
  //           exit="exit"
  //           transition={{
  //             x: { type: "spring", stiffness: 300, damping: 30 },
  //             opacity: { duration: 0.2 },
  //           }}
  //           drag="x"
  //           dragConstraints={{ left: 0, right: 0 }}
  //           dragElastic={1}
  //           onDragEnd={(e, { offset, velocity }) => {
  //             const swipe = swipePower(offset.x, velocity.x);

  //             if (swipe < -swipeConfidenceThreshold) {
  //               paginate(1);
  //             } else if (swipe > swipeConfidenceThreshold) {
  //               paginate(-1);
  //             }
  //           }}
  //         />
  //       </AnimatePresence>
  //       <div className="next" onClick={() => paginate(1)}>
  //         {"‣"}
  //       </div>
  //       <div className="prev" onClick={() => paginate(-1)}>
  //         {"‣"}
  //       </div>
  //     </>
  //   );
};

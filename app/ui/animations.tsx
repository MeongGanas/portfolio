"use client";
import { ReactNode, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export function CharReveal({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ translateY: "0.25em", opacity: 0 }}
      whileInView={{ translateY: "0em", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
      whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
}

export function Shape() {
  const [color, setColor] = useState(
    "#" + ((Math.random() * 0xffffff) << 0).toString(16)
  );
  const [top, setTop] = useState(Math.floor(Math.random() * 75));
  const [right, setRight] = useState(Math.floor(Math.random() * 75));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTop(Math.floor(Math.random() * 75));
      setRight(Math.floor(Math.random() * 75));
    }, 2000);
    return () => clearInterval(intervalId);
  });

  return (
    <motion.div
      style={{
        width: 200,
        height: 200,
        borderRadius: 9999,
        top: `${top}%`,
        right: `${right}%`,
        position: "absolute",
        backgroundColor: color,
        cursor: "grab",
        zIndex: 1,
      }}
      animate={{ top: `${top}%`, right: `${right}%` }}
      transition={{ duration: 1 }}
      dragConstraints={{
        top: -400,
        right: 400,
        bottom: 200,
        left: -400,
      }}
      drag
      whileHover={{ scale: 1.1 }}
      whileDrag={{ cursor: "drag" }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
    ></motion.div>
  );
}

export function RevealContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ translateY: "1em", opacity: 0 }}
      whileInView={{ translateY: "0em", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function CardReveal({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ translateY: "1em", opacity: 0 }}
      whileInView={{ translateY: "0em", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}

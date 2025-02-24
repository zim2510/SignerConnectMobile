import { useRef } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ onClose, position = "center", children }) {
  const modalRef = useRef();

  let modalCssClasses = "";
  let initialModtion = {};
  let animateMotion = {};
  let exitMotion = {};

  if (position == "left") {
    modalCssClasses = "ml-0 min-h-full w-full md:w-3/12";
    initialModtion = {
      opacity: 0,
      x: -30,
      transition: { type: "spring", duration: 0.3 },
    };
    animateMotion = {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 0.3 },
    };
    exitMotion = {
      opacity: 0,
      x: -30,
      transition: { type: "spring", duration: 0.3 },
    };
  }

  if (position == "bottom") {
    modalCssClasses = "mb-0 min-w-full h-1/3 md:w-3/12";
    initialModtion = { opacity: 0, y: 30, transition: { duration: 0.3 } };
    animateMotion = { opacity: 1, y: 0, transition: { duration: 0.3 } };
    exitMotion = { opacity: 0, y: 30, transition: { duration: 0.3 } };
  }

  useEffect(() => {
    modalRef.current.showModal();
  }, []);

  return createPortal(
    <motion.dialog
      initial={initialModtion}
      animate={animateMotion}
      exit={exitMotion}
      className={modalCssClasses}
      ref={modalRef}
      onClose={onClose}
      onClick={(e) => {
        e.target == modalRef.current && onClose();
      }}
    >
      <div className="w-full h-full">{children}</div>
    </motion.dialog>,
    document.querySelector("#modal")
  );
}

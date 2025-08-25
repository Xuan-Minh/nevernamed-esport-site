import React from "react";
import { motion } from "framer-motion";
import arrowSvg from "../assets/arrow.svg"; 

function Button({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        group font-unbounded bg-transparent border-2 border-white rounded-full flex items-center gap-2
        px-4 py-2 text-base
        sm:px-6 sm:py-3 sm:text-lg
        md:px-8 md:py-4 md:text-xl
        hover:bg-white/10 transition-colors duration-300
        ${className}
      `}
    >
      {children}
      <img
        src={arrowSvg}
        alt="Arrow Icon"
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </motion.button>
  );
}
export default Button;
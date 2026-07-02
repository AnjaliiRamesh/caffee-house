"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "gold" | "outline";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-brown text-cream hover:bg-coffee-brown shadow-soft hover:shadow-soft-lg",
  gold: "bg-accent-gold text-primary-brown hover:bg-[#d4aa72] shadow-soft hover:shadow-soft-lg",
  outline:
    "border-2 border-primary-brown/20 text-primary-brown hover:border-primary-brown hover:bg-primary-brown/5",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

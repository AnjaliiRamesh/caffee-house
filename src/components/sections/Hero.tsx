"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-background pt-28 pb-16 md:pt-32 lg:pb-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <motion.div
          style={{ opacity: contentOpacity }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col justify-center lg:pr-8"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-accent-gold"
          >
            — Made with Passion —
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-serif text-4xl leading-[1.15] text-primary-brown text-balance sm:text-5xl lg:text-[3.5rem] xl:text-6xl"
          >
            Every cup crafted to perfection.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 max-w-md text-base leading-relaxed text-coffee-brown/80 sm:text-lg"
          >
            We source the finest beans and roast them to bring out the richest
            flavors in every cup. Every sip is handcrafted with care and passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-10"
          >
            <Button variant="primary">Learn More</Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[420px] sm:h-[480px] lg:h-[600px] xl:h-[680px]"
        >
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="relative h-full w-full overflow-hidden rounded-[20px] shadow-soft-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1760175445000-0e01e193d1cd?q=80&w=1170&auto=format&fit=crop"
              alt="Premium latte art in a ceramic mug with roasted coffee beans on a wooden table"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <div
            className="pointer-events-none absolute inset-y-0 -left-1 w-1/3 rounded-l-[20px] bg-gradient-to-r from-background via-background/80 to-transparent lg:w-2/5"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}

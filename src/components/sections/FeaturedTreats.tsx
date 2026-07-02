"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CoffeeLeaf from "@/components/ui/CoffeeLeaf";
import { TREATS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function FeaturedTreats() {
  return (
    <AnimatedSection
      id="menu"
      className="bg-background-alt py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-gold">
            — More Than Coffee —
          </span>

          <div className="mt-6 flex items-center justify-center gap-4 md:gap-8">
            <CoffeeLeaf className="hidden h-16 w-10 text-accent-gold/60 sm:block md:h-20 md:w-12" />
            <h2 className="font-serif text-3xl leading-tight text-primary-brown text-balance sm:text-4xl lg:text-5xl">
              Delicious treats to complete your experience
            </h2>
            <CoffeeLeaf
              flip
              className="hidden h-16 w-10 text-accent-gold/60 sm:block md:h-20 md:w-12"
            />
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TREATS.map((treat) => (
            <motion.article
              key={treat.name}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group overflow-hidden rounded-[20px] bg-white shadow-soft transition-shadow duration-500 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={treat.image}
                  alt={treat.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-primary-brown">
                  {treat.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-coffee-brown/70">
                  {treat.description}
                </p>
                <p className="mt-4 font-serif text-xl text-accent-gold">{treat.price}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

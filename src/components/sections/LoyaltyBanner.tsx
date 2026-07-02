"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Gift, Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { LOYALTY_FEATURES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap = {
  coffee: Coffee,
  gift: Gift,
  star: Star,
} as const;

export default function LoyaltyBanner() {
  return (
    <AnimatedSection className="px-6 py-16 md:px-8 md:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[20px]">
        <Image
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=90&auto=format&fit=crop"
          alt="Dark wooden coffee table with scattered coffee beans"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-brown/88" aria-hidden="true" />

        <div className="relative grid gap-12 px-8 py-16 md:grid-cols-2 md:items-center md:gap-8 md:px-16 md:py-20 lg:px-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-gold">
              Join Our Coffee Family
            </span>
            <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl lg:text-5xl">
              Brew more benefits.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-cream/75">
              Join our loyalty program and enjoy exclusive rewards, offers and more.
            </p>
            <div className="mt-8">
              <Button variant="gold">Join Now</Button>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-3"
          >
            {LOYALTY_FEATURES.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className={`flex flex-col items-center text-center sm:items-start sm:text-left ${
                    index > 0 ? "sm:border-l sm:border-cream/15 sm:pl-8" : ""
                  }`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20">
                    <Icon className="h-5 w-5 text-accent-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-cream">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AnimatedSection className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-gold">
            — What Our Customers Say —
          </span>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="hidden gap-8 md:grid md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>

          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard testimonial={TESTIMONIALS[activeIndex]} index={activeIndex} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex justify-center gap-2.5 md:hidden">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-primary-brown"
                    : "w-2 bg-primary-brown/25 hover:bg-primary-brown/40"
                }`}
              />
            ))}
          </div>

          <div className="mt-10 hidden justify-center gap-2.5 md:flex">
            {TESTIMONIALS.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full ${
                  index === 0 ? "w-8 bg-primary-brown" : "w-2 bg-primary-brown/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="rounded-[20px] bg-white p-8 shadow-soft transition-shadow duration-500 hover:shadow-card-hover"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            loading="lazy"
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-primary-brown">
            {testimonial.name}
          </p>
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-accent-gold text-accent-gold"
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="mt-6 font-serif text-lg leading-relaxed text-coffee-brown/80">
        &ldquo;{testimonial.review}&rdquo;
      </blockquote>
    </motion.article>
  );
}

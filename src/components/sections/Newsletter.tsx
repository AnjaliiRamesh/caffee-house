"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TikTokIcon,
} from "@/components/ui/SocialIcons";
import { SOCIAL_LINKS } from "@/lib/constants";

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  pinterest: PinterestIcon,
  tiktok: TikTokIcon,
} as const;

export default function Newsletter() {
  return (
    <AnimatedSection className="px-6 pb-24 md:px-8 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[20px] bg-background-alt px-8 py-12 shadow-soft md:px-12 md:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
            <div>
              <h2 className="font-serif text-2xl text-primary-brown sm:text-3xl">
                Stay in the loop
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-coffee-brown/70">
                Subscribe to our newsletter for exclusive offers, new menu items,
                and coffee culture stories.
              </p>
            </div>

            <div className="hidden h-16 w-px bg-primary-brown/10 lg:block" aria-hidden="true" />

            <form
              className="flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-end"
              onSubmit={(e) => e.preventDefault()}
            >
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full rounded-full border border-primary-brown/10 bg-white px-6 py-3.5 text-sm text-primary-brown placeholder:text-coffee-brown/40 shadow-soft outline-none transition-all duration-300 focus:border-accent-gold/50 focus:ring-2 focus:ring-accent-gold/20 sm:max-w-xs"
              />
              <Button variant="primary" type="submit" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-primary-brown/8 pt-10 sm:flex-row sm:items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee-brown/60">
              Follow Us
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-brown/10 bg-white text-primary-brown shadow-soft transition-colors hover:border-accent-gold/40 hover:text-accent-gold"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

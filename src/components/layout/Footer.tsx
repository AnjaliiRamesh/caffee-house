import Image from "next/image";
import Logo from "@/components/ui/Logo";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-primary-brown text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Crafting exceptional coffee experiences since 2010.
            </p>
          </div>

          <FooterColumn title="Quick Links" links={FOOTER_LINKS.quickLinks} />
          <FooterColumn title="Our Menu" links={FOOTER_LINKS.menu} />
          <FooterColumn id="about" title="About Us" links={FOOTER_LINKS.about} />

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-cream/90">
              Opening Hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/65" id="locations">
              <li>
                <span className="block font-medium text-cream/80">Mon – Fri</span>
                7:00 AM – 8:00 PM
              </li>
              <li>
                <span className="block font-medium text-cream/80">Sat – Sun</span>
                8:00 AM – 9:00 PM
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-xs uppercase tracking-wider text-cream/50 transition-colors hover:text-accent-gold"
                >
                  {social.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/45">
            &copy; {new Date().getFullYear()} Coffee House. All rights reserved.
          </p>
          <p className="text-xs text-cream/45">
            Designed with passion for coffee lovers everywhere.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-8 -right-4 h-48 w-48 opacity-20 md:h-64 md:w-64">
        <Image
          src="https://images.unsplash.com/photo-1559056199-641a0ac259b6?w=400&q=80&auto=format&fit=crop"
          alt=""
          fill
          loading="lazy"
          sizes="256px"
          className="object-cover"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  id,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
  id?: string;
}) {
  return (
    <div id={id}>
      <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-cream/90">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-cream/60 transition-colors duration-300 hover:text-accent-gold"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

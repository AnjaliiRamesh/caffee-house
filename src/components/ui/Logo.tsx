interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", showText = true, light = false }: LogoProps) {
  const color = light ? "#FFF9F5" : "#3A2418";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
      >
        <ellipse cx="14" cy="22" rx="6" ry="9" fill={color} transform="rotate(-25 14 22)" />
        <ellipse cx="26" cy="22" rx="6" ry="9" fill={color} transform="rotate(25 26 22)" />
        <ellipse cx="20" cy="14" rx="5" ry="8" fill={color} />
      </svg>
      {showText && (
        <span
          className={`font-serif text-lg font-medium tracking-[0.2em] uppercase ${
            light ? "text-cream" : "text-primary-brown"
          }`}
        >
          Coffee House
        </span>
      )}
    </div>
  );
}

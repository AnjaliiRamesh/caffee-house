interface CoffeeLeafProps {
  className?: string;
  flip?: boolean;
}

export default function CoffeeLeaf({ className = "", flip = false }: CoffeeLeafProps) {
  return (
    <svg
      viewBox="0 0 48 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${flip ? "scale-x-[-1]" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M24 4C24 4 8 20 8 40C8 56 14 68 24 76C34 68 40 56 40 40C40 20 24 4 24 4Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M24 12V72"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <path
        d="M24 20C18 24 14 30 12 38"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.3"
      />
      <path
        d="M24 28C30 32 34 38 36 46"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.3"
      />
      <path
        d="M24 36C18 40 14 46 13 54"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.3"
      />
      <path
        d="M24 44C30 48 34 54 35 62"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.3"
      />
    </svg>
  );
}

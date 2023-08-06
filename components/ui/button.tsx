import clsx from "clsx";
import { ReactNode } from "react";

export enum size {
  sm = "sm",
  md = "md",
  lg = "lg"
}

export enum variant {
    danger = 'danger',
    primary = 'primary'
}

interface props {
  children: ReactNode;
  className?: String;
  size: size;
  variant: variant
}

function Button({ children, className, size, variant }: props) {
  return (
    <button
      className={clsx(
        className,
        'border rounded-xl hover:brightness-90 transition-all',
        {
          sm: "py-1 px-2 text-sm",
          md: "",
          lg: "text-3xl py-3 px-4",
        }[size],
        {
            danger: 'bg-red-600',
            primary: 'bg-blue-500'
        }[variant]
      )}
    >
      {children}
    </button>
  );
}

export default Button;

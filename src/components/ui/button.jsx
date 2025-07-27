// components/ui/button.jsx
import * as React from "react";
import clsx from "clsx";

const Button = React.forwardRef(
  (
    {
      className = "",
      type = "button",
      variant = "primary",
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary:
        "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
      accent:
        "bg-fuchsia-600 text-white hover:bg-fuchsia-700 focus:ring-fuchsia-500",
      outline:
        "border border-white text-white hover:bg-white hover:text-purple-700",
      danger:
        "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      gradient:
        "bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 text-white hover:from-purple-700 hover:to-fuchsia-600 focus:ring-fuchsia-500 shadow-lg",
      glass:
        "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 focus:ring-white",
    };

    return (
      <button
        type={type}
        ref={ref}
        className={clsx(base, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
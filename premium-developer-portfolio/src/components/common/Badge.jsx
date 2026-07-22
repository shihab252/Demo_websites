import clsx from "clsx";

const Badge = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary:
      "bg-blue-100 text-blue-700",

    secondary:
      "bg-slate-100 text-slate-700",

    success:
      "bg-green-100 text-green-700",

    warning:
      "bg-amber-100 text-amber-700",

    danger:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
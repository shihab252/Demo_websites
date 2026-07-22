import clsx from "clsx";

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "md",
}) => {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={clsx(
        "rounded-3xl border border-slate-200 bg-white transition-all duration-300",
        paddings[padding],
        hover &&
          "hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = "center",
}) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={`mb-16 flex flex-col ${alignment[align]}`}
    >
      {badge && (
        <span className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
          {badge}
        </span>
      )}

      <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-[2px] w-8 bg-signal" aria-hidden="true" />
        <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-prose text-muted">{description}</p>
      )}
    </div>
  );
}

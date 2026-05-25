import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {badge && (
        <span className="mb-4 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function SectionHeader({ title, description, children }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex items-start justify-between gap-4">
      <div>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
        {description && <p className="text-muted-foreground mt-1 text-sm font-sans">{description}</p>}
      </div>
      {children && <div className="flex-shrink-0">{children}</div>}
    </div>
  );
}

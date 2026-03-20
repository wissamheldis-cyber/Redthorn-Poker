export function PageContainer({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`max-w-[1280px] w-full mx-auto p-8 md:p-12 ${className}`}>
      {children}
    </div>
  );
}

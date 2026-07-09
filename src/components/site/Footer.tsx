export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-[13px] text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Dr. Aayush Soni · Orthopaedic Surgeon, Bhopal</p>
        <p className="tracking-tight">Designed for clarity, care and recovery.</p>
      </div>
    </footer>
  );
}

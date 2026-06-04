export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Dr. Aayush Soni · Orthopaedic Surgeon</p>
        <p>Designed for clarity, care and recovery.</p>
      </div>
    </footer>
  );
}

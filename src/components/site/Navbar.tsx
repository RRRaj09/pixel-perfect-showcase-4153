import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ravector-wordmark-white.png.asset.json";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-navy/95 backdrop-blur-md border-b border-navy-border"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="section-shell flex h-16 items-center justify-between md:h-20"
      >
        <a href="#top" className="flex items-center" aria-label="RAVECTOR home">
          <img src={logo.url} alt="RAVECTOR" className="h-7 w-auto md:h-8" />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-navy-muted hover:text-navy-foreground text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground hover:opacity-90 rounded-md px-4 py-2 text-sm font-medium transition-opacity"
          >
            Let's Talk
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-navy-foreground md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-navy-border bg-navy border-t md:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-navy-muted hover:text-navy-foreground py-2.5 text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground mt-3 rounded-md px-4 py-2.5 text-center text-sm font-medium"
            >
              Let's Talk
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

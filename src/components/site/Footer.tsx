import { Instagram, Linkedin, Twitter } from "lucide-react";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ravector", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/ravector", Icon: Instagram },
  { label: "Twitter / X", href: "https://x.com/ravector", Icon: Twitter },
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground border-navy-border border-t">
      <div className="section-shell flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em]">RAVECTOR</p>
          <p className="text-navy-muted mt-3 text-sm">
            Cloud. Data. AI. Software Engineering.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-navy-muted hover:text-navy-foreground text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-navy-border border-t">
        <div className="section-shell text-navy-muted py-6 text-xs">
          © 2026 RAVECTOR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

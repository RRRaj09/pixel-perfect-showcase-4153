import { Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/ravector-logo-white.png.asset.json";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ravector/posts/?feedView=all", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/ravector", Icon: Instagram },
  { label: "Twitter / X", href: "https://x.com/ravector", Icon: Twitter },
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground border-navy-border border-t">
      <div className="section-shell flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <img
            src={logo.url}
            alt="RAVECTOR — Cloud. Data. AI."
            className="w-44 md:w-52"
          />
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="text-navy-muted hover:text-navy-foreground border-navy-border hover:border-navy-foreground/40 flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
              >
                <Icon size={18} strokeWidth={1.8} />
              </a>
            ))}
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
      </div>
      <div className="border-navy-border border-t">
        <div className="section-shell text-navy-muted py-6 text-xs">
          © 2026 RAVECTOR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

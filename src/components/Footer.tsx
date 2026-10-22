import { Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Interactive Labs",
      links: [
        { label: "Component Sandbox", href: "#playground" },
        { label: "WCAG Contrast Lab", href: "#contrast-checker" },
        { label: "Cognitive UX Laws", href: "#ux-laws" },
        { label: "Figma Cheat Sheet", href: "#figma-to-code" },
        { label: "UI/UX IQ Challenge", href: "#quiz" },
      ],
    },
    {
      title: "Curriculum",
      links: [
        { label: "What is UI/UX", href: "#what-is-uiux" },
        { label: "Core Principles", href: "#principles" },
        { label: "Toolkit & Stack", href: "#tools" },
        { label: "6-Stage Process", href: "#process" },
        { label: "Books & Courses", href: "#resources" },
      ],
    },
    {
      title: "Author & Connect",
      links: [
        { label: "Live Portfolio ↗", href: "https://khojayevramzbek-glitch.github.io/portfolio/" },
        { label: "GitHub Profile", href: "https://github.com/khojayevramzbek-glitch" },
        { label: "Telegram Channel", href: "https://t.me/khojayev_ramz" },
        { label: "Twitter / X", href: "https://x.com/RamzbekK36444" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/ramzbek-khojayev-2443ab426/" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-100 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-display text-2xl font-bold tracking-tight">
              UI/UX<span className="text-accent">Hub</span>
            </a>
            <p className="text-slate-400 mt-4 text-sm leading-relaxed">
              Complete Interactive Design &amp; Frontend Engineering Platform. Crafted by <b>Ramzbek Khojayev</b>.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold mb-4 text-slate-200 text-sm tracking-wide">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-slate-400 hover:text-accent transition-colors text-xs font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; 2024&ndash;2026 UI/UX Hub by <b>Ramzbek Khojayev</b>. Open source &amp; production ready.
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> in Khorezm, Uzbekistan 🇺🇿
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

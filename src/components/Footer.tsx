import { Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Learn",
      links: ["What is UI/UX", "Principles", "Tools", "Process"],
    },
    {
      title: "Resources",
      links: ["Books", "Courses", "Websites", "Communities"],
    },
    {
      title: "Connect",
      links: ["Twitter", "LinkedIn", "Dribbble", "GitHub"],
    },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-display text-2xl font-bold">
              UI/UX<span className="text-accent">Guide</span>
            </a>
            <p className="text-primary-foreground/60 mt-4 text-sm leading-relaxed">
              Your comprehensive resource for learning UI/UX design principles, tools, and best practices.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 UI/UX Guide. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for designers & developers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

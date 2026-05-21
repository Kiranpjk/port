import { ArrowUpRight, Briefcase, GitBranch, Mail } from 'lucide-react';

const links = [
  { label: 'GitHub', href: 'https://github.com/Kiranpjk', icon: GitBranch },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Briefcase },
  { label: 'Email', href: 'mailto:contact@example.com', icon: Mail },
];

export function SiteFooter() {
  return (
    <footer className="section pt-10">
      <div className="section-shell px-4">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-border/80 py-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium">Jaya Kiran</p>
            <p className="mt-1 text-sm text-muted-foreground">Building refined web experiences with modern tech.</p>
          </div>
          <div className="flex items-center gap-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-border/80 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

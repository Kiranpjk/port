'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Navbar({ items }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-xl border px-3 py-2 transition-all md:px-4 ${
          scrolled ? 'border-border/80 bg-card/90 shadow-soft backdrop-blur' : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#home" className="text-sm font-bold tracking-[0.18em] text-foreground">
          JK
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href="#contact">Let&apos;s Talk</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="sm" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="mx-auto mt-2 max-w-6xl rounded-xl border border-border/80 bg-card/95 p-3 shadow-soft backdrop-blur md:hidden"
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Let&apos;s Talk
              </a>
            </Button>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

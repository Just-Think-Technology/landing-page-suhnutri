"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { siteContent } from "@/content/site";
import { Logo } from "@/components/layout/logo";
import { SiteCta } from "@/components/layout/site-cta";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,border-color,height] duration-300",
        scrolled
          ? "h-14 border-b border-border bg-white shadow-sm"
          : "h-16 border-b border-transparent bg-white/80",
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#inicio" className={cn("block w-36 shrink-0", scrolled && "w-32")}>
          <Logo priority />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink transition-colors hover:text-brand-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <SiteCta href={siteContent.contact.href}>{siteContent.contact.label}</SiteCta>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-white sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="font-heading text-brand-dark">Menu</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              {siteContent.navigation.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={
                    <a
                      href={item.href}
                      className="rounded-lg px-3 py-3 text-base text-ink hover:bg-surface"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto p-4">
              <SiteCta href={siteContent.contact.href} className="w-full">
                {siteContent.contact.label}
              </SiteCta>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

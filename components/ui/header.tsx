"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`
        z-40 w-full transition-all duration-300
        ${
          isScrolled || !isHomePage
            ? "sticky top-0 shadow-md bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
            : "absolute top-0 bg-transparent border-transparent"
        }
      `}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" className="w-10 h-10" />
          <div className="hidden sm:flex flex-col">
            <span className="font-bold  leading-none text-primary">BFS</span>
            <span className="text-xs text-primary">Healthcare</span>
          </div>
          <nav className="hidden ms-10 md:flex gap-8 items-center">
            <Link
              href="/#Home"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Beranda
            </Link>

            <Link
              href="/#about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Tetang Kami
            </Link>

            <Menu as="div" className="relative">
              <MenuButton className="text-sm hover:cursor-pointer font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                {({ open }) => (
                  <>
                    Solusi
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
                  </>
                )}
              </MenuButton>

              <MenuItems
                transition
                className="absolute top-full left-0 mt-2 w-48 bg-background/90 backdrop-blur-3xl border border-border rounded-lg shadow-lg py-2 focus:outline-none transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
              >
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/products"
                      className={`block px-4 py-2 text-sm border-b border-border backdrop-blur ${
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-foreground"
                      }`}
                    >
                      <span className="font-medium block">Produk Kami</span>
                      <span className="text-xs text-muted-foreground">
                        Nursing, Operating, Emergency, Support
                      </span>
                    </Link>
                  )}
                </MenuItem>
                {/* <MenuItem>
                {({ active }) => (
                  <Link
                    href="/iot-solutions"
                    className={`block px-4 py-2 text-sm backdrop-blur ${
                      active ? "bg-primary/10 text-primary" : "text-foreground"
                    }`}
                  >
                    <span className="font-medium block">IoT Solutions</span>
                    <span className="text-xs text-muted-foreground">
                      Integrated Healthcare IoT Platform
                    </span>
                  </Link>
                )}
              </MenuItem> */}
              </MenuItems>
            </Menu>

            <Link
              href="/#products"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Produk
            </Link>

            <Link
              href="/#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Hubungi Kami
            </Link>
          </nav>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted transition"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {mobileOpen && (
          <div className="md:hidden absolute top-full inset-x-0 z-50 bg-background/95 backdrop-blur border-t border-border shadow-lg">
            <nav className="flex flex-col px-6 py-6 gap-5">
              <Link
                href="#Home"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium"
              >
                Beranda
              </Link>

              <Link
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium"
              >
                Tentang Kami
              </Link>

              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium"
              >
                Solusi
              </Link>

              <Link
                href="#products"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium"
              >
                Produk
              </Link>

              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium"
              >
                Hubungi Kami
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

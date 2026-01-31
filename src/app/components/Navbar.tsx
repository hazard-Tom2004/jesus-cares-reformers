"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
  { name: "Trustees", href: "/trustees" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/favicon.ico"
              alt="JCAREDAM Logo"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading text-lg font-bold text-primary leading-tight">
                JCAREDAM
              </h1>
              <p className="text-xs text-muted-foreground">Reformation Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "text-primary after:w-full" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/donate"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-accent transition-colors duration-200"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-card shadow-lg border-t border-border animate-fade-in">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-left py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "bg-secondary text-primary font-medium"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

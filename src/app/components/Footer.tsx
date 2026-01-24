"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/favicon.ico"
                alt="JCAREDAM Logo"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-heading text-lg font-bold">JCAREDAM</h3>
                <p className="text-sm text-primary-foreground/70">
                  Reformation Center
                </p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Jesus Care Reformation Center for Drug Abuse and Misuse is
              dedicated to restoring hope and rebuilding lives through
              compassionate care and rehabilitation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" },
                { name: "Donate", href: "/donate" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <address className="not-italic text-sm text-primary-foreground/80 space-y-2">
              <p>Behind Firstbank, Ojoo</p>
              <p>Ibadan, Oyo State, Nigeria</p>
              <p className="mt-4">
                <a
                  href="mailto:dositta@yahoo.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  dositta@yahoo.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Jesus Care Reformation Center. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            CAC/IT/NO 180931 • Developed by CodeHaven Tech(Dev Tom)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

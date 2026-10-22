"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, img, waLink } from "@/lib/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo" aria-label="CodeHubb home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="nav-mark"
            src={img("/logo-mark.jpg")}
            alt="MindCrafts AI brain logo"
            width={36}
            height={36}
          />
          Code<span>Hubb</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <ThemeToggle />
          <Link
            className="btn btn-whatsapp btn-sm"
            href={waLink("Hi CodeHubb! I want to start a project.")}
            target="_blank"
            rel="noopener"
          >
            WhatsApp Us
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={isActive(l.href) ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <div style={{ alignSelf: "flex-start", padding: "4px 8px" }}>
          <ThemeToggle />
        </div>
        <Link
          className="btn btn-whatsapp"
          style={{ marginTop: 12 }}
          href={waLink("Hi CodeHubb! I want to start a project.")}
          target="_blank"
          rel="noopener"
        >
          WhatsApp Us
        </Link>
      </nav>
    </header>
  );
}

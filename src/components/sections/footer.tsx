import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-y-6 px-7 py-6 md:px-10">
        {/* Left: Logo + Name + Product By */}
        <div className="flex flex-col items-center md:items-start gap-y-1">
          <div className="flex items-center gap-x-2">
            <Image
              src="/rena-logo.png"
              alt="AapliShala logo"
              width={24}
              height={24}
              className="h-6 w-6"
              priority
            />
            <h2 className="text-lg font-bold text-foreground">{siteConfig.name}</h2>
          </div>

          <div className="flex items-center gap-2">
            {/* planet icon */}
            <svg
              className="w-4 h-4 planet-spin neon-glow"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="g1" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#ec4899" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
                </radialGradient>
              </defs>
              <circle cx="10" cy="12" r="4" fill="url(#g1)" />
              <ellipse cx="10" cy="12" rx="7" ry="2.2" transform="rotate(-20 10 12)" stroke="#f97316" strokeWidth="0.6" opacity="0.9" />
            </svg>

            <p className="text-sm text-muted-foreground">
              a product by{' '}
              <a
                href="https://renasofttech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-text font-semibold"
              >
                Rena Soft Tech
              </a>
            </p>
          </div>
        </div>

        {/* Center: Rights */}
        <div className="text-sm font-medium tracking-tight text-muted-foreground text-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>

  {/* Right: Contact + Email (stacked; left edges aligned under Contact) */}
  <div className="flex flex-col items-center md:items-start gap-y-1">
          <a
            href="https://calendly.com/renasofttech/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-muted-foreground transition-colors duration-150 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
          >
            Contact
          </a>
          <a
            href="mailto:info@aaplishala.com"
            className="text-sm text-muted-foreground/90 tracking-tight transition-colors duration-150 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
          >
            info@aaplishala.com
          </a>
        </div>
      </div>
    </footer>
  );
}

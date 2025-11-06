import Image from "next/image";
import { siteConfig } from "@/lib/config";
import ProductBadge from "@/components/ui/product-badge";

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

          <ProductBadge size="sm" />
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

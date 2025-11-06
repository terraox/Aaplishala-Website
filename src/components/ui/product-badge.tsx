"use client";

import React from "react";
import SpaceCanvas from "@/components/ui/space-canvas";

function ProductSpaceCanvasWrapper({ size }: { size: number }) {
  // convert pixel input to a reasonable canvas size
  const px = Math.max(32, Math.min(96, size * 6));
  return <SpaceCanvas size={px} />;
}

interface ProductBadgeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const ProductBadge: React.FC<ProductBadgeProps> = ({ size = "sm", className = "" }) => {
  const sizes: Record<string, { svg: string; text: string }> = {
    sm: { svg: "w-5 h-5", text: "text-sm" },
    md: { svg: "w-6 h-6", text: "text-sm" },
    lg: { svg: "w-8 h-8", text: "text-base" },
  };

  const s = sizes[size];

  return (
    <div className={`product-badge inline-flex items-center gap-3 ${className}`}>
      <div className={`relative ${s.svg}`} aria-hidden>
        {/* decorative animated canvas */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full relative">
            {/* space canvas fills the area */}
            <ProductSpaceCanvasWrapper size={parseInt(s.svg.replace(/[^0-9]/g, "")) || 24} />
          </div>
        </div>
        <svg viewBox="0 0 24 24" className={`w-full h-full planet-spin neon-glow relative z-10`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="pb-g" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#f97316" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.85" />
            </radialGradient>
          </defs>
          <circle cx="10" cy="12" r="4" fill="url(#pb-g)" />
          <ellipse cx="10" cy="12" rx="7" ry="2.2" transform="rotate(-20 10 12)" stroke="#f59e0b" strokeWidth="0.6" opacity="0.95" />
        </svg>

        {/* orbit sparks */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="spark w-1 h-1 bg-white rounded-full opacity-90" />
          <span className="spark w-1 h-1 bg-white rounded-full opacity-80" />
          <span className="spark w-1 h-1 bg-white rounded-full opacity-85" />
        </div>
      </div>

      <div className={`flex flex-col leading-tight`}> 
        <span className={`${s.text} text-muted-foreground/90`}>a product by</span>
        <a
          href="https://renasofttech.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`gradient-text font-extrabold tracking-tight ${s.text}`}
        >
          Rena Soft Tech
        </a>
      </div>
    </div>
  );
};

export default ProductBadge;

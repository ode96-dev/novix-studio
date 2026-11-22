"use client";

import React, { useState } from "react";
import { ImageOff } from "lucide-react";

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  darkFallback?: boolean;
}

const ResilientImage = ({
  src,
  alt,
  className = "",
  fallbackTitle,
  darkFallback = true,
}: ResilientImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center p-6 text-center ${
          darkFallback
            ? "bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-950 text-white/60"
            : "bg-linear-to-br from-neutral-100 via-neutral-200 to-neutral-100 text-black/50"
        } ${className}`}
      >
        <ImageOff className="w-6 h-6 mb-2 opacity-60" aria-hidden="true" />
        <span className="text-xs font-medium tracking-tight max-w-[20ch]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

export default ResilientImage;

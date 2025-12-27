"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Button({ children, href, variant = "primary", onClick, className = "" }) {
  const router = useRouter();
  const handle = (e) => {
    if (onClick) onClick(e);
    if (href) router.push(href);
  };

  const base = variant === "primary" ? "cta" : "secondary";

  return (
    <button onClick={handle} className={`${base} ${className}`}>{children}</button>
  );
}

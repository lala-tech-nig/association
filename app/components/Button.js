"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Button({ children, href, variant = "primary", onClick, className = "", download }) {
  const router = useRouter();

  const base = variant === "primary" ? "cta" : "secondary";
  const combinedClassName = `${base} ${className}`;

  if (download && href) {
    return (
      <a href={href} download className={combinedClassName} onClick={onClick}>
        {children}
      </a>
    );
  }

  const handle = (e) => {
    if (onClick) onClick(e);
    if (href) router.push(href);
  };

  return (
    <button onClick={handle} className={combinedClassName}>{children}</button>
  );
}

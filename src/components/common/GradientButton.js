import React from "react";

/**
 * GradientButton — reusable animated gradient button.
 *
 * Props:
 *  - variant: "solid" (default) | "outline"
 *  - href: renders an <a> tag when provided
 *  - onClick: click handler
 *  - className: extra classes
 *  - children: content
 *  - target / rel: for link buttons
 *  - type: button type (button | submit)
 */
const GradientButton = ({
  variant = "solid",
  href,
  onClick,
  className = "",
  children,
  target,
  rel,
  type = "button",
}) => {
  const baseClass =
    variant === "outline" ? "btn-outline-gradient" : "hire-btn btn-gradient";

  const combinedClass = `${baseClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClass}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default GradientButton;

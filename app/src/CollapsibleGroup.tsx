import React, { ReactNode, useState } from "react";

interface CollapsibleGroupProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleGroup({ title, children, defaultOpen = true }: CollapsibleGroupProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="collapsible-group">
      <button
        className="collapsible-toggle"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={title.replace(/\s+/g, "-")}
      >
        <span className="collapsible-arrow">{open ? "▲" : "▼"}&nbsp;</span>
        <span className="collapsible-title">{title}</span>
      </button>
      {open && (
        <div className="collapsible-content" id={title.replace(/\s+/g, "-")}>{children}</div>
      )}
    </section>
  );
}

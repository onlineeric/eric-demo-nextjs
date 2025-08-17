'use client';
import Link from "next/link";
import { Listbox, ListboxItem } from "@heroui/react";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/csr", label: "CSR" },
  { href: "/ssr", label: "SSR" },
  { href: "/ssg", label: "SSG" },
  { href: "/isr", label: "ISR" },
  { href: "/navigation", label: "Client-side Navigation" },
  { href: "/rsc", label: "RSC (Server vs Client)" },
  { href: "/api-demo", label: "Route Handlers (API)" },
  { href: "/actions", label: "Server Actions" },
  { href: "/dynamic", label: "Dynamic Routes" },
  { href: "/error-demo", label: "Error Handling" },
  { href: "/middleware-demo", label: "Middleware" },
  { href: "/images", label: "Image Optimization" },
  { href: "/env-vars", label: "Environment Variables" }
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="hidden md:block w-64 border-r p-3">
      <Listbox
        aria-label="Lessons"
        disallowEmptySelection
        selectedKeys={[path]}
        onSelectionChange={() => {}}
      >
        {items.map((it) => (
          <ListboxItem
            key={it.href}
            href={it.href}
            as={Link}
            className={path === it.href ? "font-semibold" : ""}
          >
            {it.label}
          </ListboxItem>
        ))}
      </Listbox>
    </aside>
  );
}
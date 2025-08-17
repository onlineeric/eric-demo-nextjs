'use client';
import { Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  return (
    <Navbar maxWidth="full" className="border-b">
      <NavbarBrand className="font-semibold">Next.js Exercise</NavbarBrand>
      <NavbarContent justify="end" className="text-sm opacity-70 gap-4">
        <span>SPA → Next.js learning path</span>
        <ThemeToggle />
      </NavbarContent>
    </Navbar>
  );
}
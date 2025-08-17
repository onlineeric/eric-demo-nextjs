'use client';
import { Navbar, NavbarBrand, NavbarContent } from "@heroui/react";

export default function Topbar() {
  return (
    <Navbar maxWidth="full" className="border-b">
      <NavbarBrand className="font-semibold">Next.js Exercise</NavbarBrand>
      <NavbarContent justify="end" className="text-sm opacity-70">
        SPA → Next.js learning path
      </NavbarContent>
    </Navbar>
  );
}
"use client";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function MyNavbar() {
  return (
    <Navbar className="fixed bg-background py-2">
      <NavbarContent className="flex w-full gap-10 sm:gap-20" justify="center">
        <NavbarItem>
          <Link
            href="#home"
            className="text-sm text-button transition-all duration-150 sm:text-base"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#projects"
            className="text-sm text-button transition-all duration-150 sm:text-base"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#skills"
            className="text-sm text-button transition-all duration-150 sm:text-base"
          >
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#sertifikat"
            className="text-sm text-button transition-all duration-150 sm:text-base"
          >
            Sertifikat
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

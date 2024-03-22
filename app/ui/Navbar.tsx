"use client";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function MyNavbar({ sectionsRef }: { sectionsRef: any }) {
  const [activePath, setActivePath] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id: any = entry.target.getAttribute("id");
          setActivePath(id);
        }
      });
    });

    sectionsRef.current.forEach((section: any) => {
      observer.observe(section);
    });
  }, []);

  return (
    <Navbar className="py-2 fixed bg-background">
      <NavbarContent className="w-full flex gap-10 sm:gap-20" justify="center">
        <NavbarItem isActive={activePath === "home"}>
          <Link
            href="#home"
            className={`text-sm sm:text-base text-button transition-all duration-150 ${
              activePath === "home"
                ? "border-b-2 border-b-button"
                : "border-b-transparent"
            }`}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePath === "projects"}>
          <Link
            href="#projects"
            className={`text-sm sm:text-base text-button transition-all duration-150 ${
              activePath === "projects"
                ? "border-b-2 border-b-button"
                : "border-b-transparent"
            }`}
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePath === "skills"}>
          <Link
            href="#skills"
            className={`text-sm sm:text-base text-button transition-all duration-150 ${
              activePath === "skills"
                ? "border-b-2 border-b-button"
                : "border-b-transparent"
            }`}
          >
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePath === "sertifikat"}>
          <Link
            href="#sertifikat"
            className={`text-sm sm:text-base text-button transition-all duration-150 ${
              activePath === "sertifikat"
                ? "border-b-2 border-b-button"
                : "border-b-transparent"
            }`}
          >
            Sertifikat
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

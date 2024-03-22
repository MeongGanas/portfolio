import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function MyNavbar() {
  return (
    <Navbar className="py-2 fixed bg-background">
      <NavbarContent className="w-full flex gap-10 sm:gap-20" justify="center">
        <NavbarItem>
          <Link href="#home" className="text-sm sm:text-base text-button">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projects" className="text-sm sm:text-base text-button">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#skill" className="text-sm sm:text-base text-button">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#sertifikat" className="text-sm sm:text-base text-button">
            Sertifikat
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

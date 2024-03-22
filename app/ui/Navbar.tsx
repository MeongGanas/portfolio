import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function MyNavbar() {
  return (
    <Navbar className="py-2 fixed bg-background">
      <NavbarContent className="flex gap-14 sm:gap-20" justify="end">
        <NavbarItem isActive>
          <Link href="#home" className="text-button">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projects" className="text-button">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#skill" className="text-button">
            Skills
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function MyNavbar() {
  return (
    <Navbar shouldHideOnScroll className="py-5">
      <NavbarContent className="flex gap-14 sm:gap-20" justify="end">
        <NavbarItem isActive>
          <Link color="foreground" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projects" color="foreground">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
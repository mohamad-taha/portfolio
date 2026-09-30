import { useEffect, useState } from "react";

import NavLinks from "../../common/NavLinks/NavLinks";
import Logo from "../../common/Logo/Logo";
import MenuBtn from "../../common/MenuBtn/MenuBtn";

import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? "navScrolled" : ""}>
      <Logo />

      <NavLinks />

      <MenuBtn />
    </nav>
  );
};

export default Navbar;

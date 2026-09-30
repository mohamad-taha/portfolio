import { useContext, useEffect, useRef } from "react";

import { SidebarContext } from "../../../context/Context";

import Logo from "../../common/Logo/Logo";
import NavLinks from "../../common/NavLinks/NavLinks";

import "./Sidebar.css";

const Sidebar = () => {
  const SidebarRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        SidebarRef.current &&
        !SidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div
      ref={SidebarRef}
      className="sidebar"
      style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
    >
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Sidebar;

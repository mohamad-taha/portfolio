import { useContext, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

import { SidebarContext } from "../../../context/Context";

import "./MenuBtn.css";

const MenuBtn = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen]);

  return (
    <button onClick={toggleMenu} className="menuBtn">
      {isOpen ? <IoMdClose fontSize={22} /> : <TiThMenu fontSize={22} />}
    </button>
  );
};

export default MenuBtn;

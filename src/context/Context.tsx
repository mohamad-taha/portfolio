import { createContext, type Dispatch, type SetStateAction } from "react";

type SidebarContext = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContext>({
  isOpen: false,
  setIsOpen: () => {},
});

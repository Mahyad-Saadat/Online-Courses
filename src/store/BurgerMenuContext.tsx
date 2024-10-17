import React, { createContext, useState, ReactNode } from "react";

// Define the type for your context
interface BurgerMenuContextType {
  menuState: boolean;
  categoryState: boolean;
  onOpen: () => void;
  onClose: () => void;
  onCategory: () => void;
  onReturn: () => void;
}

// Default context value
const defaultContext: BurgerMenuContextType = {
  menuState: false,
  categoryState: false,
  onOpen: () => {},
  onClose: () => {},
  onCategory: () => {},
  onReturn: () => {},
};

// Create the context
const BurgerMenuContext = createContext<BurgerMenuContextType>(defaultContext);

// Define the prop type for the provider
interface BurgerMenuContextProviderProps {
  children: ReactNode;
}

export function BurgerMenuContextProvider({
  children,
}: BurgerMenuContextProviderProps) {
  const [menuState, setMenuState] = useState(false);
  const [categoryState, setCategoryState] = useState(false);

  function onOpen() {
    setMenuState(true);
  }

  function onClose() {
    setMenuState(false);
  }

  function onCategory() {
    setCategoryState(true);
  }

  function onReturn() {
    setCategoryState(false);
  }

  const menuContext: BurgerMenuContextType = {
    menuState,
    onClose,
    onOpen,
    categoryState,
    onCategory,
    onReturn,
  };

  return (
    <BurgerMenuContext.Provider value={menuContext}>
      {children}
    </BurgerMenuContext.Provider>
  );
}

export default BurgerMenuContext;

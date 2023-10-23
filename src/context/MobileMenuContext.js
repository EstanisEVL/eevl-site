import { useState } from "react";
import Contexts from "./Contexts";

const MobileMenuContext = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const mainClass = toggle ? "blur" : "";

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <Contexts.MobileMenuContext.Provider
      value={{
        toggle,
        setToggle,
        closeMenu,
        mainClass,
      }}
    >
      {children}
    </Contexts.MobileMenuContext.Provider>
  );
};

export default MobileMenuContext;

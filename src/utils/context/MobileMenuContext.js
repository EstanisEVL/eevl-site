import { useEffect, useState } from 'react';
import Contexts from './Contexts';

const MobileMenuContext = ({ children }) => {
  const [ toggle, setToggle ] = useState(false);
  const [ display, setDisplay ] = useState(false);

  const toggleBlur = () => {
    const blur = document.getElementById('main');
    blur.classList.toggle('blur');
  }

  useEffect(() => {
    setDisplay(toggle);
    toggleBlur();
  }, [toggle])
  
  const closeMenu = () => {
    setToggle(false);
  };

  return(
    <Contexts.MobileMenuContext.Provider value={{
      toggle,
      setToggle,
      display,
      closeMenu,
    }}>
      { children }
    </Contexts.MobileMenuContext.Provider>
  );
}

export default MobileMenuContext;
import React, { useContext } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import NavLinksMobile from '../presentation/navbar/NavLinksMobile';
import Contexts from '../../utils/context/Contexts';

const MobileNavigation = () => {

  const context = useContext(Contexts.MobileMenuContext);
  const { toggle, setToggle, display } = context;

  return(
    <nav className='categories-mobile'>
      <div className='hamburger'>
        <Hamburger toggled={toggle} toggle={setToggle} color='#E2FF2D' label='Show menu' />
        { display && <NavLinksMobile /> }
      </div>
    </nav>
  );
};

export default MobileNavigation;
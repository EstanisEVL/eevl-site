import MobileNavigation from '../../containers/MobileNavigation';
import Navigation from './Navigation';

// CAMBIAR LOGO Y FAVICON

const NavBar = () => {
  return(
    <header className='navbar-header'>
      <nav className='navbar-container'>
        <div className='navbar-brand'>
          <a href='/' aria-label='home'>
            <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className='icon'>
              <path d="M3.81347 11.0773L21 1.1547L38.1865 11.0773V30.9226L21 40.8453L3.81347 30.9226V11.0773Z" fill="#0A192F" stroke="#64FFDA" strokeWidth="2"/>
              <path d="M24.288 20.484C25.536 21.024 26.16 22.026 26.16 23.49C26.16 24.666 25.764 25.548 24.972 26.136C24.18 26.712 23.046 27 21.57 27H17.07V14.472H21.732C23.016 14.472 24.006 14.748 24.702 15.3C25.41 15.852 25.764 16.668 25.764 17.748C25.764 19.032 25.272 19.944 24.288 20.484ZM19.014 16.254V19.71H21.534C22.278 19.71 22.824 19.572 23.172 19.296C23.52 19.008 23.694 18.546 23.694 17.91C23.694 17.274 23.532 16.842 23.208 16.614C22.884 16.374 22.326 16.254 21.534 16.254H19.014ZM21.57 25.218C22.482 25.218 23.13 25.086 23.514 24.822C23.898 24.546 24.09 24.054 24.09 23.346C24.09 22.65 23.886 22.164 23.478 21.888C23.082 21.612 22.44 21.474 21.552 21.474H19.014V25.218H21.57Z" fill="#64FFDA"/>
            </svg>
          </a>
        </div>
        <div className='navbar-categories'>
          <Navigation />
          <MobileNavigation />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
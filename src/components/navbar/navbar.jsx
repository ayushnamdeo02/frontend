import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logobgclear.webp';
import whitelogo from '../../assets/whitelogo.webp';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isScrolled: false,
      submenuOpen: { resources: false, community: false, involved: false },
    };
    this.menuRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  handleScroll = () => {
    const scrolledLogo = document.querySelector('.scrolled-logo');
    if (scrolledLogo) {
      scrolledLogo.style.opacity = window.scrollY > 0 ? '1' : '0';
    }
    this.setState({ isScrolled: window.scrollY > 0 });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  handleMenuAndLinkClick = () => {
    this.closeMenu();
    this.handleLinkClick();
  };

  handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  handleOutsideClick = (event) => {
    if (this.state.isMenuOpen && this.menuRef.current && !this.menuRef.current.contains(event.target)) {
      this.closeMenu();
    }
  };

  toggleSubmenu = (menuName) => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.submenuOpen[menuName] ? true : prevState.isMenuOpen,
      submenuOpen: {
        ...prevState.submenuOpen,
        [menuName]: !prevState.submenuOpen[menuName],
      },
    }));
  };
  closeSubmenu = () => {
    this.setState((prevState) => ({
      submenuOpen: {
        ...prevState.submenuOpen,
        resources: false,
        community: false,
        involved: false,
      },
    }));
  };
  

  render() {
    const { isMenuOpen, isScrolled, submenuOpen } = this.state;
    return (
        <nav className={`navbar-container ${isMenuOpen ? 'mobile-menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`} onMouseEnter={this.handleLogoMouseEnter} onMouseLeave={this.handleLogoMouseLeave}>
          <div className="navbar-left">
            <Link className="navbar-brand" to="/">
              <img src={whitelogo} alt="Default Logo" className="default-logo" />
              <img src={logo} alt="Scrolled Logo" className="scrolled-logo" style={{ opacity: 0 }} />
            </Link>
          </div>
          <div ref={this.menuRef} className={`navbar-mid ${isScrolled ? 'scrolled' : ''}`}>
          <button className={`menu-button ${isMenuOpen ? 'mobile-menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`} onClick={this.toggleMenu}>
            Menu
          </button>
          <ul className={`navbar-list ${isMenuOpen ? 'mobile-menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            {['resources', 'community', 'involved'].map((menuName) => (
              <li className="dropdown" key={menuName}>
                <button className={`nav-item ${isScrolled ? 'scrolled' : ''} ${submenuOpen[menuName] ? 'open' : ''}`} onClick={() => { this.toggleSubmenu(menuName); this.closeMenu(); }}>
                  {menuName.charAt(0).toUpperCase() + menuName.slice(1)}
                </button>
                <div className={`dropdown-content ${submenuOpen[menuName] ? 'open' : ''}`}>
                  {/* Dropdown links for each submenu */}
                  {menuName === 'resources' && (
                    <>
                      <a className={`nav-link ${isScrolled ? 'scrolled' : ''}`} href="https://heedsfoundation.blogspot.com/" target="_blank" rel="noopener noreferrer" onClick={this.handleMenuAndLinkClick}>
                        Blog
                      </a>
                      <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to='/report' onClick={this.handleMenuAndLinkClick}>
                        Reports
                      </Link>
                    </>
                  )}
                  {menuName === 'community' && (
                    <>
                      <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/impact" onClick={this.handleMenuAndLinkClick}>
                        Impact
                      </Link>
                      <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/newsletter" onClick={this.handleMenuAndLinkClick}>
                        Newsletter
                      </Link>
                      <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/successstory" onClick={this.handleMenuAndLinkClick}>
                        Success Story
                      </Link>
                    </>
                  )}
                  {menuName === 'involved' && (
                    <>
                      <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/internship-jobs" onClick={this.handleMenuAndLinkClick}>
                        Internship / Jobs
                      </Link>
                      <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/open-positions" onClick={this.handleMenuAndLinkClick}>
                        Careers
                      </Link>
                      <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/contact" onClick={this.handleMenuAndLinkClick}>
                        Contact
                      </Link>
                    </>
                  )}
                </div>
              </li>
            ))}
            <li>
              <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleMenuAndLinkClick}>
                <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/about" onClick={this.handleMenuAndLinkClick}>
                  About
                </Link>
              </button>
            </li>
            <li>
              <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleMenuAndLinkClick}>
                <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/join" onClick={this.handleMenuAndLinkClick}>
                  Join Us
                </Link>
              </button>
            </li>
            <li>
              <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleMenuAndLinkClick}>
                <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/contact" onClick={this.handleMenuAndLinkClick}>
                  Contact
                </Link>
              </button>
            </li>
          </ul>
        </div>
        
        <div className={`navbar-right ${isScrolled ? 'scrolled' : ''}`}>
          <ul className="nav-right-button">
            <li>
            <a href='https://unstop.com/o/F819BNL?lb=nsYyVhWp'><button className='Donate-btn-nav' >Donate</button></a>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

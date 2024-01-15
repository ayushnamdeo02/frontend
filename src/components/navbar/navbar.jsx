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
    this.setState(prevState => ({
      submenuOpen: {
        ...prevState.submenuOpen,
        [menuName]: !prevState.submenuOpen[menuName]
      }
    }));
  };

  render() {
    const { isMenuOpen, isScrolled, submenuOpen } = this.state;
    return (
      <div className='main'> 
        <div class="header-content">
          <Link className="dte-code" to='/report'>Reg.No: E-3921 (NGP)</Link>
            <div className="social-media">
                Follow us on:
                <a href="https://facebook.com/Heedsfoundation/" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="https://instagram.com/heedsfoundation?igshid=ZDc4ODBmNjlmNQ==" className="instagram"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/heeds-foundation/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="https://youtube.com/heedsfoundation" className="youtube"><i className="fa fa-youtube"></i></a>
            </div>
            <div class="erp-info">
                <a  href="tel:+918668353016"> 📞 +91 8668353016  </a>
                <a  href="mailto:heedsfoundation.ngo@gmail.com"> ✉️ heedsfoundation.ngo@gmail.com </a> 
            </div>
        </div>
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
                    <li className="dropdown">
                        <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleLinkClick}>
                        <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`}  >  Resources</Link>
                        </button>
                        <div className={`dropdown-content ${submenuOpen.resources ? 'open' : ''}`}>
                        <a className={`nav-link ${isScrolled ? 'scrolled' : ''}`} href="https://heedsfoundation.blogspot.com/" target="_blank" rel="noopener noreferrer" onClick={this.handleMenuAndLinkClick}>
  Blog
</a>

                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to='/report' onClick={this.handleMenuAndLinkClick}>Reports</Link>
                        </div>
                    </li>
                    <li className="dropdown">
                        <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleLinkClick}>
                        <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleLinkClick}> Community</Link>
                        </button>
                        <div className="dropdown-content">
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/impact" onClick={this.handleMenuAndLinkClick}>Impact</Link>
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/newsletter" onClick={this.handleMenuAndLinkClick}>Newsletter</Link>
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/successstory" onClick={this.handleMenuAndLinkClick}>Success Story</Link>
                        </div>
                    </li>
                    <li className="dropdown">
                        <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleLinkClick}>
                        <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleLinkClick}> Get Involved</Link>
                        </button>
                        <div className="dropdown-content">
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/internship-jobs" onClick={this.handleMenuAndLinkClick}>Internship / Jobs</Link>
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/open-positions" onClick={this.handleMenuAndLinkClick}>Carrers</Link>
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/contact" onClick={this.handleMenuAndLinkClick}>Contact</Link>
                        </div>
                    </li>
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
      </div>
    );
  }
}

export default Navbar;

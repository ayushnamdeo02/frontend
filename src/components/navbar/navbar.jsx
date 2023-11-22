import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import logo from '../../assets/logobgclear.png';
import whitelogo from '../../assets/whitelogo.png';
import './navbar.css';

class Navbar extends Component {
  handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isScrolled: false,
      isHovered: false, 
      submenuOpen: { resources: false, community: false, involved: false },
    };
  }
  handleLogoMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  // Event handler for logo mouse leave
  handleLogoMouseLeave = () => {
    this.setState({ isHovered: false });
  };
  componentDidMount() {
    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component unmounts
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // Determine if the user has scrolled down a certain amount (e.g., 100 pixels)
    if (window.scrollY > 100) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  };
  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };
  handleMenuAndLinkClick = () => {
    this.closeMenu();
    this.handleLinkClick();
  };
  toggleSubmenu = (menuName) => {
    this.setState(prevState => ({
      isMenuOpen: false,
      submenuOpen: {
        ...prevState.submenuOpen,
        [menuName]: !prevState.submenuOpen[menuName]
      }
    }));
  };

  render() {
    const { isMenuOpen, isScrolled, isHovered, submenuOpen } = this.state;
    const logoSrc = isScrolled || isHovered ? logo : whitelogo;
    return (
      <div className='main'> 
      <div className="header-section">
        <div class="header-content">
            <div className="dte-code">File. NO : 1380/2023-19</div>
            <div className="social-media">
                Follow us on:
                <a href="https://facebook.com/Heedsfoundation/" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="https://instagram.com/heedsfoundation?igshid=ZDc4ODBmNjlmNQ==" className="instagram"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/heeds-foundation/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="https://youtube.com/heedsfoundation" className="youtube"><i className="fa fa-youtube"></i></a>
            </div>
            <div class="erp-info">
                <span className="contact"><a href="callto:918788411441"> 📞 +91 8668353016 </a></span>
                <span className="email"><a href="mailto:heedsfoundation.ngo@gmail.com"> ✉️ heedsfoundation.ngo@gmail.com </a> </span>
            </div>
        </div>
        </div>
      <nav className={`navbar-container ${isMenuOpen ? 'mobile-menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`} 
      onMouseEnter={this.handleLogoMouseEnter}
      onMouseLeave={this.handleLogoMouseLeave}>
        <div className={`navbar-left ${isScrolled ? 'scrolled' : ''}`}  >
          <Link className="navbar-brand" to="/">
            <img src={logoSrc} alt="logo" />
          </Link>
        </div>
        <div className={`navbar-mid ${isScrolled ? 'scrolled' : ''}`} >
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

                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to='/about#section-reports' onClick={this.handleMenuAndLinkClick}>Reports</Link>
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
              <button className='Donate-btn-nav'>Donate</button>
            </li>
            
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;

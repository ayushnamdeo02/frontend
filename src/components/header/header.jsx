import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
class Header extends Component {
    render(){
        return(
        <div class="header-content">
          <Link className="dte-code" to='/report'>Reg.No: E-3921 (NGP)</Link>
           <Link className='darpan'>Niti Aayog / NGO Darpan ID: MH/2024/0384990</Link>
            <div className="social-media">
                Follow us on:
                <a href="https://facebook.com/Heedsfoundation/" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="https://instagram.com/heedsfoundation?igshid=ZDc4ODBmNjlmNQ==" className="instagram"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/heeds-foundation/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="https://youtube.com/heedsfoundation" className="youtube"><i className="fa fa-youtube"></i></a>
            </div>
            <div class="erp-info">
                <a  href="tel:+918788411441"> 📞 +918788411441  </a>
                <a  href="mailto:heedsfoundation.ngo@gmail.com"> ✉️ heedsfoundation.ngo@gmail.com </a> 
            </div>
        </div>
        );
    }
}

export default Header;
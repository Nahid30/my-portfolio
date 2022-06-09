import React from 'react';
import '../Footer/Footer.css';
import logo from '../../../images/logo.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer class="footer footer-center p-4 bg-gray-100 text-base-content">
            <img src={logo} height={40} width={60} alt="" /> 
            <div>
                <p className='font-semibold mb-4'>Copyrights &copy; {year} | All right reserved by MD Nahid Hossain </p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
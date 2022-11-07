import React from 'react';
import './Footer.css';
import {
    Link
} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <div className="footer py-4 mt-5 bg-dark text-white">
            <div className="footer-bawah text-center">
                <p>&copy; Copyrights DayCareSchools. All rights reserved.</p>
                <div className="pb-2">Design By <Link>DayCareSchools.id</Link></div>
            </div>
        </div>
    </div>
  )
};

export default Footer;
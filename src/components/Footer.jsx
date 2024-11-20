// Import React
import React from 'react';
import './Footer.css'; // Import vanilla CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Website Name */}
                <p className="footer-name">LeisureBookings.in</p>

                {/* Copyright Text */}
                <div className="footer-text">
                    <p className="footer-copyright">
                        Copyright 2024 © LeisureBookings.in Pvt. Ltd. All Rights Reserved.
                    </p>
                    <p className="footer-description">
                        The content and images used on this site are copyright protected and copyrights vest with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied.
                    </p>
                    <p className="footer-warning">
                        Unauthorized use is prohibited and punishable by law.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

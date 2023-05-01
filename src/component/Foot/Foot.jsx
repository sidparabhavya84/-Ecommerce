import React from 'react';
import './Foot.css';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';

function Foot() {
    return (
        <>
            <footer id="footer" className="footer bg-primary">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="index.html" className="logo d-flex align-items-center text-decpration-none">
                                <span> Ecommerce</span>
                            </a>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                            <div className="social-links d-flex mt-4">
                                <a href="#" className="twitter"><Twitter/></a>
                                <a href="#" className="facebook"><Facebook/></a>
                                <a href="#" className="instagram"><Instagram/></a>
                                <a href="#" className="linkedin"><Linkedin/></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul className='text-decoration-none'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Product Management</a></li>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Graphic Design</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                A108 Adam Street <br />
                                New York, NY 535022<br />
                                United States <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="copyright">
                        © Copyright <strong><span> Ecommerce</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        
                       <a> Designed by Ecommerce</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Foot
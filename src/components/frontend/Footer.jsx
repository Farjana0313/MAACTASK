import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='footer-content text-center'>
                                <div className="footer-top">
                                    <Link to='/'><img src="/assets/img/footer-logo.svg" alt="" /></Link>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam eaque.</p>
                                    <div className="social-link d-flex gap-4 justify-content-center">
                                        <Link to=""> <FaTwitter /> </Link>
                                        <Link to=""><FaLinkedinIn /></Link>
                                        <Link to=""><FaFacebookF /></Link>
                                    </div>
                                </div>
                                <div className="footer-bottom">
                                    <div className="footer-bottom-contnet">
                                        <p>© All rights reserve by <span>MAAC</span></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

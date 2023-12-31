import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/footer.css'
import logoGegent from '../images/logo_gegent.png'

export const Footer = () => {
    const footerColumn = {
        width: 300
    }
    return (
        <>
            <footer style={{backgroundColor: "#504F4F"}}>
                <div className="container-fluid text-light py-5  ">
                    <div
                        className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-3 justify-content-center">
                        <div className="col-lg-auto col-md-auto col-sm-auto col-auto">
                            <div style={footerColumn}>
                                <div>
                                    <i className="bi bi-facebook p-1" style={{fontSize: "1.3rem"}}></i>
                                    <i className="bi bi-twitter-x p-1" style={{fontSize: "1.3rem"}}></i>
                                    <i className="bi bi-instagram p-1" style={{fontSize: "1.3rem"}}></i>
                                    <i className="bi bi-whatsapp p-1" style={{fontSize: "1.3rem"}}></i>
                                    <i className="bi bi-youtube p-1" style={{fontSize: "1.3rem"}}></i>
                                </div>
                                <p className="mt-5 copywrite">
                                    &copy; 2022 COL & COLlive.com
                                    <br/>-All rights reserved.
                                    <br/><br/>
                                    COLlive is an independently run
                                    <br/> Orthodox Jewish news Service.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-auto col-sm-auto col-auto">
                            <div style={footerColumn}>
                                <h6 className="text-white">ABOUT US</h6>
                                <div className="mt-4">
                                    <a href="#" className="footerLink ">Contact Us</a>
                                </div>
                                <div className="mt-3">
                                    <a href="#" className="footerLink ">Advertise With Us</a>
                                </div>
                                <div className="mt-3">
                                    <a href="#" className="footerLink ">Privacy Policy</a>
                                </div>
                                <div className="mt-3">
                                    <a href="#" className="footerLink ">About</a>
                                </div>

                                <div className="mt-3">
                                    <a href="#" className="footerLink ">Subscribe To Our Newsletters</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-auto col-md-auto col-sm-auto col-auto">
                            <div style={footerColumn}>

                                <h6 className="text-white">IMPORTANT LINKS</h6>
                                <div className="mt-4">
                                    <a href="#" className="footerLink ">Submit News</a>
                                </div>
                                <div className="mt-3">
                                    <a href="#" className="footerLink ">Submit Mazel Tov</a>
                                </div>
                                <div className="mt-3">
                                    <a href="#" className="footerLink ">Add New Event</a>
                                </div>
                                <div className="mt-3">
                                    <a href="#" className="footerLink ">Post a Classified</a>
                                </div>
                                <div className="mt-3">
                                    <a href="#" className="footerLink ">Business Listings</a>
                                </div>
                                <div className="mt-3">
                                    <a href="#" className="footerLink ">Submit a Gagent Listing</a>
                                </div>
                                <div className="mt-4">
                                    <img src={logoGegent}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-auto col-sm-auto col-auto">
                            <div style={footerColumn}>
                                <h6 className="text-white">MEMBERS</h6>
                                <div className="mt-4">
                                    <a href="#" className="footerLink ">Account</a>
                                </div>
                                <div className="mt-3">
                                    <a href="#" className="footerLink ">Register</a>
                                </div>
                                <div className="mt-3">
                                    <a href="#" className="footerLink ">Login</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>)
}

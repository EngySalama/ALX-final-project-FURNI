import React from 'react';
import './Footer.css'; 
import { TiSocialFacebook  } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-logo">
                <h3>Furni.</h3>
                <p> Discover stylish and comfortable furniture for your home.</p>
                <div className="social-icons container ">
                  <a href="#"><i className="fab fa-facebook-f"> <TiSocialFacebook /> </i></a>
                  <a href="#"><i className="fab fa-twitter"><TiSocialTwitter /> </i></a>
                  <a href="#"><i className="fab fa-instagram"> <TiSocialInstagram /> </i></a>
                  <a href="#"><i className="fab fa-linkedin-in"> <TiSocialLinkedin /> </i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-links">
                <h4>About Us</h4>
                <ul>
                  <li><a href="#">Services</a></li>
                  
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-links">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
         
            <div className="col-lg-4">
              <div className="">
                
                <img src="\src\assets\sofa 1.png" alt="sofa" width="100px" height="100px" /> 
              </div>
             </div>
              
          </div>
        </div>
        <div className="copyright">
          <p>Copyright 2025 FURNIegypt@gmail.com. All Rights Reserved.</p>
        </div>
      </footer>
    );
};

export default Footer;
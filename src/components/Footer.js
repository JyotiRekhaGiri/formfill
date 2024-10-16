import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer widgets-dark typo-light" style={{ backgroundColor: "#EC9600" }}>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <img src={require("./images/Logo.png")} alt='Logo' />
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">About</h5>
                <ul className="thumbnail-widget">
                  <li><div className="thumb-content"><a href="#.">About Mentoons</a></div></li>
                  <li><div className="thumb-content"><a href="#.">Free Download</a></div></li>
                  <li><div className="thumb-content"><a href="#.">Help & FAQ’s</a></div></li>
                  <li><div className="thumb-content"><a href="#.">Workshops</a></div></li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Find Comics</h5>
                <ul className="thumbnail-widget">
                  <li><div className="thumb-content"><a href="#.">Comics</a></div></li>
                  <li><div className="thumb-content"><a href="#.">Activity Books</a></div></li>
                  <li><div className="thumb-content"><a href="#.">Trending</a></div></li>
                  <li><div className="thumb-content"><a href="#.">Apparels</a></div></li>
                  <li><div className="thumb-content"><a href="#.">Accessories</a></div></li>
                </ul>
                <button style={{ padding: "0.3rem", color: "white", backgroundColor: "#EF234E", borderRadius: "0.8rem", border: 'none', fontWeight: "bold" }}>
                  Subscribe
                </button>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Contact Us</h5>
                <p>Domlur, <br />
                  Bengaluru, Karnataka <br />
                  +91 9036033000
                </p>
                <ul className="social-footer2">
                  <li><a title="Instagram" target="_blank" href="https://www.instagram.com/" rel="noopener noreferrer">
                    <img alt="Instagram" width="30" height="30" src={require("./images/insta.png")} />
                  </a></li>
                  <li><a href="https://www.linkedin.com/" target="_blank" title="LinkedIn" rel="noopener noreferrer">
                    <img alt="LinkedIn" width="30" height="30" src={require("./images/linkedin.png")} />
                  </a></li>
                  <li><a href="https://www.twitter.com/" target="_blank" title="Twitter" rel="noopener noreferrer">
                    <img alt="Twitter" width="30" height="30" src={require("./images/twitter.png")} />
                  </a></li>
                  <li><a href="https://www.whatsapp.com/" target="_blank" title="WhatsApp" rel="noopener noreferrer">
                    <img alt="WhatsApp" width="30" height="30" src={require("./images/whats.png")} />
                  </a></li>
                  <li><a href="https://www.square.com/" target="_blank" title="Square" rel="noopener noreferrer">
                    <img alt="Square" width="30" height="30" src={require("./images/square.png")} />
                  </a></li>
                  <li><a href="https://www.facebook.com/" target="_blank" title="Facebook" rel="noopener noreferrer">
                    <img alt="Facebook" width="30" height="30" src={require("./images/facebook.png")} />
                  </a></li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="containe">
                <div className="row1">
                  <div className="col-md-12 text-center">
                    <p>Privacy Policy, Terms and Conditions</p>
                  </div>
                </div>
              </div>
            </div>
             {/* Image placed below the footer */}
      <div className="footer-image-below">
        <img src={require("./images/footerlast.png")} alt='Footer Logo Below' />
      </div>
          </div>
        </div>
      </footer>

     
    </>
  );
};

export default Footer;

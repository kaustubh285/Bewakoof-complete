import React from "react";
import "./footer.css";
import RestoreIcon from "@material-ui/icons/Restore";
import PaymentIcon from "@material-ui/icons/Payment";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import AppleIcon from "@material-ui/icons/Apple";

function Footer() {
  return (
    <div className='footer w-100'>
      <div className='container '>
        <img
          className='footer__logo'
          src='/bewakoof__logo.png'
          alt='bewakoof'
        />
        <div className='footer__section1'>
          <div className='footer__section1Part'>
            <h5>CUSTOMER SERVICE</h5>
            <p>Contact Us</p>
            <p>Return Order</p>
            <p>Cancel Order</p>
          </div>
          <div className='footer__section1Part'>
            <h5>COMPANY</h5>
            <p>About Us</p>
            <p>We're Hiring</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Blog</p>
          </div>
          <div className='footer__section1Part'>
            <h5>CONNECT WITH US</h5>
            <p className='icon'>
              <FacebookIcon /> <span>4.7M people Like this</span>
            </p>
            <p className='icon'>
              <InstagramIcon /> <span>1M follwers</span>
            </p>
            <p className='icons'>
              <PinterestIcon />
              <TwitterIcon /> <AppleIcon />
            </p>
          </div>
          <div className='footer__section1Part'>
            <h5>KEEP UP TO DATE</h5>
            <div className='UpToDate'>
              <input type='email' placeholder='Enter Email Id' />
              <button className='UpToDate__button'>Subcribe</button>
            </div>
          </div>
        </div>
        <div className='footer__section1 footer__section2'>
          <div className='footer__section2Part'>
            <h5>{""}</h5>
            <p>
              <RestoreIcon /> 15 Days return policy
            </p>
            <p>
              <PaymentIcon /> Cash on delivery
            </p>
          </div>
          <div className='footer__section1Part'>
            <h5>DOWNLOAD THE APP</h5>
            <div className='download_the_app'>
              <img
                src='https://images.bewakoof.com/web/app_android_v1.png'
                alt='googleplay'
              />
              <img
                src='https://images.bewakoof.com/web/app_ios_v1.png'
                alt='appstore'
              />
            </div>
          </div>
          <div className='footer__section1Part'>
            <h5>100% SECURE PAYMENTS</h5>
            <img
              src='https://images.bewakoof.com/web/secure-payments-image.png'
              alt='payment'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

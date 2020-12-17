import React from "react";
import "./header.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";

function Header() {
  return (
    <div className='header'>
      <div className='header__small'>
        <div className='header__small1'>
          <p>Offers</p>
          <p>Fanbook</p>
          <p>
            <PhoneAndroidOutlinedIcon />
            Download App
          </p>
          <p>TriBe Membership</p>
        </div>
        <div className='header__small2'>
          <p>Contact Us</p>
          <p>Track Order</p>
        </div>
      </div>
      <div className='header__navbar '>
        <nav className='navbar navbar-expand-lg navbar-light bg-white '>
          <a className='navbar-brand' href='/'>
            <img
              className='navbar-logo'
              src='https://images.bewakoof.com/logos/bewakoof-logo-og.png'
              alt='bewakoof'
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='/'>
                  Men <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item active'>
                <a className='nav-link' href='/'>
                  Women <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item active'>
                <a className='nav-link' href='/'>
                  Mobile Covers <span className='sr-only'>(current)</span>
                </a>
              </li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              <input
                className='form-control mr-sm-2'
                type='search'
                placeholder='Search by product, category or collection'
                aria-label='Search'
              />
            </form>
            <div className='login'>
              <p className='nav-item'> Login</p>
              <FavoriteBorderIcon />
              <LocalMallOutlinedIcon />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

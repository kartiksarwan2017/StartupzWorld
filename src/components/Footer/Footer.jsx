import React from 'react';
import "./Footer.scss";
import {FaFacebookSquare} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer-container'>
         <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <img src="./logo.png" className='w-40 rounded-3xl my-2' />
            <p className="text-justify">101, Relcon Enclave, NH-48 Surat, Gujarat India - 394325</p>
          </div>

          <div className="col-xs-6 col-md-3 my-3">
            <h6>Company</h6>
            <ul className="footer-links">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3 my-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="https://www.youtube.com/@SwamiMukundanandaHindi">Community Guidelines</Link>
              </li>
              <li>
                <Link to="youtube.com/watch?v=a8IKp0znasY">Privacy Policy</Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/@GunjanShouts/videos">Terms Of Use</Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/@SpiritualMantra">Cancellation & Refund</Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/@SoothingRelaxation">Shipping & Exchange</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by   &nbsp; 
         <Link to="/">Healthify</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons mt-4">
              <li>
                <Link className="facebook" to="/"><FaFacebookSquare className='my-2 ml-3 mt-2' /></Link>
              </li>
              <li>
                <Link className="twitter" to="/"><BsInstagram className='my-2 ml-3 mt-2' /></Link>
              </li>
              <li>
                <Link className="dribbble" to="/"><BsTwitter className='my-2 ml-3 mt-2' /></Link>
              </li>
              <li>
                <Link className="linkedin" to="/"><BsLinkedin className='my-2 ml-3 mt-2' /></Link>
              </li>   
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
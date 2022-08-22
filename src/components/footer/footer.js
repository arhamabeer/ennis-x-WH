import React from "react";
import './footer.css'
import FB from '../../assets/fb.png'
import IG from '../../assets/ig.png'
import TW from '../../assets/tw.png'
import YT from '../../assets/yt.png'
import Logo from '../../assets/Logo.png'


const Footer = () => {
  return (
    <div className="footer_main_div">
      <div className="footer_main_div_icon">
        <img src={Logo} />
      </div>
      <div className="footer_main_div_second">
        <div className="footer_main_div_second_inner0">
          <a>First Link</a>
          <a>Second Link</a>
          <a>Third Link</a>
          <a>Forth Link</a>
          <a>Fifth Link</a>
        </div>
        <div className="footer_main_div_inner1">
          <p>© Copyright 2020 Pixsellz - Premium UI Goods for Designers</p>
        </div>
      </div>
      <div className="footer_main_div_third">
        <div className="footer_main_div_third_inner">
          <img src={FB} />
          <img src={IG} />
          <img src={TW} />
          <img src={YT} />
        </div>
      </div>
    </div>
  );
};
export default Footer;

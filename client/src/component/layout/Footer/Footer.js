import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
      </div>

      <div className="midFooter">
        <h1>Transport App</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Transport App</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/esimo13/">Instagram</a>
        <a href="https://www.youtube.com/channel/UCNVfKZSqfb5vmotige2A0rA">
          Youtube
        </a>
        <a href="https://www.facebook.com/WelcomeToTheESIMOShow">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;

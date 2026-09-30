import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import NavLinks from "../../common/NavLinks/NavLinks";
import Logo from "../../common/Logo/Logo";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerContainer ">
      <div className="footerContent container">
        <div className="footerColumn brandCol">
          <Logo />

          <div className="socialIcons">
            <a
              href="https://www.linkedin.com/in/mohamadtahakasir/"
              className="socialLink"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/mohamadtahakasir"
              className="socialLink"
            >
              <FaFacebookF />
            </a>
            <a href="https://github.com/mohamad-taha" className="socialLink">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footerColumn">
          <h3>Quick link</h3>

          <NavLinks />
        </div>

        <div className="footerColumn">
          <h3>Contacts</h3>
          <ul className="contactInfoList">
            <li>
              <span className="contactIcon">📞</span>
              <span className="contactText">+963 935447842</span>
            </li>
            <li>
              <span className="contactIcon">✉️</span>
              <span className="contactText">mohamadtahakasir@gmail.com</span>
            </li>
            <li>
              <span className="contactIcon">📍</span>
              <span className="contactText">Aleppo, Syria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <p>Copyright {currentYear} | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

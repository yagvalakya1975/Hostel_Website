import logo from "../Assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import "../Styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleInsta = () => {
    window.location.href = `https://www.instagram.com/brahmaputra_hostel_iitg?igsh=MWJyazRjM2huZmRzcA==`;
  };

  const handleFacebook = () => {
    window.location.href = `https://www.facebook.com/jaibrahmaputra/`;
  };

  const handleMail = () => {
    window.location.href = ``;
  };

  return (
    <div className="footer">
      <hr />
      <div className="footer-details">
        <img className="logo" src={logo} alt="" />
        <div className="footer-links">
          <Link to="/council">COUNCIL</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/complaints">COMPLAIN PORTAL</Link>
        </div>
        <div className="footer-socials">
          <CiInstagram className="icons" onClick={handleInsta} />
          <FaFacebook className="icons" onClick={handleFacebook} />
          <CiMail className="icons" onClick={handleMail} />
        </div>
      </div>

      <hr />
      <div className="credits">
        <p className="head designer">Designed by</p>
        <p className="names designer">Apratul Vasu</p>

        <p className="head">Developed By</p>
        <p className="names">Adi Jain</p>
        <p className="names">Srinjoy Ghosh</p>
        <p className="names">Vijay Kumar</p>
        <p className="names">Aditya</p>
        <p className="names">Yasharth Singh</p>
      </div>
    </div>
  );
};

export default Footer;

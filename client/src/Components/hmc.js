import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const HMC = ({ member }) => {
  const handleInsta = () => {
    window.open(member.insta, '_blank');
  };

  const handleLinkedin = () => {
    window.open(member.linkedin, '_blank');
  };

  const handleMail = () => {
    window.open(`mailto:${member.mail}`, '_blank');
  };


  return (
    <div className="hmc-article">
      <img src={member.src} alt="" />
      <div className="hmc-data">
        <div className="hmc-name">
          <p>{member.name.toUpperCase()}</p>
        </div>
        <div className="hmc-position">
          <p>{member.position.toUpperCase()}</p>
        </div>
        <div className="hmc-social">
          <CiInstagram className="icons first-icon" onClick={handleInsta} />
          <FaLinkedin className="icons" onClick={handleLinkedin} />
          <CiMail className="icons" onClick={handleMail} />
        </div>
      </div>
    </div>
  );
};

export default HMC;

import "./council.css";
import { useEffect, useState} from 'react';
import Warden from "../../Components/warden";
/*
import wardenim from "./assets/WardenBPH.jpg";
import assward1 from "./assets/AsWarden1.jpg";
import assward2 from "./assets/AsWarden2.jpg";
import gensec from "./assets/GenSec.png";
import assgen from "./assets/AsGenSec.jpg";
import sportsec from "./assets/Sports.png";
import techsec from "./assets/Techy.png";
import cultsec from "./assets/Culty.png";
import welfsec from "./assets/Welfy.png";
import maintsec from "./assets/Mantainence.png";
import litsec from "./assets/Literary.png";
import servsec from "./assets/Services.png";
import mediahead from "./assets/Media.png";
import jsp1 from "./assets/Jsports1.png";
import jsp2 from "./assets/Jsports2.png";
import jserv from "./assets/Jservices.png";
import jcult from "./assets/JCulty.png";
import jtech1 from "./assets/Jtechy1.png";
import jtech2 from "./assets/Jtechy2.png";
import jlit from "./assets/Jliterary.png";
import jwelf from "./assets/Jwelfy.png";
import jmaint1 from "./assets/JManty2.png";
import jmaint2 from "./assets/JManty1.png";*/
import HMC from "../../Components/hmc"; 
// import "../../Styles/mediaqueries.css";

const SHEET_ID = "2PACX-1vTD6ruT4Rw3OmdHQAJksvZNfLhCOoECcctDntEzWVCsP_s32vPAxO9hF6A1yK5YqSWf8Qk4OBQMU7sY";
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTD6ruT4Rw3OmdHQAJksvZNfLhCOoECcctDntEzWVCsP_s32vPAxO9hF6A1yK5YqSWf8Qk4OBQMU7sY/pubhtml";

const Council = () => {
  const [warden, setWarden] = useState([]);
  const [hmc, setHmc] = useState([]);
  const [jointHmc, setJointHmc] = useState([]);
  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1xjI4HRQfPdwkL335CvJ5LJwdeO2Zg5Tas4Wa-po6soc/Sheet1"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data from Google Sheets:", data);
        const formatted = data.map((item) => ({
          ...item,
          src: item.image_url,
        }));

        setWarden(formatted.filter((person) => person.type === "warden"));
        setHmc(formatted.filter((person) => person.type === "hmc"));
        setJointHmc(formatted.filter((person) => person.type === "jointhmc"));
      })
      .catch((err) => console.error("Failed to fetch sheet data:", err));
  }, []);

  const convertGoogleDriveLink = (url) => {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return url;
  };


  return (
    <div className="council-container">
      <div className="council-heading">
        <hr />
        <h1>COUNCIL</h1>
        <hr />
      </div>
      <br></br>
      <div className="hmc">
        <div className="name" id="sticky">
            <p>WARDENS</p>
        </div>
        <div className="warden-wrapper">
          {warden.map((info, i) => (
            <Warden key={i} warden={info} />
          ))}
        </div>
      </div>

      <div className="hmc">
        <div className="name" id="sticky">
          <p>HMC</p>
        </div>
        <div className="hmc-wrapper">
          {hmc.map((info, i) => (
            <HMC key={i} member={info} />
          ))}
        </div>
      </div>

      <div className="hmc">
        <div className="name joint-name" id="sticky">
          <p>JOINT</p>
          <p>HMC</p>
        </div>
        <div className="hmc-wrapper">
          {jointHmc.map((info, i) => (
            <HMC key={i} member={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Council;

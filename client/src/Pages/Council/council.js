import "./council.css";
import Warden from "../../Components/warden";
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
import jmaint2 from "./assets/JManty1.png";
import HMC from "../../Components/hmc"; 
// import "../../Styles/mediaqueries.css";

const Council = () => {
  const warden = [
    {
      src: wardenim,
      name: "Prof. Biranchi Panda",
      position: "WARDEN",
      email: "warden.brahmaputra@iitg.ac.in",
      phone: "+91 361 258 2684",
    },
    {
      src: assward1,
      name: "Prof. Sparsh Johari",
      position: "associate warden",
      email: "sparshjohari@iitg.ac.in",
      phone: "+91 361 258 3226",
    },
    {
      src: assward2,
      name: "Prof. Ashwini Sawant",
      position: "associate warden",
      email: "ashwinisawant@iitg.ac.in",
      phone: "+91 361 258 3280",
    },
  ];

  const hmc = [
    {
      src: gensec,
      name: "abhishek sharma",
      position: "general secretary",
      insta:
        "https://www.instagram.com/abhsharma9192/profilecard/?igsh=OXZlM3ZheWlvb2k0",
      linkedin:
        "https://www.linkedin.com/in/abhishek-sharma-b51069253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "gs.brahmaputra@iitg.ac.in",
    },
    {
      src: assgen,
      name: "harshavardhan",
      position: "assosiate general secretary",
      insta:
        "https://www.instagram.com/harsha.153._/",
      linkedin:
        "https://www.linkedin.com/in/poshala-harsha-vardhan-a05670301/",
      mail: "v.poshala@iitg.ac.in",
    },
    {
      src: cultsec,
      name: "gaurang palekar",
      position: "cultural secretary",
      insta: "https://www.instagram.com/gaurang_palekar",
      linkedin:
        "https://www.linkedin.com/in/gaurang-palekar-12a4b9287",
      mail: "palekar@iitg.ac.in",
    },
    {
      src: techsec,
      name: "aditya jain",
      position: "technical secretary",
      insta: "https://www.instagram.com/adi_tyaa_26/",
      linkedin:
        "https://www.linkedin.com/in/adityaa26675?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "adityajain@iitg.ac.in",
    },
    {
      src: welfsec,
      name: "paras katiyar",
      position: "welfare secretary",
      insta: "https://www.instagram.com/katiyarparas?igsh=cDR2MGdwaGVjZTFw",
      linkedin:
        "https://www.linkedin.com/in/paras-katiyar-73a1b9289",
      mail: "paras.katiyar@iitg.ac.in",
    },
    {
      src: servsec,
      name: "abhijeet kumar",
      position: "services secretary",
      insta: "",
      linkedin:
        "https://www.linkedin.com/in/abhijeetkumar822?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      mail: "ss.brahmaputra@iitg.ac.in",
    },
    {
      src: sportsec,
      name: "abhishek kumar gond",
      position: "sports secretary",
      insta: "https://www.instagram.com/abhishek_iitg1?utm_source=qr&igsh=MTBieGRwajdpcmxhdQ==",
      linkedin: "https://www.linkedin.com/in/abhishek-kumar-gond-4817ab2ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "abhishek.gond@iitg.ac.in",
    },
    {
      src: maintsec,
      name: "ram mohan reddy",
      position: "maintenance secretary",
      insta:
        "https://www.instagram.com/_vintu_reddy",
      linkedin: "https://www.linkedin.com/in/ram-mohan-reddy-guduri-ab7a85296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      mail: "ms.brahmaputra@iitg.ac.in",
    },
    {
      src: litsec,
      name: "chinmay pankaj torvi",
      position: "literary secretary",
      insta: "",
      linkedin:
        "https://www.linkedin.com/in/chinmay-torvi-0b52372b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "c.torvi@iitg.ac.in",
    },
    {
      src: mediahead,
      name: "pruthvi s h",
      position: "media head",
      insta: "https://www.instagram.com/pruthvishaleholi",
      linkedin:
        "https://www.linkedin.com/in/pruthvi-haleholi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      mail: "h.pruthvi@iitg.ac.in",
    },
  ];
  
  const jointHmc =[
    {
      src: jsp1,
      name: "Uditansh Raghuvanshi",
      position: "Joint sports secretary",
      insta: "https://www.instagram.com/_udit__12?igsh=Yzh6bncza3JnY2Rh",
      linkedin: "https://www.linkedin.com/in/uditansh-raghuvanshi-864ba833a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail : "r.uditansh@iitg.ac.in"
    },
    {
      src: jsp2,
      name: "Divyanshu kumar",
      position: "Joint Sports secretary",
      insta: "https://www.instagram.com/divyanshuc7/",
      linkedin: "https://www.linkedin.com/in/divyanshu-kumar-4806bb342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "divyanshu.kumar@iitg.ac.in"
    },
    {
      src: jtech1,
      name: "Ajinkya Zarapkar",
      position: "Joint Technical Secretary",
      insta: "https://www.instagram.com/_.ajinkya._19",
      linkedin: "https://www.linkedin.com/in/ajinkya-zarapkar-8a87a7317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "z.prashant@iitg.ac.in"
    },
    {
      src: jtech2,
      name: "Sukant Agarwal",
      position: "Joint Technical Secretary",
      insta: "https://www.instagram.com/sukant_557?igsh=b3gxZ2w0NjZremxz",
      linkedin: "https://www.linkedin.com/in/sukant-agrawal-894536317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "a.sukant@iitg.ac.in"
    },
    {
      src: jmaint1,
      name: "Bishal Sutradhar",
      position: "Joint Maintenance Secretary",
      insta: "https://www.instagram.com/__bishal__43?igsh=c3RuN3IyZzhqYjln",
      linkedin: "https://www.linkedin.com/in/bishal-sutradhar-3070a4337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "b.sutradhar@iitg.ac.in"
    },
    {
      src: jmaint2,
      name: "Yash Jaiswal",
      position: "Joint Maintenance Secretary",
      insta: "https://www.instagram.com/its_yash.jaiswal?igsh=MThicnBwMDV3aXV0ZQ==",
      linkedin: "https://www.linkedin.com/in/yash-j-75588131b/",
      mail: "yash.jaiswal@iitg.ac.in"
    },
    {
      src: jcult,
      name: "Shreyash Anand",
      position: "Joint Cultural Secretary",
      insta: "https://www.instagram.com/inquisitor.718/",
      linkedin: "https://www.linkedin.com/in/shreyash-anand-89982a354",
      mail: "a.shreyash@iitg.ac.in"
    },
    {
      src: jwelf,
      name: "Manas Dhote",
      position: "Joint Welfare Secretary",
      insta: "https://www.instagram.com/manasxdhote?igsh=eWVzdDE3c2J3enNj",
      linkedin: "https://www.linkedin.com/in/manas-dhote-199b9b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "d.manas@iitg.ac.in"
    },
    {
      src: jserv,
      name: "Tanmay Satyaj Dwivedi",
      position: "Joint Services Secretary",
      insta: "https://www.instagram.com/rottenlife101?igsh=MWhpemwzbWY3N2wzeQ==",
      linkedin: "https://www.linkedin.com/in/tanmay-satyaj-dwivedi-63a02a330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "t.dwivedi@iitg.ac.in"
    },
    {
      src: jlit,
      name: "Yuva Sai Harshith",
      position: "Joint Literary Seceretary ",
      insta: "",
      linkedin: "https://www.linkedin.com/in/yuva-sai-harshith-267a1a312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "p.harshith@iitg.ac.in"
    },
  ]

  return (
    <div className="council-container">
      <div className="council-heading">
        <hr />
        <h1>COUNCIL</h1>
        <hr />
      </div>

      <div className="warden-wrapper">
        {warden.map((info) => {
          return <Warden warden={info} />;
        })}
      </div>

      <div className="hmc">
        <div className="name" id="sticky">
          <p>HMC</p>
        </div>
        <div className="hmc-wrapper">
          {hmc.map((info) => {
            return <HMC member={info} />;
          })}
        </div>
      </div>
      
      <div className="hmc">
        <div className="name joint-name" id="sticky">
          <p>JOINT</p>
          <p>HMC</p>
        </div>
        <div className="hmc-wrapper">
          {jointHmc.map((info) => {
            return <HMC member={info} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Council;

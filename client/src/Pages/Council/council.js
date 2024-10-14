import "./council.css";
import Warden from "../../Components/warden";
import wardenim from "./assets/1112Arunasis_Chakraborty_1.jpg";
import assward from "./assets/3783faculty.jpg";
import gensec from "./assets/Yasharth_HMC.JPG";
import assgen from "./assets/Anany_HMC.JPG";
import sportsec from "./assets/AryanRaj_HMC.JPG";
import techsec from "./assets/Adi_HMC.jpg";
import cultsec from "./assets/AyushSahu_HMC.JPG";
import welfsec from "./assets/AbhinavG_HMC.JPG";
import maintsec from "./assets/AbhishekSharma_HMC.JPG";
import litsec from "./assets/Ashutosh_HMC.JPG";
import servsec from "./assets/Anupam_HMC.JPG";
import mediahead from "./assets/HarshShukla_HMC.JPG";
import jsp1 from "./assets/joint-sports-2.jpg";
import jsp2 from "./assets/joint-sports-1.jpg";
import jserv from "./assets/joint-serv.jpg";
import jcult from "./assets/joint-cult.jpg";
import jtech from "./assets/joint-tech.jpg";
import jlit from "./assets/joint-lit.jpg";
import jwelf from "./assets/joint-welf.jpg";
import jmaint2 from "./assets/joint-maint-2.jpg";
import jmaint1 from "./assets/joint-maint-1.jpg";
import HMC from "../../Components/hmc"; 
// import "../../Styles/mediaqueries.css";

const Council = () => {
  const warden = [
    {
      src: wardenim,
      name: "Prof. Arunasis Chakraborty",
      position: "WARDEN",
      email: "warden.brahmaputra@iitg.ac.in",
      phone: "+91 361 2582430",
    },
    {
      src: assward,
      name: "Prof. Krishna Pada Bhabak",
      position: "associate warden",
      email: "kbhabak@iitg.ac.in",
      phone: "+91 361 2583476",
    },
  ];

  const hmc = [
    {
      src: gensec,
      name: "yasharth singh",
      position: "general secretary",
      insta:
        "https://www.instagram.com/yasharth.singh01?igsh=MTVwdmhkcWx4d2V6eA==",
      linkedin:
        "https://www.linkedin.com/in/yasharth-singh-458931230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "gs.brahmaputra@iitg.ac.in",
    },
    {
      src: assgen,
      name: "anany sihare",
      position: "assosiate general secretary",
      insta:
        "https://www.instagram.com/anany_sihare27?igsh=MXIxNnk5b25scm1tdw==",
      linkedin:
        "https://www.linkedin.com/in/anany-sihare-a22164262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "anany@iitg.ac.in",
    },
    {
      src: sportsec,
      name: "aryan raj",
      position: "sports secretary",
      insta: "https://www.instagram.com/_aryanr?igsh=cmZzOGVwaHl1YXpq",
      linkedin: "",
      mail: "aryan.raj@iitg.ac.in",
    },
    {
      src: techsec,
      name: "adi Jain",
      position: "technical secretary",
      insta: "https://www.instagram.com/a_d_i_jain?igsh=MWM2ZXhqajdmcGJiOA==",
      linkedin:
        "https://www.linkedin.com/in/adi-jain-230a48261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "j.adi@iitg.ac.in",
    },
    {
      src: cultsec,
      name: "ayush sahu",
      position: "cultural secretary",
      insta: "https://www.instagram.com/ayushh_311?igsh=MWZoN3Y1YXE0dm1hZQ==",
      linkedin:
        "https://www.linkedin.com/in/ayush-sahu-134559262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "ayush.s@iitg.ac.in",
    },
    {
      src: servsec,
      name: "anupam ajey pratap singh",
      position: "services secretary",
      insta: "https://www.instagram.com/i_am.aaps?igsh=NTJxOXV3MXE0ODly",
      linkedin:
        "https://www.linkedin.com/in/anupamaps190605?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "ss.brahmaputra@iitg.ac.in",
    },
    {
      src: welfsec,
      name: "abhinav gundumalla",
      position: "welfare secretary",
      insta: "https://www.instagram.com/abhiinormal?igsh=MW15bHk2bnA3cnE1aQ==",
      linkedin:
        "https://www.linkedin.com/in/abhinav-gundumalla-43a3a0253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "abhinav.g@iitg.ac.in",
    },
    {
      src: maintsec,
      name: "abhishek sharma",
      position: "maintenance secretary",
      insta:
        "https://www.instagram.com/abhsharma9192?igsh=MWlmNm1kMGh3YjdrMw==",
      linkedin: "",
      mail: "ms.brahmaputra@iitg.ac.in",
    },
    {
      src: litsec,
      name: "ashutosh Singh",
      position: "literary secretary",
      insta: "https://www.instagram.com/_ashusng_05?igsh=MTNuM2s1cmc5MDhvMw==",
      linkedin:
        "https://www.linkedin.com/in/ashutosh-singh-6609491b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "ashutosh.snh@iitg.ac.in",
    },
    {
      src: mediahead,
      name: "harsh shukla",
      position: "media head",
      insta: "https://www.instagram.com/shukla._.harsh?igsh=d2ExOTFucDg1eDdm",
      linkedin:
        "https://www.linkedin.com/in/harsh-shukla-245316167?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "harsh.shukla@iitg.ac.in",
    },
  ];
  
  const jointHmc =[
    {
      src: jsp1,
      name: "Arnav tiku",
      position: "Joint sports secretary",
      insta: "https://www.instagram.com/arnav.217?igsh=MW5hMHl0bmw3NjQ0Yw==",
      linkedin: "https://www.linkedin.com/in/arnav-tiku-iitg?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail : "t.arnav@iitg.ac.in"
    },
    {
      src: jsp2,
      name: "Dhiyanesh G",
      position: "Joint Sports secretary",
      insta: "https://www.instagram.com/dhiya.gcj?igsh=aWRvcnBobmk3Z2Uy",
      linkedin: "https://www.linkedin.com/in/dhiyanesh-g-2115432a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "g.dhiyanesh@iitg.ac.in"
    },
    {
      src: jserv,
      name: "Harsha Vardhan Poshala",
      position: "Joint services secretary",
      insta: "https://www.instagram.com/harsha.15._?igsh=MXhiNHpiMGl0aDlweg==",
      linkedin: "https://www.linkedin.com/in/poshala-harsha-vardhan-a05670301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "v.poshala@iitg.ac.in"
    },
    {
      src: jmaint1,
      name: "Abhinav Soni",
      position: "Joint Maintenance Secretary",
      insta: "https://www.instagram.com/abhi9_soni?igsh=dXN1dzk1NDA4dmt5",
      linkedin: "https://www.linkedin.com/in/abhinav-soni-4484b429a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "abhinavs.2001@iitg.ac.in"
    },
    {
      src: jmaint2,
      name: "Rishu Jaiswal",
      position: "Joint Maintenance Secretary",
      insta: "https://www.instagram.com/rishuu.j?igsh=MXhxbHh1aDBxYmRqdA==",
      linkedin: "https://www.linkedin.com/in/rishu-jaiswal-4362152a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "r.jaiswal@iitg.ac.in"
    },
    {
      src: jcult,
      name: "Nimesh Gurjar",
      position: "Joint Cultural  secretary",
      insta: "https://www.instagram.com/itsfrozenmind?igsh=MWVnMDJzNHEwdXA1aA==",
      linkedin: "https://www.linkedin.com/in/nimesh-g-859643286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "g.nimesh@iitg.ac.in"
    },
    {
      src: jwelf,
      name: "Arpit Ranjan",
      position: "Joint welfare secretary",
      insta: "https://www.instagram.com/arpit_2106_?igsh=MTFlcXVodzFrdHRmbA==",
      linkedin: "https://www.linkedin.com/in/arpit-ranjan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "r.arpit@iitg.ac.in"
    },
    {
      src: jlit,
      name: "Chinmay Torvi",
      position: "Joint Literary Seceretary ",
      insta: "",
      linkedin: "https://www.linkedin.com/in/chinmay-torvi-8b48b3287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "c.torvi@iitg.ac.in"
    },
    {
      src: jtech,
      name: "Aditya Jain",
      position: "Joint Technical Secretary",
      insta: "https://www.instagram.com/adi_tyaa_26?utm_source=qr&igsh=MWprYzZhNzh5bm5zMA==",
      linkedin: "https://www.linkedin.com/in/adityaa26675?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "adityajain@iitg.ac.in"
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

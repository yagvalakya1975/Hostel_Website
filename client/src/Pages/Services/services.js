import '../Council/council.css';
import '../Complaints/complaints.css';
import './services.css';

import { MdArrowOutward } from "react-icons/md";
import { useState, useEffect } from 'react';
import PdfViewer from '../../Components/pdfViewer';
import cross from '../../Assets/cross.svg';

const Services = () => {
  const [mess, setMess] = useState(false);
  const [canteen, setCanteen] = useState(false);
  const [serviceLinks, setServiceLinks] = useState({ mess: '', canteen: '' });

  useEffect(() => {
    // Fetch service links from Google Sheet
    fetch("https://opensheet.elk.sh/1xjI4HRQfPdwkL335CvJ5LJwdeO2Zg5Tas4Wa-po6soc/services")
      .then((res) => res.json())
      .then((data) => {
        // Expecting array with 1 object like { Mess: "...", Canteen: "..." }
        const sheetData = data[0] || {};

        // Convert Google Drive "view" links to direct download/viewable PDF links
        const messLink = sheetData.Mess?.replace(
          /\/view\?usp=[^/]+/,
          "/preview"
        );
        const canteenLink = sheetData.Canteen?.replace(
          /\/view\?usp=[^/]+/,
          "/preview"
        );

        setServiceLinks({
          mess: messLink,
          canteen: canteenLink,
        });

        console.log("Fetched service links:", { messLink, canteenLink });
      })
      .catch((err) => console.error("Failed to fetch service links:", err));
  }, []);

  return (
    <div className="council-container">
      <div className="council-heading">
        <hr />
        <h1>SERVICES</h1>
        <hr />
      </div>

      {/* MESS MENU PDF */}
      {mess && (
        <span
          style={{
            position: 'absolute',
            width: 'calc(100vw - 34px)',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <iframe
            src={serviceLinks.mess}
            title="Mess Menu"
            style={{
              width: '90vw',
              height: '90vh',
              border: 'none',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)'
            }}
            allow="autoplay"
          ></iframe>
          <img
            className="pdf-cross"
            src={cross}
            alt=""
            onClick={() => setMess(false)}
            style={{ position: 'absolute' }}
          />
        </span>
      )}

      {canteen && (
        <span
          style={{
            position: 'absolute',
            width: 'calc(100vw - 34px)',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <iframe
            src={serviceLinks.canteen}
            title="Canteen Menu"
            style={{
              width: '90vw',
              height: '90vh',
              border: 'none',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)'
            }}
            allow="autoplay"
          ></iframe>
          <img
            className="pdf-cross"
            src={cross}
            alt=""
            onClick={() => setCanteen(false)}
            style={{ position: 'absolute' }}
          />
        </span>
      )}


      {/* LINKS SECTION */}
      <div>
        <div className="complaints-links complaints-links-2">
          <div className="links links2">
            <div className="linkicon" onClick={() => setMess(true)}>
              MESS MENU
              <MdArrowOutward className="icon" />
            </div>
            <hr />
          </div>

          <div className="links links2">
            <div className="linkicon" onClick={() => setCanteen(true)}>
              CANTEEN MENU
              <MdArrowOutward className="icon" />
            </div>
            <hr />
          </div>

          <div className="links links2">
            <div className="linkicon">
              STATIONARY
              <p style={{ fontSize: '20px' }}>10:30 am - 11:15 pm</p>
            </div>
            <hr />
          </div>

          <div className="links links2">
            <div className="linkicon">
              WASHING MACHINE
              <p style={{ fontSize: '20px' }}>7:00 am - 12:00 am</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
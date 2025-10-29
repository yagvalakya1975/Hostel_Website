import { useEffect, useState } from "react";
import "./complaints.css";
import { MdArrowOutward } from "react-icons/md";

const Complaints = () => {
  const [status, setStatus] = useState('');
  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setStatus(' ');
      }, 5000);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    setStatus('Your Complaint has been submitted');
  };

  return (
    <div className="complaints-container">
      <div className="complaints-heading">
        <hr />
        <h1>COMPLAIN PORTAL</h1>
        <hr />
      </div>

      <div className="complaints-links">
        <div className="links">
          <div className="linkicon">
            <a href="https://www.iitg.ac.in/ipm/complaint/">LAN COMPLAINTS</a>
            <MdArrowOutward className="icon" />
          </div>
          <hr />
        </div>
        <div className="links">
          <div className="linkicon">
            <a href="https://www.iitg.ac.in/cb/">MAINTENANCE COMPLAINTS</a>
            <MdArrowOutward className="icon" />
          </div>
          <hr />
        </div>
        <div className="links">
          <div className="linkicon">
            <a href="mailto:ss.brahmaputra@iitg.ac.in">MESS COMPLAINTS</a>
            <MdArrowOutward className="icon" />
          </div>
          <hr />
        </div>
      </div>

      <div className="form-heading">
        <p>SUBMIT YOUR COMPLAINT</p>
      </div>

      <div className="complaints-form">
        <form
          className="form"
          action="https://docs.google.com/forms/d/e/1FAIpQLScVhHMd3EyFU8CBhKw3EPAR47zdmgH90fn9Jz1y_zrD_mNVzg/formResponse"
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          >
          
          <label htmlFor="Name" className="label">NAME</label>
          <label htmlFor="Mail" className="label">IITG EMAIL</label>

          <input
            type="text"
            className="input1"
            id="Name"
            name="entry.1992745829"
            placeholder="Enter your full name"
            required
          />
          <input
            type="email"
            className="input1"
            id="Mail"
            name="entry.1134057788"
            placeholder="Enter your college email"
            required
          />

          <label htmlFor="Roll" className="label">ROLL NO.</label>
          <label htmlFor="Room" className="label">ROOM NUMBER</label>

          <input
            type="text"
            className="input1"
            id="Roll"
            name="entry.480102135"
            placeholder="Enter your roll number"
            required
          />
          <input
            type="text"
            className="input1"
            id="Room"
            name="entry.1799059936"
            placeholder="Enter your room number"
            required
          />

          <label htmlFor="Phone" className="label">PHONE NUMBER</label>
          <label htmlFor="Degree" className="label">DEGREE (B.Tech/M.Tech/etc.)</label>

          <input
            type="text"
            className="input1"
            id="Phone"
            name="entry.2118880637"
            placeholder="Enter your phone number"
            required
          />
          <input
            type="text"
            className="input1"
            id="Degree"
            name="entry.991367062"
            placeholder="Enter your degree(B.Tech/M.Tech/etc.)"
            required
          />
          
          <label htmlFor="Subject" className="label" style={{ gridColumn: "1 / 3" }}>SUBJECT OR COMPLAINT</label>
          <input
            type="text"
            className="input1"
            id="Subject"
            name="entry.1746593657"
            placeholder="Enter subject"
            style={{ gridColumn: "1 / 3" }}
            required
          />

          <label htmlFor="Body" className="label" style={{ gridColumn: "1 / 3" }}>BODY</label>
          <textarea
            className="input1"
            id="Body"
            name="entry.1342868700"
            placeholder="Write your complaint (max 200 words)"
            style={{ gridColumn: "1 / 3" }}
            required
          />
          
          {(status==='') && (<input type="submit" id="btn" value="SUBMIT" />)}

        </form>

        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
      </div>


      <div className="status">{status}</div>
    </div>
  );
};

export default Complaints;

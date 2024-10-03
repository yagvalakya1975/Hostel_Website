import "./complaints.css";
// import "../../Styles/mediaqueries.css";
import { MdArrowOutward } from "react-icons/md";

const Complaints = () => {
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
            <a href="">LAN COMPLAINTS</a>
            <MdArrowOutward className="icon" />
          </div>
          <hr />
        </div>
        <div className="links">
          <div className="linkicon">
            <a href="">MAINTENANCE COMPLAINTS</a>
            <MdArrowOutward className="icon" />
          </div>

          <hr />
        </div>
        <div className="links">
          <div className="linkicon">
            <a href="">MESS COMPLAINTS</a>
            <MdArrowOutward className="icon" />
          </div>

          <hr />
        </div>
      </div>

      <div className="form-heading">
        <p>SUBMIT YOUR COMPLAINT</p>
      </div>

      <div className="complaints-form">
        <form className="form" action="">
          <label htmlFor="Name" className="label">
            NAME
          </label>
          <label htmlFor="Mail" className="label">
            IITG EMAIL
          </label>
          <input
            type="text"
            className="input1"
            id="Name"
            placeholder="Enter your full name"
          />

          <input
            type="text"
            className="input1"
            id="Mail"
            placeholder="Enter your collage mail"
          />
          <label htmlFor="Phone" className="label">
            PHONE NUMBER
          </label>
          <label htmlFor="Room" className="label">
            ROOM NUMBER
          </label>
          <input
            type="text"
            className="input1"
            id="Phone"
            placeholder="Enter your phone number"
          />

          <input
            type="text"
            className="input1"
            id="Room"
            placeholder="Enter your room number"
          />
          <label htmlFor="Subject" className="label">
            SUBJECT OR COMPLAINT
          </label>
          <input
            type="text"
            className="input2"
            id="Subject"
            placeholder="Enter subject"
          />
          <label htmlFor="Body" className="label">
            BODY
          </label>
          <textArea
            className="input1"
            id="Body"
            placeholder="Write your complaint (max 200 words)"
          />
          <input type="submit" id="btn" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default Complaints;

import { useEffect, useState } from "react";
import "./complaints.css";
import { MdArrowOutward } from "react-icons/md";

const Complaints = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [room, setRoom] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxYEpMU9lciiMzSV1B97rHI_WnvtX2BzXVci3jJ5N__O0eXvUPYNIZy7V5AvyekMq1ZmQ/exec';

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setStatus('');
      }, 5000);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('room', room);
    formData.append('subject', subject);
    formData.append('body', body);
    setStatus('Submitting...'); // Provide immediate feedback to the user
    try {
      await fetch(scriptURL, { method: 'POST', body: formData });
      alert('Thank you! Your form has been submitted successfully.');
      setTimeout(() => {
        window.location.reload();  // Optionally reload after submission
      }, 200);
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('Error submitting form. Please try again later.');
    }
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
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="Name" className="label">NAME</label>
          <label htmlFor="Mail" className="label">IITG EMAIL</label>
          <input
            type="text"
            className="input1"
            id="Name"
            name="name"
            placeholder="Enter your full name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          
          <input
            type="email"
            className="input1"
            id="Mail"
            name="email"
            placeholder="Enter your college email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="Phone" className="label">PHONE NUMBER</label>
          <label htmlFor="Room" className="label">ROOM NUMBER</label>
          <input
            type="text"
            className="input1"
            id="Phone"
            name="phone"
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          
          <input
            type="text"
            className="input1"
            id="Room"
            name="room"
            placeholder="Enter your room number"
            onChange={(e) => setRoom(e.target.value)}
            required
          />

          <label htmlFor="Subject" className="label">SUBJECT OR COMPLAINT</label>
          <input
            type="text"
            className="input2"
            id="Subject"
            name="subject"
            placeholder="Enter subject"
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <label htmlFor="Body" className="label">BODY</label>
          <textarea
            className="input1"
            id="Body"
            name="body"
            placeholder="Write your complaint (max 200 words)"
            onChange={(e) => setBody(e.target.value)}
          />

          <input type="submit" id="btn" value="SUBMIT" />
        </form>
      </div>

      <div className="status">{status}</div>
    </div>
  );
};

export default Complaints;

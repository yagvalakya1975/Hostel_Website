import { useEffect, useState } from "react";
import "./complaints.css";
import axios from 'axios'
// import "../../Styles/mediaqueries.css";
import { MdArrowOutward } from "react-icons/md";

const Complaints = () => {
  
  const [name, setName] = useState('')
  const [email  , setEmail] = useState('')
  const [phone , setPhone] = useState('')
  const [room, setRoom] = useState('')
  const [subject, setSubject] = useState('')
  const [body , setBody] = useState('')
  const [ status , setStatus] = useState('')

  useEffect(()=>{
    setTimeout(()=>{
      setStatus('')
    },5000);
  },[status])

  const handleSubmit = async ()=>{
    try {
      if([name , email , phone , room , subject , body].some((field)=>{return !field})){
        alert('All Fields are necessary for complaint')
        return
      }
      console.log({name:name , email:email , phone:phone , room:room , subject:subject , body:body})
      const response = await axios.post('https://brahmaputrahostel.onrender.com/complaints' , {name:name , email:email , phone:phone , room:room , subject:subject , body:body})
      const data = await response.data
      if(data.error) setStatus('There was an error registering your complaint')
      else setStatus('Your Complaint has been registered')
    } catch (error) {
      setStatus('There was some Network Issues!')
    }
  }

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

      <div className="complaints-form" onSubmit={(e)=>{e.preventDefault()}}>
        <form className="form">
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
            onChange={(e)=>{setName(e.target.value)}}
            required
          />

          <input
            type="text"
            className="input1"
            id="Mail"
            placeholder="Enter your collage mail"
            onChange={(e)=>{setEmail(e.target.value)}}
            required
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
            onChange={(e)=>{setPhone(e.target.value)}}
            required
          />

          <input
            type="text"
            className="input1"
            id="Room"
            placeholder="Enter your room number"
            onChange={(e)=>{setRoom(e.target.value)}}
            required
          />
          <label htmlFor="Subject" className="label">
            SUBJECT OR COMPLAINT
          </label>
          <input
            type="text"
            className="input2"
            id="Subject"
            placeholder="Enter subject"
            onChange={(e)=>{setSubject(e.target.value)}}
            required
          />
          <label htmlFor="Body" className="label">
            BODY
          </label>
          <textArea
            className="input1"
            id="Body"
            placeholder="Write your complaint (max 200 words)"
            onChange={(e)=>{setBody(e.target.value)}}
          />
          <input type="submit" id="btn" value="SUBMIT" onClick={handleSubmit}/>
        </form>
      </div>
      <div style={{color:'red'}}>{status}</div>
    </div>
  );
};

export default Complaints;

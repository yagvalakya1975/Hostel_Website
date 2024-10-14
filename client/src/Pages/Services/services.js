import '../Council/council.css'
import '../Complaints/complaints.css'
import { MdArrowOutward } from "react-icons/md";
import { useState } from 'react';
import PdfViewer from '../../Components/pdfViewer';
import cross from '../../Assets/cross.svg'
import messMenu from '../../Files/mess.pdf'
import canteenMenu from '../../Files/canteen.pdf'
import './services.css'

const Services = () => {
    const [mess , setMess] = useState(false)
    const [canteen , setCanteen] = useState(false)
    return (
      <div className="council-container">
        <div className="council-heading">
          <hr />
          <h1>SERVICES</h1>
          <hr />
        </div>

        {
          mess && 
          <span style={{position:'absolute' , width:'calc(100vw - 34px)' , display:'flex' , justifyContent:'center'}}>
          <PdfViewer path={messMenu}/>
          <img className='pdf-cross' src={cross} alt='' onClick={()=>{setMess(false)}} style={{position:'absolute'}}/>
          </span>
        }
        {
          canteen && 
          <span style={{position:'absolute' , width:'calc(100vw - 34px)' , display:'flex' , justifyContent:'center'}}>
          <PdfViewer path={canteenMenu}/>
          <img className='pdf-cross' src={cross} alt='' onClick={()=>{setCanteen(false)}} style={{position:'absolute'}}/>
          </span>
        }
  
        <div>
        <div className="complaints-links complaints-links-2" >
        <div className="links links2">
          <div className="linkicon"  onClick={()=>{setMess(true)}}>
            MESS MENU
            <MdArrowOutward className="icon"/>
          </div>
          <hr />
        </div>
        <div className="links links2">
          <div className="linkicon" onClick={()=>{setCanteen(true)}}>
            CANTEEN MENU
            <MdArrowOutward className="icon" />
          </div>
          <hr />
        </div>
        <div className="links links2">
          <div className="linkicon">
            STATIONARY
            <p style={{fontSize:'20px'}}>10:30 am - 11:15 pm</p>
          </div>
          <hr />
        </div>
        <div className="links links2">
          <div className="linkicon">
            WASHING MACHINE
            <p style={{fontSize:'20px'}}>7:00 am - 12:00 am</p>
          </div>
          <hr />
        </div>
        </div>
        </div>

      </div>
    );
  };
  
  export default Services;
  
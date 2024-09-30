import logo from '../Assets/logo.png'
import '../Styles/navbar.css'
import {useNavigate} from 'react-router-dom'

const Navbar = ()=>{
    const navigate = useNavigate()
    return(
        <div className="navbar-outer-wrapper">
            <div className="navbar-inner-wrapper">
                <img src={logo} alt=""/>
            </div>
            <div className="navbar-inner-wrapper" style={{display:'none'}}>
                <ul style={{color:'#1F1F1F',listStyle:'none',display:'flex'}}>
                    <li onClick={()=>{navigate('/',{replace:true})}}>Home</li>
                    <li>Council</li>
                    <li onClick={()=>{navigate('/events' , {replace:true})}}>Events</li>
                    <li>Complaint Portal</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
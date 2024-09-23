import logo from '../Assets/logo.png'
import '../Styles/navbar.css'

const Navbar = ()=>{
    return(
        <div className="navbar-outer-wrapper">
            <div className="navbar-inner-wrapper">
                <img src={logo} alt=""/>
            </div>
            <div className="navbar-inner-wrapper">
                <ul style={{color:'#1F1F1F',listStyle:'none',display:'flex'}}>
                    <li>Home</li>
                    <li>Council</li>
                    <li>Events</li>
                    <li>Complaint Portal</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
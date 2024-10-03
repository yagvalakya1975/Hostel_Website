import building from  './assets/building.png'
import gym from './assets/gym.jpg'
import tv from './assets/tv.jpg'
import sports from './assets/sports.jpg'
import Facilities from '../../Components/facilities.js'
import './home.css'
import {useEffect, useState} from 'react'

const Home = ()=>{

    const [current , setCurrent] = useState(0)
    const facilities = [
        {src:tv , name: 'TV ROOM', info:"Whether you're in the mood for a movie night, catching up on your favorite shows, or enjoying live sports, our TV room offers a welcoming space to socialize and connect with your friends."},
        {src:gym , name: 'GYM' , info:"Our gym is a haven for fitness enthusiasts, equipped with state-of-the-art equipment for strength, and flexibility exercises."},
        // {src:gym , name: 'MUSIC ROOM', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
        {src:sports, name: 'SPORTS ROOM', info:"Whether you're a pool shark or a foosball fanatic, our sports room offers a fun atmosphere to challenge fellow mates and make new friends."}
    ]

    useEffect(()=>{
        
        const handleScroll = (event)=>{
            const wrapper = document.querySelector('.facilities-slide-wrapper')
            const scrollTop = event.target.documentElement.scrollTop
            if(wrapper.offsetTop  <= scrollTop){
                const difference = scrollTop - wrapper.offsetTop
                setCurrent(difference/window.innerWidth)
            }
        }

        window.addEventListener('scroll' , handleScroll)
        return()=>{
           window.removeEventListener('scroll' , handleScroll)
        }
    },[])


    return (
        <>
        <div className="heading-wrapper">
            <div className="main-heading">BRAHMAPUTRA</div>
            <div className="sub-heading-wrapper">
                <div>HOSTEL</div>
                <div>THE BIGGEST HOSTEL OF IIT GUWAHATI</div>
            </div>
        </div>

        <div className="info-wrapper">
        Brahmaputra Hostel, housing nearly a thousand students, is IIT Guwahati’s largest boys' hostel. Established in 2011, it accommodates Ph.D., M.Tech, M.Sc, and B.Tech students. The three-story building offers spacious rooms and modern facilities, creating a vibrant hub for academic and extracurricular activities. In a peaceful setting, the hostel fosters innovation and a strong sense of community, reflecting the strength of the Brahmaputra River.
        </div>

        <div className="main-img-wrapper">
            <img src={building} alt=''/>
        </div>

        <div className="facilities-wrapper">
            <div className="facilties-heading">
            FACILITIES  AT  BRAHMAPUTRA <br/> HOSTEL
            </div>

            <div className='facilities-slide-wrapper'>
            <div className='facilities-inner-wrapper'>
                <div className='facilities-serial'>
                    {
                        [1,2,3].map((serial)=>{
                            return(
                                <div className='serial-box' style={{color:current>(serial-1)&&current<=serial?'#8D4F2B':'#F3E2D8'}}>
                                    0{serial}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='facilities-slide-outer' style={{ overflowX:'hidden'}}>
                <div className='facilities-slide' style={window.innerWidth>900?{transform:`translateX(-${100*current}vw )`}:{}}>
                    {
                        facilities.map((facility)=>{
                            return(
                                <Facilities facility={facility}/>
                            )
                        })
                    }
                </div>
                </div>
            </div>
            </div>
                    
        </div>
        </>
    )
}

export default Home
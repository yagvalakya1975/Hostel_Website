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
        {src:tv , name: 'TV ROOM', info:"Whether you're in the mood for a cozy movie night, catching up on your favorite shows, or enjoying live sports, our TV room provides a comfortable and inviting space for you to relax. Perfect spot to unwind, socialize, and share great moments with friends. Whether you're planning a casual gathering or simply want to enjoy some downtime together, the TV room is designed to offer an enjoyable experience for all."},
        {src:gym , name: 'GYM' , info:"Our gym is a welcoming space for fitness enthusiasts of all levels, offering a wide range of state-of-the-art equipment to support your strength training, flexibility exercises, and overall fitness goals. Whether you're looking to maintain your routine or push yourself to new limits, our gym is designed to help you stay motivated and focused. It's a place where you can enjoy your workout in a comfortable, well-equipped environment that caters to both individual and group fitness needs."},
        // {src:gym , name: 'MUSIC ROOM', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
        {src:sports, name: 'SPORTS ROOM', info:"Whether you're a pool shark or a foosball fanatic, our sports room provides a lively and engaging atmosphere where you can challenge your friends or meet new ones. It's the perfect space for friendly competition and socializing, making every game an opportunity to unwind and have fun. Whether you're honing your skills or just playing for the enjoyment of it, our sports room invites everyone to join in the action."}
    ]

    useEffect(()=>{
        
        const handleScroll = (event)=>{
            const wrapper = document.querySelector('.facilities-slide-wrapper')
            const scrollTop = event.target.documentElement.scrollTop
            if(wrapper.offsetTop  <= scrollTop){
                const difference = scrollTop - wrapper.offsetTop
                console.log(difference/window.innerWidth)
                if(difference/window.innerWidth <= 2.01)
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
                <div style={{color:'black'}}>THE BIGGEST HOSTEL OF IIT GUWAHATI</div>
            </div>
        </div>

        <div className='info-outer-wrapper'>
        <div className="info-wrapper">Brahmaputra Hostel at IIT Guwahati, established in 2011-2012, accommodates nearly a thousand students, making it the largest hostel in the institute's history. It houses Ph.D., M.Tech, M.Sc, and B.Tech students in a three-floor building with spacious rooms and facilities. Known for fostering innovation, unity, and enthusiasm, the hostel'
            s vibrant community thrives in an environment as dynamic as the Brahmaputra River.</div>
        </div>

        <div className="main-img-wrapper">
            <img src={building} alt=''/>
        </div>

        <div className="facilities-wrapper">

            <div className='facilities-slide-wrapper'>
            <div className='facilities-inner-wrapper'>
                
            <div className="facilties-heading">
            FACILITIES  AT  BRAHMAPUTRA <br/> HOSTEL
            </div>
                <div className='facilities-serial'>
                    {
                        [1,2,3].map((serial)=>{
                            return(
                                <div className='serial-box' style={{color:current>(serial-1.5)&&current<=(serial-0.5)?'#8D4F2B':'#F3E2D8'}}>
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
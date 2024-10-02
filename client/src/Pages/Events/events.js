import './events.css'
import Event from '../../Components/event.js'
import H1 from './assets/H1.JPG'
import H2 from './assets/H2.JPG'
import H3 from './assets/H3.JPG'
import H4 from './assets/H4.JPG'
import H5 from './assets/H5.JPG'
import H6 from './assets/H6.JPG'
import H7 from './assets/H7.JPG'
import H8 from './assets/H8.JPG'
import H9 from './assets/H9.JPG'
import H10 from './assets/H10.JPG'
import R1 from './assets/R1.jpeg'
import R2 from './assets/R2.jpg'
import R3 from './assets/R3.jpg'
import R4 from './assets/R4.JPG'
import R5 from './assets/R5.JPG'
import R6 from './assets/R6.JPG'
import R7 from './assets/R7.JPG'
import R8 from './assets/R8.JPG'
import J1 from './assets/J1.jpeg'
import J2 from './assets/J2.jpg'
import J3 from './assets/J3.jpg'
import J4 from './assets/J4.jpeg'
import J5 from './assets/J5.jpeg'
import I1 from './assets/I1.jpg'
import I2 from './assets/I2.jpg'
import I3 from './assets/I3.jpg'
import I4 from './assets/I4.jpg'
import I5 from './assets/I5.jpg'
import I6 from './assets/I6.jpg'
import I7 from './assets/I7.jpg'

const Events = ()=>{
    const data = [
        {
            name:'RAMLEELA',
            info:"Our hostel's Ramleela event, performed by freshers is a vibrant and engaging celebration,bringing the epic tale of Lord Rama to life through dramatic performances, traditional music, dance,and lively storytelling. ",
            img:[R1 , R2 , R3, R4, R5, R6, R7, R8]
        },
        {
            name:'HOSTEL DAY',
            info:"On April every year, Brahmaputra celebrates its hostel day. A day wherewe celebrate our Grandeur, our victories and the spirit of our hostel unity. Bejeweled and bedecked as a newly wed bride, the hostel lights up with multicoloured lighting and beautiful décor.On this day, we bid farewell to ourseniors, stalwart people who guide usthroughout our year. To finish it all off,we have a special dinner",
            img:[H1 , H2 , H3 , H4 , H5 , H6 , H8, H9 , H10]
        },
        {
            name:'INDEPENDENCE DAY',
            info:"On August 15th every year, we celebrate Independence Day with a flag hoisting ceremony, followed by a spirited parade led by sophomores. We also participate in the inter-hostel parade competition with great enthusiasm and team spirit.",
            img:[I4,I1 , I2, I5, I6 , I7]
        },
        {
            name:'JANMASHTAMI',
            info:"Our hostel's Janmashtami event is a lively and joyous celebration,featuring Aarti, and the exciting Dahi Handi(matka) breaking ceremony, offering aunique cultural experience.",
            img:[J1 , J2, J3 , J4 , J5]
        }
        
    ]
    return(
        <>
        <div className="facilties-heading" id='events-heading'>
            EVENTS
        </div>

        <div className="events-outer-wrapper">
            {
                data.map((event)=>{
                    return(
                        <Event event={event}/>
                    )
                })
            }
        </div>
        </>
    )
}

export default Events
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Components/navbar.js';
import Home from './Pages/Home/home.js';
import Events from './Pages/Events/events.js';

function App() {
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/events' element={<Events/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
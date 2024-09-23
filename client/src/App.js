import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Components/navbar.js';
import Home from './Pages/Home/home.js';

function App() {
  return(
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
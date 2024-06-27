import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Footer from './Components/GlobalComponents/Footer'
import Navbar from './Components/GlobalComponents/Navbar'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import ContactUsPage from './Pages/ContactUsPage'
import ServicePage from './Pages/ServicePage'


function App() {

  return (
    <>
      <Navbar/>

      <Routes>
          <Route path='/' element={ <HomePage/>} />
          <Route path='/about-us' element={ <AboutUs/>} />
          <Route path='/Contact-us' element={ <ContactUsPage/>}/>
          <Route path='/Services' element={ <ServicePage/>}/>
      </Routes>
      <Footer/>
       
    </>
  )
}

export default App

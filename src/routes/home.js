import Destination from '../component/Destination';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import TripService from '../component/TripService';
import homeImage from '../assets/IMG-20240517-WA0014.jpg'
import Button from '../component/DisableElevation'

function home() {
  return (
    <>
    <Navbar/>

    

    <Hero 
    Cname="hero"
    heroImg= {homeImage}
    
    title="Your Journey Your Story"
    
    />

 <Button/>
 
    <Destination/>

    <TripService/>

    <br />

    <Footer/>
    </>
  )
}

export default home;

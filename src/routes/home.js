import Destination from '../component/Destination';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import TripService from '../component/TripService';


function home() {
  return (
    <>
    <Navbar/>

    <Hero 
    Cname="hero"
    heroImg="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6718.jpg?w=996&t=st=1707230087~exp=1707230687~hmac=f2cc92ab7897f0b9a0058bcc66c4827ff42dd59d6b6b4d1885a9eee6215def0e"
    
    title="Your Journey Your Story"
    text="Jet set with us  Where style meets adventure"
    buttontext="Travel Plan"
    url="/"
    btnclass="show"
    />

    <Destination/>

    <TripService/>

    <Footer/>
    </>
  )
}

export default home;

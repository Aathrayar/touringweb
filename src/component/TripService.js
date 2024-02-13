import './TripService.css'
import TripServiceData from './TripServiceData'


function TripService() {
  return (
    <div>
      <div className='trip'>

        <h1>
            <center>Recent Trips</center>
        </h1>
        <br />
       
   

        <div className='tripcardss'>
<br />
<TripServiceData
        
    image = "https://images.unsplash.com/photo-1642095012245-bda8033e8ee3?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    heading = "Ceylon Landmarks"
    text = "Ceylon Landmarks-Experience the diverse wonders of Sri Lanka with our 8-day tour covering different parts of this captivating island nation. From ancient cities and lush tea plantations to pristine beaches and wildlife-rich national parks, this itinerary offers explorations to must vist places in Sri Lanka."

    />

<TripServiceData
        
        image = "https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading = "Sea Excursions"
        text = "Sea and Sun Tour -Sri Lanka offers a variety of water activities for adventure enthusiasts and those seeking relaxation by the sea Explore the vibrant underwater world of coral reefs and marine life,discover the mesmerizing depths of the Indian Ocean with scuba diving expeditions,Sri Lanka boasts excellent surf breaks along its coastline, suitable for all levels of surfers"
    
        />

<TripServiceData
        
        image = "https://images.unsplash.com/photo-1463694775559-eea25626346b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading = "Wilderness Trekking"
        text = "WildernessTrekking  Our hiking tours are carefully curated to cater to adventurers of all skill levels, whether you're an experienced trekker seeking a challenging ascent or a novice hiker looking for a leisurely stroll amidst nature's wonders. Along the way, you'll encounter friendly locals, sample delicious cuisine, and gain insights into the rich cultural heritage that defines Sri Lanka."
    
        />    

        </div>
        
 
      </div>
    </div>
  )
}

export default TripService

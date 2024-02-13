
function TripServiceData(props) {
  return (
    <div>

      <div className="t-card">

        <div className="t-image">

    <div className="imagesize">
        
    <img src={props.image} alt="img1" />

    </div>
    
    <h4>
        {props.heading}
    </h4>

    <p>
        {props.text}
    </p>

        </div>

      </div>

    </div>
  )
}

export default TripServiceData

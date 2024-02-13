import "./HeroStyles.css"

function Hero(props) {
    
  return (

    <div className={props.Cname}>

<img className="background-image" src={props.heroImg} alt="HeroImg" />




    <div className="hero-text">

    <h1><center>{props.title}</center></h1>
    <p><center>{props.text}</center></p>

    </div>

    <a  href={props.url} className={props.btnclass}>
    {props.buttontext}
</a>
    </div>
  )
}

export default Hero

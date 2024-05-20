
import "./FooterStyles.css"


const Footer = () => {
  return (

    <div className='footer'>
      <div className='top'>

        <div className='logo'>
            <h1>
            gratify tours
            </h1>
        </div>

        <div className= "socialmediaicons">

          <a href="https://www.facebook.com/profile.php?id=61554348149494&mibextid=ZbWKwL">
            <i className='fa-brands fa-facebook-square'></i>
          </a>

          <a href="https://www.instagram.com/the_gratify_tours?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D">
            <i className='fa-brands fa-instagram-square'></i>
          </a>

          <a href="/">
            <i className='fa-brands fa-twitter-square'></i>
          </a>  

        </div>

      </div>

      <div className='bottom'>

      </div>
    </div>
  )
}

export default Footer;

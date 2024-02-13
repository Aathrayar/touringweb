
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

        <div>
            <h4>
                Project
            </h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">Licence</a>
            <a href="/">All versions</a>
        </div>

        <div>
            <h4>
                Community
            </h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
        </div>

        <div>
            <h4>
                Help
            </h4>
            <a href="/">Support</a>
            <a href="/">TroubleShooting</a>
            <a href="/">Contact Us</a>
        </div>

        <div>
            <h4>
                Others
            </h4>
            <a href="/">Terms of Services</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Licence</a>
        </div>

      </div>
    </div>
  )
}

export default Footer;

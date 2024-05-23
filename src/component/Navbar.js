import React, { Component } from 'react'
import "./NavbarStyles.css"
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom';


class Navbar extends Component
{
    state = {clicked: false};
    handleclick = () => {this.setState({clicked: !this.state.clicked})}
    render()
    {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>
                    gratify tours
                </h1>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"} >  
                    
                {MenuItems && MenuItems.map((item, index) =>
                 (
                    <li key={index}>

                      <Link className={item.cName} to={item.url}>
                      {item.title}
                      </Link>
                      
                    </li>
))}
                </ul>

   
                <div className='menu-icons' onClick={this.handleclick}>
                   <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                  
                </div>

            </nav>
            
        )
    }
}


export default Navbar

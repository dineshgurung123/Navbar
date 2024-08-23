import React from 'react'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import './Navbar.css'



const Navbar = ({theme, setTheme}) => {
  
  const toogle_mode = ()=>{

   theme == 'light' ? setTheme('dark') : setTheme('light');

  }
  
  
  
    return (
    <div className='navbar'>
      
    <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo' />
     
     <ul>
        <li>Home</li>
        <li>About us</li>
        <li>service</li>
        <li>contact</li>
     </ul>

    <div className="search-box">
        <input type="text" placeholder='search' />
        <img src={search_icon_light} alt="" />
    </div>

    <img  onClick={()=> {toogle_mode()}}  src= {theme == 'dark' ? toogle_light: toogle_dark} alt=""  className='toggle-icon'/>

    </div>
  )
}

export default Navbar

import React from 'react';
import "./Header.css";
import {faHouseCircleCheck, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <header className='navbar'>
      <div className='header'>
        {/* logo*/}
          <div className='logo'>
            <FontAwesomeIcon className="logoicon" icon={faHouseCircleCheck}/>
            <h2>Estatery</h2>
          </div>
        {/* buttons */}
          <div className='headerList'>
            <div className="headerListItem active"> 
              <span>Rent</span>
            </div>
            <div className="headerListItem"> 
              <span>Buy</span>
            </div>
            <div className="headerListItem"> 
              <span>Sell</span>
            </div>
            <div className="headerListItem"> 
              <span>Manage Property</span>
              <FontAwesomeIcon className="icon" icon={faAngleDown}/>
            </div>
            <div className="headerListItem"> 
              <span>Resources</span>
              <FontAwesomeIcon className="icon" icon={faAngleDown}/>
            </div>
          </div>
        {/* login or sign up*/}
        <div className='headerLogin'>
          <button className='loginBtn'>Login</button>
          <button className='signupBtn'>Sign up</button>
        </div>
      </div>  
    </header>
  )
}

export default Header
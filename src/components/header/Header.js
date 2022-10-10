import React, { useState } from 'react';
import "./Header.css";
import { faAngleDown, faHeart,faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoIcon from "./home.png";
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
function Header({type}) {
  const [{ user, wishlist }] = useStateValue();
  console.log(type);
  const logout = ()=>{
    if(user){
      auth.signOut();
    }
  }
   
  return (
    <header className='navbar'>
      <div className='header'>
        {/* logo*/}
        <div className='logo'>
          <img src={logoIcon} alt="" className="headerLogoImg" />
          <h2>Estatery</h2>
        </div>
        {/* buttons */}
        <div className='headerList'>
          <Link to="/" className={`headerListItem ${type === "homepage" ? "active" : ""}`}>
            <span>Rent</span>
          </Link>
          <div className="headerListItem">
            <span>Buy</span>
          </div>
          <div className="headerListItem">
            <span>Sell</span>
          </div>
          <div className="headerListItem">
            <span>Manage Property</span>
            <FontAwesomeIcon className="icon" icon={faAngleDown} />
          </div>
          <div className="headerListItem">
            <span>Resources</span>
            <FontAwesomeIcon className="icon" icon={faAngleDown} />
          </div>
          {type === "wishlistpage" &&
            <Link to='/wishlist' className="headerListItem active">
              <span>Wishlist</span>
              <FontAwesomeIcon className="iconWish" icon={faHeart} />
              <span cl>{wishlist?.length}</span>
            </Link>
          }
          {type !== "wishlistpage" &&
            <Link to='/wishlist' className="headerListItem">
              <span>Wishlist</span>
              <FontAwesomeIcon className="iconWish" icon={faHeart} />
              <span cl>{wishlist?.length}</span>
            </Link>
          }

        </div>
        {/* login or sign up*/}
        { !user && 
          <div className='headerLogin'>
          <Link to="/login" type="login">
            <button className='loginBtn'>Login</button>
          </Link>
          <Link to="/signup">
            <button className='signupBtn'>Sign up</button>
          </Link>
        </div>
        }
        { user && 
          <div className='headerLogin'>
            <div className='userName'>
              <FontAwesomeIcon icon={faUser}/>
              <span>{user.email.substring(0,user.email.indexOf('@'))}</span>
            </div>
            <button onClick={logout} className='signupBtn'>Sign out</button>
          </div>
        }
      </div>
    </header>
  )
}

export default Header
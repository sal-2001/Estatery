import React from 'react'
import "./Home.css";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filter from '../../components/filter/Filter';
function Home() {
  
  return (
    <div className='home'>
      <div className='featured'>
        <h1>Search properties to rent</h1>
        <div className='search'>
          <input type="search" placeholder='Search with Search Bar' className='searchbar'/>
          <FontAwesomeIcon className="searchicon" icon={faAngleDown}/>
        </div>
      </div>
      {/*Filter container*/}
      <Filter/> 
    </div>
  )
}

export default Home
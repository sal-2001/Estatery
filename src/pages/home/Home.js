import React from 'react'
import "./Home.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from '../../components/header/Header';
import Filter from '../../components/filter/Filter';
import Footer from '../../components/footer/Footer';
function Home() {
  return (
    <>
      {/*Header*/}
      <Header type="homepage" />
      <div className='home'>
        <div className='featured'>
          <h1>Search properties to rent</h1>
          <div className='search'>
            <input type="search" placeholder='Search with Search Bar' className='searchBar' />
            <FontAwesomeIcon className="searchIcon" icon={faAngleDown} />
          </div>
        </div>
        {/*Filter container*/}
        <Filter />
      </div>
      {/*Footer*/}
      <Footer />
    </>
  )
}

export default Home
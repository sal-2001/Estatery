import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useStateValue } from '../../StateProvider';
import Item from '../../components/items/Item';
import "./WishList.css";

function WishList() {
  const [{wishlist}] = useStateValue();
  console.log("wishpage",wishlist.length);
  return (
    <>
      <Header type={"wishlistpage"}/>
      <div className='wishlist'>
        <h1>{wishlist.length? "Your Wishlist": "Your Wishlist is Empty"}</h1>
        <div className='wishlistItems'>
          {wishlist.map( each => {
          return <Item key={each.id} each={each}/>
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default WishList;
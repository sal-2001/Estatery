import React, { useState } from 'react';
import "./Item.css"; 
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {faBed, faBathtub, faLayerGroup, faHeart as faSolidHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Item({each}) {
    const {title, imgUrl, address, price, beds, bathrooms, area, popular, wishlist} = each;
    const [wish, setWish] = useState(wishlist);
    const handleClick = () =>{
        setWish(!wish);
    }
    return( 
        <div className='item'>
            <div>
                {/*Item image*/}
             <img src={imgUrl} alt="" className='itemImg'/>
            </div>
            {/*Item popular or not*/}
            {popular===true &&
             <div className='porpularity'>
                <span><FontAwesomeIcon className='itemPopIcon' icon={faStar} /> Popular</span>   
            </div>}
            {/*Item details*/}
            <div className='itemDetails'>
                <div className='priceList'>
                    <p className='priceText'><span className='itemPrice'>{`₹ ${price}`}</span>{` /month`}</p>
                    <FontAwesomeIcon  icon={ wish? faSolidHeart : faHeart} className='heartIcon'  onClick={()=>handleClick()}/>
                </div>    
                <div className='itemAddress'>
                <span className='itemTitle'>{title}</span><br/>
                <span className='itemLocation'>{address}</span>
                <hr/>
                <div className='subDetails'>
                    <span><FontAwesomeIcon className='itemIcon' icon={faBed} /> {` ${beds} Beds`}</span>
                    <span><FontAwesomeIcon className='itemIcon' icon={faBathtub} /> {` ${bathrooms} Bathrooms`}</span>
                    <span><FontAwesomeIcon className='itemIcon' icon={faLayerGroup} /> {` ${area} sq.ft.` }</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
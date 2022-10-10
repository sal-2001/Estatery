import React, { useState } from 'react';
import "./Item.css"; 
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {faBed, faBathtub, faLayerGroup, faHeart as faSolidHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStateValue } from '../../StateProvider';
function Item({each}) {
    const {id, title, imgUrl, address,location, price, beds, bathrooms, area,date,proptyepe, popular, wishlisted} = each;
    const [{wishlist}, dispatch] = useStateValue();
    const [wish, setWish] = useState(wishlisted);
    const handleClick = () =>{
        setWish(!wish);
        if(!wish)
        {
            dispatch({
                type: "ADD_TO_WISHLIST",
                item:{
                    id:id,
                    title: title,
                    imgUrl: imgUrl,
                    address: location,
                    location: location,
                    price: price,
                    beds: beds,
                    bathrooms: bathrooms,
                    area: area,
                    date: date,
                    proptyepe: proptyepe,
                    popular: popular,
                    wishlisted: true,
                }
            })
            console.log(wishlist.length);
            return;
        }else{
            dispatch({
                type: "REMOVE_FROM_WISHLIST",
                id: id,
            })
            console.log(wishlist.length);
            return;
        }
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
                    <FontAwesomeIcon  
                    icon={ wish? faSolidHeart : faHeart}
                     className='heartIcon'  
                     onClick={handleClick}/>
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
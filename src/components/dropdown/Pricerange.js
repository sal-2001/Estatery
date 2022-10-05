import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./Dropdown.css";
import {useStateValue} from "../../StateProvider";
function Pricerange() {
    const prices = [
        'Price (Any)',' <₹5000', ' ₹5000-₹7999', ' ₹8000-₹11999', ' ₹12000-₹15000',
    ];
    const [{price}, setPrice] = useStateValue();
    const handleChange = (value)=>{
        setPrice({
            type: "SET_PRICE",
            price: value.value
        })
        //console.log(value);
    }
    return (
     <div className='pricerange'>
        <form>
            <label for="price" className='priceLabel'>
                <span>
                  Price
                </span>
            </label>
            <div id="price">
                <Dropdown  
                id="pricevals" 
                options={prices} 
                value={price}
                placeholder="Select an option" 
                onChange={(value)=>handleChange(value)}
                />
            </div>  
        </form>
    </div>
  )
}

export default Pricerange
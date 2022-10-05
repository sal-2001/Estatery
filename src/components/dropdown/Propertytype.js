import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./Dropdown.css";
import {useStateValue} from "../../StateProvider";
function Propertytype() {
    const proptypes = [ 
        'Property (Any)', 'Villa', 'Apartment', 'Hotel', 'Lodging'
    ];
    const [{proptype}, setProperty] = useStateValue();
    const handleChange = (value) =>{
      setProperty({
        type: "SET_PROPERTYTYPE",
        proptype: value.value
      })
      //console.log(value);
    }
    return (
     <div className='propertyType'>
        <form>
            <label for="property" className='propLabel'>
                <span>
                  Property Type
                </span>
            </label>
            <div id="property">
            <Dropdown  
            options={proptypes} 
            value={proptype} 
            placeholder={proptype}
            onChange={(value)=>handleChange(value)}
            />
            </div>
            
        </form>
    </div>
  )
}

export default Propertytype
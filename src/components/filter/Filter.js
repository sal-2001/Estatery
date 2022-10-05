import React, { useState } from 'react';
import "./Filter.css";
import Location from "../dropdown/Location";
import Daterange from "../dropdown/Daterange";
import Pricerange from "../dropdown/Pricerange";
import Propertytype from "../dropdown/Propertytype";
import {useStateValue} from "../../StateProvider";
import Item from '../items/Item';
import { propertylist } from '../../PropertyList';
function Filter() {
  const [{location, date, price, proptype}] = useStateValue();
  const [finalProperty, setFinalProperty] = useState([]);
  const [search, setSearch] = useState(false);
  {/*Filtering the price*/}
  const checkPrice = (value) =>
  {
            var pricerange = price.match(/\d+/g);
            if(pricerange)
            {
              if(pricerange.length===1 && pricerange[0] > value.price)
              {
                console.log(pricerange);
                return true;
              }else if(pricerange.length ===2 && pricerange[0] <= value.price && pricerange[1] >= value.price)
              {
                console.log(pricerange);
                return true;
              }
            }else
            {
              return true;
            }  
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearch(true);
    setFinalProperty([]);
    propertylist.forEach((each)=>
    {
      if(location==="Location (Any)" || location===each.location)
      {
            
        if(proptype === "Property (Any)" || proptype === each.proptype)
          {
            
            if(checkPrice(each))
            {
              if(date>=each.date)
              {
                setFinalProperty((preState)=>([...preState,each]));
              }
            }                                   
          } 
      }
    })
    console.log({location, date, price, proptype, finalProperty});
  }
  return (
     <div>
      <form className='filter'>
        {/*Filtering based on location*/}
        <Location/>
        {/*Filtering based on availabile date*/}
        <Daterange/>
        {/*Filtering based on price range*/}
        <Pricerange/>
        {/*Filtering based on property type*/}
        <Propertytype/>
        {/*search based on filter*/}
        <button type="submit" onClick={handleSubmit} className='filterBtn'>Search</button>
      </form> 
      <div className="items">
      {/*Display Items after filtering*/}
      {search && finalProperty.map( each => {
        return <Item key={each.id} each={each} />
      })}
      </div>  
     </div> 
        
  )
}

export default Filter
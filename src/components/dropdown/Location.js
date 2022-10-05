import React from 'react';
import "./Dropdown.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useStateValue} from "../../StateProvider";
function Location() {
  const locations = [ 
     'Location (Any)','Mumbai', 'Bangalore', 'Delhi', 'Hyderabad'
  ];
  const [{location}, setLocation] = useStateValue();
  const handleChange = (value) =>
  {
    setLocation({
      type: "SET_LOCATION",
      location: value.value
    })
    //console.log(location);
  }
  return (
    <div className='location'>
        <form>
            <label for="locate" className='locationLabel'>
                <span>
                  Location 
                </span> 
                <FontAwesomeIcon className="filterIcon" icon={faLocationDot}/>
                </label>
                <br/>
                <div id="property">
                <Dropdown  
                options={locations} 
                valu={location} 
                placeholder={location}
                onChange={(value)=>handleChange(value)}
                />
                </div>
        </form>
    </div>
  )
}
export default Location;
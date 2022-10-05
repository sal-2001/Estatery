import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Dropdown.css";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useStateValue} from "../../StateProvider";
function Daterange() {
  const [date, setDate] = useStateValue();
  const [startDate, setStartDate] = useState(new Date());
    const handleChange = (value) =>{
      setStartDate(value);
      setDate({
        type: "SET_DATE",
        date: startDate
      })
      console.log(value);
    }
  return (
    <div className='dateRange'>
        <form>
            <label for="date" className='dateLabel'>
                <span>
                  When
                </span>
            </label>
                <div id='date'> 
                    <DatePicker
                    className="datePicker"
                    selected={startDate}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    onChange={(value) => handleChange(value)}
                    />
                    <FontAwesomeIcon className="calendarIcon" icon={faCalendarDays} />
                </div>
        </form>
    </div>
  )
}

export default Daterange;
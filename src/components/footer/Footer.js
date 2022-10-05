import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                    <li className="fListItem">Airports</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Homes </li>
                    <li className="fListItem">Apartments </li>
                    <li className="fListItem">Villas</li>
                    <li className="fListItem">Hostels</li>
                    <li className="fListItem">Guest houses</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Curtomer Service</li>
                    <li className="fListItem">Partner Help</li>
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Investor relations</li>
                    <li className="fListItem">Terms & conditions</li>
                </ul>
            </div> 
            <div className="ftext">Copyright © 2022 Estatery</div>
        </div>
  )
}

export default Footer
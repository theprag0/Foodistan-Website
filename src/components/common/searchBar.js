import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { FiSearch } from 'react-icons/fi';

export default function searchBar() {       // all the CSS of this search bar is in landing.css file
  return ( 
    <div className="row container-fluid search">
      <div className="col-md-3"></div>
      <div className="outer-search-bar-2">
        <div className="col-md-6 search-bar-2">
          <div className="location-container">
            <div className="location-wrapper-2">
              <div className="location-icon-name">
                <TiLocation className="absolute-center location-icon" />
                <div>
                  <span className="home-text">Home</span>
                  <br /> Rohini, Delhi
                </div>
              </div>
            </div>
          </div>
          <div className="input-search-bar-2">
            <FiSearch className="search-icon absolute-center" />
            <input placeholder="Search Cuisines" className="search-input " />
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
}

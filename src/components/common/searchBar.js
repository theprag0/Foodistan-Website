import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { FiSearch } from 'react-icons/fi';

export default function searchBar() {
  return (
    <div className="row container-fluid search">
      <div className="col-3"></div>
      <div className="outer-sear-bar">
        <div className="col-6 search-bar">
          <div className="location-container">
            <div className="location-wrapper">
              <div className="location-icon-name">
                <TiLocation className="absolute-center location-icon" />
                <div>
                  <span className="home-text">Home</span>
                  <br /> Rohini, Delhi
                </div>
              </div>
            </div>
          </div>
          <div className="input-search-bar absolute-center">
            <FiSearch className="search-icon" />
            <input placeholder="Search Cuisines" className="search-input" />
          </div>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
}

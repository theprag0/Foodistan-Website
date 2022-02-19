import React, { useEffect, useState } from 'react';
import { TiLocation } from 'react-icons/ti';
import { FiSearch } from 'react-icons/fi';
import { database } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../css/searchBar.css';
export default function SearchBar() {
  // all the CSS of this search bar is in landing.css file

  const [state, setState] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchdatahandler = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const querySnapshot = await getDocs(collection(database, 'DummyData'));

        const loadedData = [];
        querySnapshot.forEach((doc) => {
          loadedData.push(doc.data());
        });

        setRestaurants(loadedData);
        //console.log(loadedData);
        setIsLoading(false);
      } catch (err) {
        setError('Something went wrong!!');
        setIsLoading(false);
      }
    };

    fetchdatahandler();
  }, []);

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = restaurants.filter((restaurant) => {
        const regex = new RegExp(`${text}`, 'gi');
        return restaurant.search.match(regex);
      });
    }

    setSuggestions(matches);
    setText(text);
  };

  let cssClass = "noSuggestionList"

  if (suggestions.length >= 1) {
    cssClass = "suggestionList"
  }

  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className='col-md-8 search'>
      <div className="outer-search-bar-2">
        <div className="search-bar-2">
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
            <input
              placeholder="Search Cuisines"
              className="search-input "
              value={text}
              onChange={(e) => onChangeHandler(e.target.value)}
              onBlur={() => {
                setTimeout(() => {
                  setSuggestions([])
                }, 300)
              }}
            />
          </div>
        </div>
        <div className={cssClass}>
          {suggestions.map((suggestion, i) =>
            <Link to={`/restaurant/${suggestion.id}`}>
              <div
                className="search-input suggestion"
                key={i}
                onClick={() => onSuggestHandler(suggestion.Name)}>
                <span><img style={{ height: '5.5rem', weight: '5rem' }} src={suggestion.FoodImage} alt="food" /></span>
                <div className="suggestionName">
                  {suggestion.Name}
                </div>
              </div>
            </Link>
          )}

        </div>
        <div>
          {suggestions.length==0 && text.length!=0 && <div className="noResultText">
            <div>
          No Results Found</div>
          </div>}

        </div>
      </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

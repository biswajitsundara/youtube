import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../util/appSlice";
import { YOUTUBE_SEARCH_API } from "../../util/constants";
import {cacheResults} from "../../util/searchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search);
  const dispatch = useDispatch();


  useEffect(() => {
    //Make the API call after every keypress
    //If the difference between keystrokes is < 200ms
    //decline the API call.

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }
      else {
        getSearchSuggestions();
      }
        
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API search = " + searchQuery);
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);
    //console.log(data[1]);

    //update the cache
    dispatch(cacheResults({
      [searchQuery]: data[1]
    }));

  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      {/* 1. Left part */}
      <div
        className="flex col-span-1"
        name="header-left"
        onClick={toggleMenuHandler}
      >
        <img
          className="h-10 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
          alt="hamburger"
        />
        <img
          className="h-10 mx-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="logo"
        />
      </div>

      {/* 2. Middle part */}
      <div className="col-span-10 px-10" name="header-middle">
        <div>
          <input
            type="text"
            className="px-5 p-2 w-1/2 rounded-l-full border border-gray-400"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="p-2 px-4 border border-gray-400 text-white rounded-md rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed py-2 px-5 bg-white w-[36.5rem] shadow-lg rounded-lg">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 cursor-pointer hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 3. Right part */}
      <div name="header-right">
        <img
          className="h-10"
          src="https://as1.ftcdn.net/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Head;

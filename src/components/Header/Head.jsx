import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../util/appSlice";
import { YOUTUBE_SEARCH_API } from "../../util/constants";
import { cacheResults } from "../../util/searchSlice";
import hamberger from "../../assets/svgs/hamberger.svg";
import ytlogo from "../../assets/svgs/ytlogo.svg";
import searchicon from "../../assets/svgs/search.svg";
import profile from "../../assets/svgs/profile.svg";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
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
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col pt-2">
      {/* 1. Left part */}
      <div
        className="flex col-span-1"
        name="header-left"
        onClick={toggleMenuHandler}
      >
        <img
          className="ml-4 mr-4 w-6 h-13 hover:bg-gray-100 cursor-pointer"
          src={hamberger}
          alt="hamburger"
        />
        <img className="w-24 h-13" src={ytlogo} alt="logo" />
      </div>

      {/* 2. Middle part */}
      <div className="col-span-10 px-10" name="header-middle">
        <div className="flex justify-center align-middle">
          <input
            type="text"
            className="w-1/2 border border-gray-400 h-10 rounded-l-full px-4 outline-none focus:border-blue-500 focus:border-2"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="h-10  border border-gray-400 px-4 rounded-r-full bg-gray-100">
            <img src={searchicon} alt="" className="w-6" />
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed bg-white ml-60 py-2 w-[34rem] rounded-lg shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 hover:bg-gray-100 px-5 flex"
                >
                  <img src={searchicon} alt="" className="mr-2"/> <span> {suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 3. Right part */}
      <div name="header-right">
        <img src={profile} alt="" className="w-8" />
      </div>
    </div>
  );
}

export default Head;

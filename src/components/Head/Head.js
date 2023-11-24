import hamberger from '../../assets/svgs/hamberger.svg';
import ytlogo from '../../assets/svgs/ytlogo.svg';
import searchicon from '../../assets/svgs/search.svg';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../utils/appSlice';
import { useEffect, useState } from 'react';

const Head = () => {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    

    useEffect(()=>{

        //Make an API call after every key press
        //but if the difference between 2 API call is <200ms
        //decline the API call
        console.log(searchQuery);
    },[searchQuery])

    // const getSuggestions = () =>{
    //   const data = await fetch(YOUTUBE_SEARCH_API + query);
    //   const json = await data.json();
    //   console.log(json);
    // }

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }
    return ( <>
    <div className="grid grid-flow-col shadow-lg pt-2">
        <div className="flex col-span-1">
        {/* <div className='hover:bg-gray-500 cursor-pointer hover:rounded-s-full hover:rounded-e-full ml-3 h-12 p-2'>Hello</div> */}
        <img src={hamberger} alt="" className="ml-4 mr-4 w-6 h-13 hover:bg-gray-100 cursor-pointer" onClick={toggleMenuHandler}/>
        <img src={ytlogo} alt="" className="w-24 h-13"/>
        </div>

        <div className="flex col-span-10 justify-center align-middle">
            <input type="text" placeholder="Search" className="w-1/2 border border-gray-400 h-10 rounded-l-full px-4" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
            <button className="h-10  border border-gray-400 px-4 rounded-r-full bg-gray-100"><img src={searchicon} alt="" className="w-6"/></button>
        </div>

        <div className="col-span-1">
            <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" className="w-14"/>
        </div>
       
    </div>
    </> );
}
 
export default Head;
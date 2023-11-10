const Head = () => {
    return ( <>
    <div className="grid grid-flow-col shadow-lg pt-2">
        <div className="flex col-span-1">
        <img src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="" className="w-14 h-13 mr-4"/>
        <img src="https://i.gadgets360cdn.com/large/youtube_logo_new_official_1504077880072.jpg" alt="" className="w-28 h-13"/>
        </div>

        <div className="flex col-span-10 justify-center align-middle">
            <input type="text" placeholder="Enter" className="w-1/2 border border-gray-400 h-10 rounded-l-full px-4"/>
            <button className="h-10  border border-gray-400 px-2 rounded-r-full bg-gray-100"><img src="https://i.pinimg.com/474x/01/9d/05/019d053e5237b33da71c3293569e220e.jpg" alt="" className="w-6"/></button>
        </div>

        <div className="col-span-1">
            <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" className="w-14"/>
        </div>
       
    </div>
    </> );
}
 
export default Head;
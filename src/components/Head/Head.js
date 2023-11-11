import hamberger from '../../assets/svgs/hamberger.svg';
import ytlogo from '../../assets/svgs/ytlogo.svg';

const Head = () => {
    return ( <>
    <div className="grid grid-flow-col shadow-lg pt-2">
        <div className="flex col-span-1">
        <img src={hamberger} alt="" className="ml-4 mr-4 w-8 h-13"/>
        <img src={ytlogo} alt="" className="w-28 h-13"/>
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
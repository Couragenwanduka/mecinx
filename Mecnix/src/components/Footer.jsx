import socialMedia from "../images/Group 6276.png";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return(
     <div className="bg-black mt-10 md:w-full">
        <div className="flex md:flex-row flex-col h-52">
            <div>
                <p className="md:text-3xl text-lg font-saira font-bold md:ml-20 mt-20">Subscribe to our newsletter</p>
                <div className="flex mt-8 md:ml-20 w-11/12 h-16 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm text-Saira text-base rounded-2xl border-gray-600 border ">
                     <MdOutlineEmail className=" w-8 h-8 ml-2 mt-4 text-gray-500 mr-1"/>
                    <input type="email" placeholder="Email Address" className="md:w-8/12 bg-transparent"/>
                    <button className="bg-textColor h-10 p-2 md:text-lg font-medium w-1/2 mt-3 mr-4 rounded-lg ">Subscribe &rarr;</button>
                </div>
            </div>
            <div className="md:mt-20 md:ml-96 hidden md:block">
                <p className="font-saira font-bold text-3xl ml-36">Other Services</p>
                <p className="ml-36 mt-3 font-saira text-lg">search Engine Optimization</p>
                <p className="ml-36 mt-3 font-saira text-lg">Optimized Press release</p>
            </div>
        </div>
        <div className="flex md:flex-row flex-col md:mt-20 mb-20 ml-10 mt-5">
            <div>
                <img src={socialMedia} className="md:h-10 "/>
            </div>
            <div className=" md:ml-96 ml-5 md:mt-0 mt-10 ">
                <p className="md:ml-60 font-saira">© 2021 Copyright: mecnix.com</p>
            </div>
        </div>
     </div>
    );
}

export default Footer
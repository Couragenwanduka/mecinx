import React from "react";
import ShiningSpotsBackground from "./Ts-particles";
import Logo from '../images/MainLogo.png';

const NavigationBar = () => {
    return (
        <div className=" w-full h-screen overflow-hidden">
            <ShiningSpotsBackground />
            <div className="absolute flex flex-row text-white w-11/12 justify-between ml-10 mt-10">
                <div>
                    <img src={Logo} alt="Logo" className="md:h-11 h-12" />
                </div>
                <nav className="z-40">
                <ul className="flex space-x-8 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm text-Saira text-sm rounded-2xl border-gray-600 border h-15 w-9/12 p-3 ml-48">
                <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-20 h-10 flex items-center justify-center">Home</li>
                <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-20 h-10 flex items-center justify-center">Services</li>
                <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-20 h-10 flex items-center justify-center">About</li>
                <li className="cursor-pointer text-textColor bg-white rounded-xl font-bold w-36 h-10 flex items-center justify-center">Get Onboarded</li>
                </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavigationBar;

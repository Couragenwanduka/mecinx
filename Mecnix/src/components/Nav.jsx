import React from "react";
import ShiningSpotsBackground from "./Ts-particles";
import Logo from '../images/MainLogo.png';

const NavigationBar = () => {
    return (
        <div className=" w-full h-screen overflow-hidden ">
            <ShiningSpotsBackground />
            <div className="absolute  flex flex-row items-center justify-around text-white">
                <div className="mb-8 mr-40">
                    <img src={Logo} alt="Logo" className="md:h-11 mt-12 ml-24 h-12" />
                </div>
                <nav className="z-40">
                <ul className="flex space-x-8 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm text-Saira text-base rounded-2xl border-gray-600 border p-4 w-7/12 ml-96 mt-3">
                        <li className="cursor-pointer hover:text-textColor hover:bg-white hover:p-2 hover:rounded-xl hover:font-bold">Home</li>
                        <li className="cursor-pointer hover:text-textColor hover:bg-white hover:p-2 hover:rounded-xl hover:font-bold">Services</li>
                        <li className="cursor-pointer hover:text-textColor hover:bg-white hover:p-2 hover:rounded-xl hover:font-bold">About</li>
                        <li className="cursor-pointer hover:text-textColor hover:bg-white hover:p-2 hover:rounded-xl hover:font-bold">Get Onboarded</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavigationBar;

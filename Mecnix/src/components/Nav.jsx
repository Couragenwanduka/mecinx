import { useEffect, useState } from 'react';
import ShiningSpotsBackground from "./Ts-particles";
import Logo from '../images/MainLogo.png';

const NavigationBar = () => {
    const [color, setColor] = useState('black');

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setColor('black');
          } else {
            setColor('transparent');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div className=" w-full h-screen overflow-hidden">
            <ShiningSpotsBackground />
            <div className="fixed flex flex-row text-white w-full justify-between ml-10 z-50 " style={{ backgroundColor: color }}>
                <div className="mt-10">
                    <img src={Logo} alt="Logo" className="md:h-11 h-12" />
                </div>
                <nav className="z-40 mt-8">
                <ul className="flex space-x-8 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm text-Saira text-sm rounded-2xl border-gray-600 border h-15 w-9/12 p-3 ml-20 mb-5">
                <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-20 h-10 flex items-center justify-center"><a href='#home'>Home</a></li>
                <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-20 h-10 flex items-center justify-center"><a href='#service'>Services</a></li>
                <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-20 h-10 flex items-center justify-center"><a href='#about'>About</a></li>
                <li className="cursor-pointer text-textColor bg-white rounded-xl font-bold w-44  h-10 flex items-center justify-center">Get Onboarded</li>
                </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavigationBar;

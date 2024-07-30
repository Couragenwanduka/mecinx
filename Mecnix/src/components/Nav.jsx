import { useEffect, useState } from 'react';
import ShiningSpotsBackground from "./Ts-particles";
import Logo from '../images/MainLogo.png';
import { RxHamburgerMenu } from "react-icons/rx";

const NavigationBar = () => {
    const [color, setColor] = useState('black');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
        <div className="md:w-full h-screen">
            <ShiningSpotsBackground />
            <div 
                className="fixed flex flex-row text-white w-full justify-between md:ml-10 z-50" 
                style={{ backgroundColor: color }}
            >
                <div className="mt-10 md:ml-0 ml-10 md:mb-0 mb-6">
                    <img src={Logo} alt="Logo" className="md:h-11 h-7" />
                </div>

                {/* Desktop Navigation */}
                <nav className="z-40 mt-8 hidden md:block">
                    <ul className="flex md:space-x-8 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm text-Saira text-sm rounded-2xl border-gray-600 border h-15 md:w-9/12 p-3 md:ml-20 mb-5">
                        <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-20 h-10 flex items-center justify-center">
                            <a href='#home'>Home</a>
                        </li>
                        <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-20 h-10 flex items-center justify-center">
                            <a href='#service'>Services</a>
                        </li>
                        <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-20 h-10 flex items-center justify-center">
                            <a href='#about'>About</a>
                        </li>
                        <li className="cursor-pointer text-textColor bg-white rounded-xl font-bold w-44 h-10 flex items-center justify-center">
                            Get Onboarded
                        </li>
                    </ul>
                </nav>

                {/* Hamburger Icon */}
                {!isMenuOpen && (
                    <div className='md:hidden text-4xl mt-10 mr-7' onClick={toggleMenu}>
                        <RxHamburgerMenu />
                    </div>
                )}

                {/* Mobile Navigation */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} w-full`}>
                    <nav className="z-40 mt-8 w-full">
                        <ul className="flex flex-col space-y-4 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm text-Saira text-sm rounded-2xl border-gray-600 border h-15">
                            <div className="md:hidden text-4xl mt-5 ml-64" onClick={toggleMenu}>
                                X
                            </div>
                            <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-full h-10 flex items-center justify-center">
                                <a href='#home'>Home</a>
                            </li>
                            <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-full h-10 flex items-center justify-center">
                                <a href='#service'>Services</a>
                            </li>
                            <li className="cursor-pointer hover:text-textColor hover:bg-white hover:rounded-xl hover:font-bold w-full h-10 flex items-center justify-center">
                                <a href='#about'>About</a>
                            </li>
                            <li className="cursor-pointer text-textColor bg-white rounded-xl font-bold w-full h-10 flex items-center justify-center">
                                Get Onboarded
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;

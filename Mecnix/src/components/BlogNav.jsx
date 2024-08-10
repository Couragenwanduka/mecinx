import { useState } from 'react';
import Logo from '../images/MainLogo.png';
import write from '../images/write.png';
import { CiSearch } from "react-icons/ci";
import SignUp from '../page/signup/Signup';

const BlogNavBar = ( ) => {
const [isOpen, openModal]= useState(false);

const openModalHandler = () => {
    openModal(true);
  };

    return(
      <>
        <header className='bg-black flex max-h-20 h-20 justify-between w-full'>
            <div>
                <img src={Logo} alt='mecnix-log' className='block h-10 w-28 mt-5 ml-5'/>
            </div>
            <div className='block md:hidden text-white text-2xl mt-6'>
                <CiSearch />
            </div>
            <form className='hidden  bg-white h-10 w-96 md:flex gap-8 mt-5 rounded-xl'>
                <CiSearch className='text-2xl mt-2 ml-2'/>
                <input type="text" placeholder="Search..."/>
            </form>
            <nav>
                <ul>
                    <li onClick={openModalHandler}><img src={write} alt='write' className='h-9 mt-5 mr-5'/></li>
                </ul>  
            </nav>
        </header>
        {isOpen && <SignUp isOpen={isOpen} openModal={openModal} />}
      </>
    )
}

export default BlogNavBar;
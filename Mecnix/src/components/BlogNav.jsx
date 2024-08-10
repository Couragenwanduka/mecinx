import Logo from '../images/MainLogo.png';
import write from '../images/write.png';
import { CiSearch } from "react-icons/ci";

const BlogNavBar = ( ) => {
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
                    <li><a href="#"><img src={write} alt='write' className='h-9 mt-5 mr-5'/></a></li>
                </ul>  
            </nav>
        </header>
      </>
    )
}

export default BlogNavBar;
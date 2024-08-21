import React, { useState } from 'react';
import sui from "../../images/sui.png";
import nexo from "../../images/nexo.png";
import gala from "../../images/gala.png";
import Cube from "../../images/cube.png";
import flare from "../../images/flare.png";
import solana from "../../images/solana.png";
import Binance from "../../images/Binance.png";
import mangetMan from "../../images/magnetman.png";
import NavigationBar from "../../components/Nav";
import meeting from "../../images/image 16.png";
import cryptocafe from "../../images/cryptocafe.png";
import readBlog from "../../images/Frame 33.svg";
import Carousel from './ourPost';
import slideImages from '../../images/Ftx.png';
import Footer from '../../components/Footer';
import ScrollComponent from './whatWeDo';
import event from '../../images/event.png';
import arrow from '../../images/arrow.png';
import twitter from '../../images/twitter.png';
import mobileCube from '../../images/mobileCube.png';
import calender from '../../images/uit_calender.png';
import meetingMobile from '../../images/mobileImage.png';
import { Link } from 'react-router-dom';

const Landingpage = () => {
   const slides = [slideImages, slideImages, slideImages];
   const images = [Binance, flare, solana, sui, gala, nexo]

  return (
    <div className='overflow-x-hidden'>
      <NavigationBar />
    <section>
       <div className="absolute inset-0 flex items-center justify-center md:-mt-16  md:ml-96">
        <img src={Cube} className="md:h-4/6 z-30 md:ml-48 hidden md:block" alt="Cube" />
       </div>
       {/* mobile ilustration */}
       <div className='absolute inset-0 w-full'>
        <img src={mobileCube} className='md:hidden -ml-2'/>
       </div>
    </section>
      
    <section>
        <div className="absolute text-white md:-mt-60 -mt-70 font-saira md:ml-20 ml-10">
          <h1 className="md:text-7xl text-4xl font-bold -mt-72 md:-mt-0 hidden md:block">Reach</h1>
          <h1 className='text-5xl font-bold -mt-72 md:hidden font-saira'>Reach Beyond</h1>
          <h1 className="md:text-7xl text-4xl font-bold hidden md:block font-saira">Beyond Your Space</h1>
          <h1 className="text-5xl font-bold md:hidden font-saira">Your Space</h1>
          <p className="text-lg mt-10 text-gray-400 font-medium font-saira">
            Searching through the web3 Galaxies...
          </p>
          <p className="text-lg mt-3 text-gray-400 font-medium">
            We’re your <span className="text-white font-semibold">Portal</span> to the next dimension.
          </p>
        </div>
    </section>
      

      <div className="absolute text-white md:ml-6 ml-4 md:mt-0 -mt-68">
        <p className="md:text-4xl text-base font-bold font-saira md:ml-14 md:mt-32 ml-6 -mt-10">
          Join the League of Leading web3 Projects
        </p>

        <div className='hidden md:block'>
        <span className="flex md:ml-16 mt-10 border-t border-gray-600 mr-20 justify-between">
          <img src={Binance} className="h-8 mt-5  md:block" alt="Binance" />
          <img src={flare} className="h-8 md:ml-10 ml-5 mt-5" alt="Flare" />
          <img src={solana} className="h-8 md:ml-10 ml-5 mt-5" alt="Solana" />
          <img src={sui} className="h-8 md:ml-10 ml-5 mt-5" alt="Sui" />
          <img src={gala} className="h-8 md:ml-10 ml-5 mt-5" alt="Gala" id='service' />
          <img src={nexo} className="h-8 md:ml-10 ml-5 mt-5" alt="Nexo" />
        </span>
        </div>
         {/* mobile for companies */}
        <div className='md:hidden '>
        <span className="flex mt-10 border-t border-gray-600 justify-between">
          <img src={Binance} className="h-4 mt-5 md:block" alt="Binance" />
          <img src={flare} className="h-4 ml-3 mt-5" alt="Flare" />
          <img src={solana} className="h-4 ml-3 mt-5" alt="Solana" />
          <img src={nexo} className="h-4 ml-3 mt-5" alt="Nexo" />
        </span>
        </div>
        <div className="flex flex-col md:flex-row md:w-customWidth2 w-customWidth7 border border-gray-600 md:ml-14 -ml-1 mt-28 rounded-2xl bg-black">
          <span className="md:w-1/2 h-auto">
            <img src={mangetMan} alt="Magnet Man" />
          </span>
          <span className="md:w-1/2 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm font-saira md:rounded-r-3xl rounded-b-3xl">
            <h1 className="text-white font-extrabold md:text-4xl text-2xl md:mt-28 mt-10 md:ml-20 ml-8">We connect</h1>
            <p className="break-words md:w-9/12 w-11/12 md:ml-20 ml-8 mt-3 md:text-lg text-sm md:mb-0 mb-10">
              Cutting-edge Web3 products with the community and investors who will reshape the future. Our goal is to enable people and companies to successfully navigate the complicated and constantly changing world of blockchain technology.
            </p>
          </span>
        </div>

        <div className="md:flex md:flex-col space-y-4 md:mt-8 ">
          <ScrollComponent />

          <div className='hidden md:block'>
            <div className='absolute bg-black w-6/12 h-96 flex'>
              <div className='bg-black'>
                <img src={cryptocafe} className='h-24 ml-16 mt-10' />
                <img src={twitter} className='ml-16 mt-10 h-10 w-full'/>
                <p className='word-break w-96 ml-16 text-gray-600 font-saira mt-4 '>
                  Join our Twitter Space to stay updated on the latest happenings in the Web3 space. Don't miss out on insightful discussions and the chance to connect with industry experts.
                </p>
                <button className='bg-textColor w-44 h-10 text-sm font-saira ml-16 rounded-lg mt-3 '> Add to your Calendar</button>
              </div>
              <div className='mt-10'>
                <button className='w-20 h-10 text-lg font-medium ml-96  block'>
                  <img src={event} className='ml-40'/>
                  <img src={arrow} className='mt-56 ml-40' />
                </button>
              </div>
            </div>
            <div className='mt-0 ml-80 md:block '>
              <img src={meeting} className='h-96 block ml-20 w-customWidth4' />
            </div>
          </div>
          {/* mobile cryptocafe */}
         <section>
          <div className='md:hidden block md:mt-0 -mt-40'>
            <div className=' md:block'>
                <img src={meetingMobile} className=''/>
            </div>
            <div className='bg-black md:mt-0 -mt-40'>
                <img src={cryptocafe} className='h-16  mt-10 ml-3' />
                <img src={twitter} className='md:ml-16 mt-10 md:h-10 h-5 md:w-full w-9/12 ml-2'/>
                <p className='word-break w-96 md:ml-16 text-gray-600 font-saira mt-4 ml-2'>
                  Join our Twitter Space to stay updated on the latest happenings in the Web3 space. Don't miss out on insightful discussions and the chance to connect with industry experts.
                </p>
                <button className='bg-textColor w-52 h-12 text-sm font-saira md:ml-16 rounded-2xl mt-3 ml-2 flex p-2 pt-3 pl-4'> Add to your Calendar
                  <img src={calender} className='ml-4'/>
                </button>
              </div>
          </div>
         </section>

          <div className='flex md:flex-row  md:w-11/12'>
              <div className='md:mt-10 mt-6 md:w-full'>
              <img src={readBlog} className='md:w-customWidth5 w-full md:-ml-5 -ml-6' />
            </div>
            <div className='w-3/12'>
              <p className='word-break w-20 text-5xl font-bold mt-10 leading-relaxed ml-10 hidden md:block'>READ OUR BLOGS</p>
              <p className='word-break w-20 text-2xl font-bold mt-7 leading-tight -ml-3 block md:hidden'>READ OUR BLOGS</p>
              <Link to={'blog'}>
              <p className='bg-textColor w-32 h-10 mt-64  ml-12 rounded text-center text-lg pt-1 hidden md:block'>Visit Blog &rarr;</p>
              <p className=' w-32 h-10 mt-10 -ml-6 rounded text-center text-lg pt-1 block md:hidden'>Visit Blog &rarr;</p>
              </Link>
            
            </div>
          </div>

          <div>
            <p className='mb-10 md:ml-16 text-2xl font-bold font-saira'>Recent Post</p>
            <Carousel slides={slides} interval={3000} />
          </div>

          <Footer />
        </div>
      </div>

    </div>
  );
};

export default Landingpage;

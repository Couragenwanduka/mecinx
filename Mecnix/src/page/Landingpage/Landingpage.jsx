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
import CarouselForMobile from './mobileSlide';

const Landingpage = () => {
   const slides = [slideImages, slideImages, slideImages];
   const images = [Binance, flare, solana, sui, gala, nexo]

  return (
    <div className='overflow-x-hidden' id='home'>
      <NavigationBar />

      <div className="absolute inset-0 flex items-center justify-center md:-mt-16  md:ml-96">
        <img src={Cube} className="md:h-4/6 z-30 md:ml-48 hidden md:block" alt="Cube" />
      </div>

      <div className="absolute text-white md:-mt-60 -mt-96 font-Saira md:ml-20 ml-14">
        <h1 className="md:text-7xl text-4xl font-bold -mt-72 md:-mt-0">Reach</h1>
        <h1 className="md:text-7xl text-4xl font-bold">Beyond Your Space</h1>
        <p className="text-lg mt-3 text-gray-400 font-medium">
          Searching through the web3 Galaxies...
        </p>
        <p className="text-lg mt-3 text-gray-400 font-medium">
          We’re your <span className="text-white font-semibold">Portal</span> to the next dimension.
        </p>
      </div>

      <div className="absolute text-white md:ml-6 ml-4 md:mt-0 -mt-96">
        <p className="md:text-4xl text-base font-bold font-Saira md:ml-14 md:mt-32 ml-10 -mt-10">
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

        <div className='md:hidden '>
        <span className="flex mt-10 border-t border-gray-600 mr-20 justify-between w-full">
          <img src={Binance} className="h-4 mt-5 md:block" alt="Binance" />
          <img src={flare} className="h-4 ml-3 mt-5" alt="Flare" />
          <img src={solana} className="h-4 ml-3 mt-5" alt="Solana" />
          <img src={nexo} className="h-4 ml-3 mt-5" alt="Nexo" />
        </span>
        </div>
        <div className="flex flex-col md:flex-row md:w-customWidth2 w-customWidth6 border border-gray-600 md:ml-14 -ml-3 mt-28 rounded-2xl bg-black">
          <span className="md:w-1/2">
            <img src={mangetMan} alt="Magnet Man" />
          </span>
          <span className="md:w-1/2 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm font-Saira rounded-r-3xl">
            <h1 className="text-white font-extrabold md:text-4xl text-2xl md:mt-28 mt-10 md:ml-20 ml-8">We connect</h1>
            <p className="break-words md:w-9/12 w-11/12 md:ml-20 ml-8 mt-3 md:text-lg text-sm md:mb-0 mb-10">
              Cutting-edge Web3 products with the community and investors who will reshape the future. Our goal is to enable people and companies to successfully navigate the complicated and constantly changing world of blockchain technology.
            </p>
          </span>
        </div>

        <div className="flex flex-col space-y-4 md:mt-8 ">
          <ScrollComponent />

          <div>
            <div className='absolute bg-black w-6/12 h-96 flex'>
              <div className='bg-black'>
                <img src={cryptocafe} className='h-24 md:ml-16 mt-10 ml-3' />
                <img src={twitter} className='md:ml-16 mt-10 md:h-10 h-5 md:w-full w-9/12 ml-2'/>
                <p className='word-break w-96 md:ml-16 text-gray-600 font-saira mt-4 ml-2'>
                  Join our Twitter Space to stay updated on the latest happenings in the Web3 space. Don't miss out on insightful discussions and the chance to connect with industry experts.
                </p>
                <button className='bg-textColor w-44 h-10 text-sm font-saira md:ml-16 rounded-lg mt-3 ml-2'> Add to your Calendar</button>
              </div>
              <div className='mt-10'>
                <button className='w-20 h-10 text-lg font-medium ml-96 hidden md:block'>
                  <img src={event} className='ml-40'/>
                  <img src={arrow} className='mt-56 ml-40' />
                </button>
              </div>
            </div>
            <div className='mt-0 ml-80 hidden md:block '>
              <img src={meeting} className='h-96 ml-20 w-customWidth4' />
            </div>
          </div>

          <div className='flex md:flex-row flex-col md:w-11/12'>
              <div className='md:mt-10 mt-96 md:w-full'>
              <img src={readBlog} className='md:w-customWidth5 w-full md:-ml-5 -ml-6' />
            </div>
            <div className='w-3/12'>
              <p className='word-break md:w-20 w-96 md:text-5xl text-4xl font-bold mt-10 leading-tight md:ml-10'>READ OUR BLOGS</p>
              <p className='bg-textColor w-32 h-10 md:mt-80 mt-10 md:ml-12 rounded text-center text-lg pt-1'>Visit Blog &rarr;</p>
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

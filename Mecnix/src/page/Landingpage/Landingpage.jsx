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

const Landingpage = () => {
   const slides = [slideImages, slideImages, slideImages];

  return (
    <div className='overflow-x-hidden' id='home'>
      <NavigationBar />
      <div className="absolute inset-0 flex items-center justify-center md:-mt-16 md:ml-96">
        <img src={Cube} className="h-4/6 z-30 ml-48" alt="Cube" />
      </div>

      <div className="absolute text-white -mt-60 font-Saira ml-20">
        <h1 className="text-7xl font-bold">Reach</h1>
        <h1 className="text-7xl font-bold">Beyond Your Space</h1>
        <p className="text-lg mt-3 text-gray-400 font-medium">
          Searching through the web3 Galaxies...
        </p>
        <p className="text-lg mt-3 text-gray-400 font-medium">
          We’re your <span className="text-white font-semibold">Portal</span> to the next dimension.
        </p>
      </div>

      <div className="absolute text-white ml-6">
        <p className="text-4xl font-bold font-Saira ml-14 md:mt-32 mt-40">
          Join the League of Leading web3 Projects
        </p>
        <span className="flex ml-16 mt-10 border-t border-gray-600 mr-20 justify-between">
          <img src={Binance} className="h-8 mt-5" alt="Binance" />
          <img src={flare} className="h-8 md:ml-10 ml-5 mt-5" alt="Flare" />
          <img src={solana} className="h-8 md:ml-10 ml-5 mt-5" alt="Solana" />
          <img src={sui} className="h-8 md:ml-10 ml-5 mt-5" alt="Sui" />
          <img src={gala} className="h-8 md:ml-10 ml-5 mt-5" alt="Gala" id='service' />
          <img src={nexo} className="h-8 md:ml-10 ml-5 mt-5" alt="Nexo" />
        </span>

        <div className="flex w-customWidth2 border border-gray-600 ml-14 mt-28 rounded-2xl bg-black">
          <span className="w-1/2">
            <img src={mangetMan} alt="Magnet Man" />
          </span>
          <span className="w-1/2 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm font-Saira rounded-r-3xl">
            <h1 className="text-white font-extrabold text-4xl mt-28 md:ml-20 ml-9">We connect</h1>
            <p className="break-words w-9/12 md:ml-20 ml-9 mt-3 text-lg">
              Cutting-edge Web3 products with the community and investors who will reshape the future. Our goal is to enable people and companies to successfully navigate the complicated and constantly changing world of blockchain technology.
            </p>
          </span>
        </div>

        <div className="flex flex-col space-y-4 mt-8">
          <ScrollComponent />
          <div>
            <div className='absolute bg-black w-6/12 h-96 flex'>
              <div className='bg-black'>
                <img src={cryptocafe} className='h-24 ml-16 mt-10' />
                <img src={twitter} className='ml-16 mt-10 h-10 w-full'/>
                <p className='word-break w-96 ml-16 text-gray-600 font-saira mt-4'>
                  Join our Twitter Space to stay updated on the latest happenings in the Web3 space. Don't miss out on insightful discussions and the chance to connect with industry experts.
                </p>
                <button className='bg-textColor w-44 h-10 text-sm font-saira ml-16 rounded-lg mt-3'> Add to your Calendar</button>
              </div>
              <div className='mt-10'>
                <button className='w-20 h-10 text-lg font-medium ml-96'>
                  <img src={event} className='ml-40'/>
                  <img src={arrow} className='mt-56 ml-40' />
                </button>
              </div>
            </div>
            <div className='mt-0 ml-80 '>
              <img src={meeting} className='h-96 ml-20 w-customWidth4' />
            </div>
          </div>
          <div className='flex w-11/12'>
            <div className='mt-10 w-full'>
              <img src={readBlog} className='w-customWidth5' />
            </div>
            <div className='w-3/12'>
              <p className='word-break w-20 text-5xl font-bold mt-10 leading-tight ml-10'>READ OUR BLOGS</p>
              <p className='bg-textColor w-32 h-10 md:mt-80 mt-24 ml-12 rounded text-center text-lg pt-1'>Visit Blog &rarr;</p>
            </div>
          </div>
          <div>
            <p className='mb-10 ml-16 text-2xl font-bold font-saira'>Recent Post</p>
            <Carousel slides={slides} interval={3000} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;

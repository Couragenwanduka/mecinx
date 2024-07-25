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
import whatwedo from "../../images/whatwedo.png";
import dropdown from "../../images/dropdown1.png";
import devImage from '../../images/Frame 1321319518.png'
import dropdown2 from "../../images/dropdown2.png";
import dropdown3 from "../../images/Group 182.png";
import react from "../../images/react.png";
import meeting from "../../images/image 16.png";
import cryptocafe from "../../images/cryptocafe.png";
import readBlog from "../../images/Frame 33.svg";
import Carousel from './ourPost';
import slideImages from '../../images/Ftx.png'
import Footer from '../../components/Footer';

const Landingpage = () => {
  const [activeTab, setActiveTab] = useState(null);
  const slides = [slideImages,slideImages, slideImages, slideImages]

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex === activeTab ? null : tabIndex); // toggle active tab
  };

  return (
    <div className="relative">
      <NavigationBar />

      <div className="absolute inset-0 flex items-center justify-center -mt-20 ml-96">
        <img src={Cube} className="h-4/6 ml-44" alt="Cube" />
      </div>

      <div className="absolute text-white -mt-60 font-Saira ml-32">
        <h1 className="text-6xl font-bold">Reach</h1>
        <h1 className="text-6xl font-bold">Beyond Your Space</h1>
        <p className="text-sm mt-3 text-gray-400 font-medium">
          Searching through the web3 Galaxies...
        </p>
        <p className="text-sm mt-3 text-gray-400 font-medium">
          We’re your <span className="text-white font-semibold">Portal</span> to the next dimension.
        </p>
      </div>

      <div className="absolute text-white ml-6">
        <p className="text-3xl font-bold font-Saira ml-28 mt-20">
          Join the League of Leading web3 Projects
        </p>
        <span className="flex ml-28 mt-10 border-t border-gray-600 mr-20 justify-between">
          <img src={Binance} className="h-8 mt-5" alt="Binance" />
          <img src={flare} className="h-8 ml-10 mt-5" alt="Flare" />
          <img src={solana} className="h-8 ml-10 mt-5" alt="Solana" />
          <img src={sui} className="h-8 ml-10 mt-5" alt="Sui" />
          <img src={gala} className="h-8 ml-10 mt-5" alt="Gala" />
          <img src={nexo} className="h-8 ml-10 mt-5" alt="Nexo" />
        </span>

        <div className="flex w-10/12 border border-gray-600 ml-28 mt-28 rounded-2xl">
          <span className="w-1/2">
            <img src={mangetMan} alt="Magnet Man" />
          </span>
          <span className="w-1/2 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm font-Saira rounded-r-3xl">
            <h1 className="text-white font-extrabold text-3xl mt-28 ml-16">We connect</h1>
            <p className="break-words w-96 ml-16">
              Cutting-edge Web3 products with the community and investors who will reshape the future. Our goal is to enable people and companies to successfully navigate the complicated and constantly changing world of blockchain technology.
            </p>
          </span>
        </div>

        <div className="flex flex-col space-y-4 mt-8">
          <div>
            <div
              className={`p-4 cursor-pointer ${activeTab === 0 ? 'text-white' : 'text-gray-600 text-base'}`}
              onClick={() => handleTabClick(0)}
            >
              <div className="flex ml-14">
                <span>
                <img src={activeTab === 0 ? dropdown : ''}/>
                </span>
                <span className="mt-20 ml-20">
                  <img src={whatwedo} alt="What We Do" className="h-14" />
                  <p className="text-4xl font-bold font-Saira ">Project Development</p>
                </span>
              </div>
            </div>
            {activeTab === 0 && (
              <div className="border border-gray-600 rounded-3xl w-customWidth ml-40 h-full">
                <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm h-40 rounded-t-3xl">
                  <p className="break-words font-Saira w-customWidth2 ml-20 pt-10 font-medium tracking-wide">
                    We develop projects that push the boundaries of innovation in the crypto space. Our expert team brings your ideas to life, ensuring they are built on solid technical foundations and designed to succeed. From conceptualization to deployment, we provide end-to-end development services tailored to meet your specific needs.
                  </p>
                </div>
                <img src={react} alt="React" className="mt-4" />
              </div>
            )}
          </div>

          <div>
            <div
              className={`ml-36 cursor-pointer ${activeTab === 1 ? 'text-white' : 'text-gray-600 '}`}
              onClick={() => handleTabClick(1)}
            >
             <p className="text-4xl font-bold font-Saira ">Project Management and Marketing</p>
            </div>
            {activeTab === 1 && (
              <>
              <div>
              <img src={activeTab === 1 ? dropdown3 : ''} />
              </div>
              <div className="p-4 -mt-96">
                <div>
                  <p className="break-words w-9/12 ml-32 text-gray-300 -mt-40">
                    We provide holistic project management and marketing services that encompass every aspect of your project’s journey. Our offerings include:
                  </p>
                </div>
                <div className="flex">
                  <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md text-Saira text-base rounded-2xl border-gray-600 border h-52 w-4/12 ml-28 mt-5">
                    <p className="mt-5 ml-10 font-saira font-semibold">Design</p>
                    <p className="break-words w-64 ml-10 mt-10">
                      We tell the right story by crafting visually compelling and user-friendly interfaces for your project.
                    </p>
                  </span>
                  <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md text-Saira text-base rounded-2xl border-gray-600 border h-52 w-4/12 mt-5 ml-2">
                    <p className="mt-5 ml-10 font-saira font-semibold">Writing</p>
                    <p className="break-words w-64 ml-10 mt-10">
                      Creating engaging content that resonates with your audience and helps your project to drive sales.
                    </p>
                  </span>
                  <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md text-Saira text-base rounded-2xl border-gray-600 border h-52 w-4/12 mt-5 ml-2">
                    <p className="mt-5 ml-10 font-saira font-semibold">Community Management</p>
                    <p className="break-words w-64 ml-10 mt-10">
                      We help web3 companies create, and manage their community to foster engagement and loyalty.
                    </p>
                  </span>
                </div>
                <div className="flex ml-24">
                  <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md text-Saira text-base rounded-2xl border-gray-600 border h-52 w-4/12 mt-5 ml-2">
                    <p className="mt-5 ml-10 font-saira font-semibold">Shilling</p>
                    <p className="break-words w-64 ml-10 mt-10">
                      Promoting your project through effective shilling strategies. Our team employs various tactics to generate buzz and increase visibility.
                    </p>
                  </span>
                  <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md text-Saira text-base rounded-2xl border-gray-600 border h-52 w-4/12 mt-5 ml-2">
                    <p className="mt-5 ml-10 font-saira font-semibold">KOLs</p>
                    <p className="break-words w-64 ml-10 mt-10">
                      Leveraging Key Opinion Leaders to boost your project's visibility and credibility.
                    </p>
                  </span>
                </div>
              </div>
              </>
            )}
          </div>

          <div>
            <div
              className={`ml-36 cursor-pointer ${activeTab === 2 ? 'text-white' : 'text-gray-600 '}`}
              onClick={() => handleTabClick(2)}
            >
              <p className="text-4xl font-bold font-Saira  -mb-40">Dev Onboarding Program</p>
            </div>
            {activeTab === 2 && (
              <>
               <div className=''>
               <img src={activeTab === 2 ? dropdown2 : ''} className='w'/>
               </div>
              <div className="border border-gray-600 rounded-3xl w-customWidth ml-40 h-full -mt-96">
                <div>
                  <img src={devImage}/>
                </div>
                <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm h-40 rounded-b-3xl">
                  <p className="break-words font-Saira w-customWidth2 ml-20 pt-10 font-medium tracking-wide">
                    Our Dev Onboarding Program is designed to help blockchain projects attract and integrate skilled developers into their ecosystems. We provide comprehensive support to ensure a smooth transition and productive collaboration. Our program includes: Developer Outreach, Training and Support, and Community Building.
                  </p>
                </div>
              </div>
              </>
            )}
          </div>
          <div>
            <div className='absolute bg-black mt-20 w-6/12 h-96 flex'>
            <div>
            <img src={cryptocafe} className='h-16 ml-24 mt-16'/>
               <p className='text-3xl font-saira font-semibold mt-10 ml-24'> Catch Us live on Twitter space</p>
               <p className='word-break w-96 ml-24 text-gray-600 font-saira mt-4'>Join our Twitter Space to stay updated on the latest happenings in the Web3 space. Don't miss out on insightful discussions and the chance to connect with industry experts.</p>
               <button className='bg-textColor w-44 h-10 text-sm font-saira ml-24 rounded-lg mt-3'> Add to your Calender</button>
            </div>
            <div className='ml-96 mt-20'>
              <span  >
              <button className='bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm text-Saira rounded-md w-20 h-10 text-lg font-medium' id='gradient-border'>Events</button>
              </span>
            
            </div>
            </div>
            <div className='mt-20 ml-80 '>
               <img src={meeting} className='h-96 w-11/12 ml-20'/>
            </div>
          </div>
          <div className='flex w-10/12 ml-8 '>
            <div className='mt-10'>
               <img src={readBlog}/>
            </div>
            <div className='w-3/12'>
               <p className='word-break w-20 text-7xl font-bold mt-10 leading-tight ml-10'>READ OUR BLOGS</p>
               <p className='bg-textColor w-32 h-10 mt-40 ml-12 rounded text-center text-lg pt-1'>Visit Blog &rarr;</p>
            </div>
          </div>
          <div >
              <p className='mb-10 ml-20 text-2xl font-bold font-saira'>Recent Post</p>
               <Carousel slides={slides} interval={3000}/>
            </div>
            <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import whatwedo from "../../images/whatwedo.png";
import dropdown from "../../images/dropdown1.png";
import devImage from '../../images/Frame 1321319518.png'
import dropdown2 from "../../images/dropdown2.png";
import dropdown3 from "../../images/Group 182 (1).png";
import react from "../../images/react.png";

const ScrollComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <section className="h-screen flex items-center justify-center" id='about'>
        <div>
          <div className="flex md:ml-4 -ml-12">
            <span>
              <img src={dropdown} className='h-40'/>
            </span>
            <span className="md:mt-20 md:ml-5">
              <img src={whatwedo} alt="What We Do" className="md:h-14 h-8" />
              <p className="md:text-4xl text-2xl font-bold font-Saira -ml-1">Project Development</p>
            </span>
          </div>
          <div className="border border-gray-600 rounded-3xl md:w-customWidth w-customWidth6 md:ml-24 -ml-4  h-full md:mt-20 bg-black">
            <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm h-40 rounded-t-3xl">
              <p className="break-words font-Saira w-customWidth2 md:ml-20 md:pt-10 font-medium tracking-wide ml-7 md:text-lg text-sm pt-5 ">
                We develop projects that push the boundaries of innovation in the crypto space. Our expert team brings your ideas to life, ensuring they are built on solid technical foundations and designed to succeed. From conceptualization to deployment, we provide end-to-end development services tailored to meet your specific needs.
              </p>
            </div>
            <img src={react} alt="React" className="mt-4 md:h-full h-48" />
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="h-screen flex items-center justify-center md:mt-20 mt-60 bg-black">
        <div>
          <div>
            <p className="md:text-4xl text-2xl font-bold font-Saira md:ml-28 -ml-6">Project Management and Marketing</p>
            <div>
              <img src={dropdown2} className='h-96 md:-mt-20 md:ml-6 -ml-10 '/>
            </div>
          </div>

          <div className="p-4 md:-mt-32">
            <div>
              <p className="break-words md:w-9/12 w-11/12 md:ml-24 ml-2 text-gray-300 md:-mt-40 -mt-60 font-saira">
                We provide holistic project management and marketing services that encompass every aspect of your project’s journey. Our offerings include:
              </p>
            </div>
            <div className="flex md:flex-row flex-col md:w-11/12">
              <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md font-saira text-base rounded-2xl border-gray-600 border h-52 md:w-6/12 w-11/12 md:ml-24 md:mt-5 mt-32 ml-2">
                <p className="mt-5 md:ml-10 ml-7 font-saira font-semibold">Design</p>
                <p className="break-words w-64 md:ml-10 ml-7 mt-10">
                  We tell the right story by crafting visually compelling and user-friendly interfaces for your project.
                </p>
              </span>
              <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md font-saira text-base rounded-2xl border-gray-600 border h-52 md:w-6/12 w-11/12 mt-5 ml-2">
                <p className="mt-5 md:ml-10 ml-7 font-saira font-semibold">Writing</p>
                <p className="break-words w-64 md:ml-10  ml-7 mt-10">
                  Creating engaging content that resonates with your audience and helps your project to drive sales.
                </p>
              </span>
              <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md font-saira text-base rounded-2xl border-gray-600 border h-52 md:w-6/12 w-11/12 mt-5 ml-2">
                <p className="mt-5 md:ml-10 ml-7 font-saira font-semibold">Community Management</p>
                <p className="break-words w-64 md:ml-10 ml-7 mt-10">
                  We help web3 companies create, and manage their community to foster engagement and loyalty.
                </p>
              </span>
            </div>
            <div className="flex md:ml-20 md:w-10/12 md:flex-row flex-col">
              <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md font-saira text-base rounded-2xl border-gray-600 border h-52 md:w-4/12 w-11/12 mt-5 ml-2 " >
                <p className="mt-5 md:ml-10 ml-7 font-saira font-semibold">Shilling</p>
                <p className="break-words w-68 md:ml-10 ml-7 mt-10">
                  Promoting your project through effective shilling strategies. Our team employs various tactics to generate buzz and increase visibility.
                </p>
              </span>
              <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md font-saira text-base rounded-2xl border-gray-600 border h-52 md:w-4/12 w-11/12 mt-5 ml-2">
                <p className="mt-5 md:ml-10 ml-7 font-saira font-semibold">KOLs</p>
                <p className="break-words w-64 md:ml-10 ml-7 mt-10">
                  Leveraging Key Opinion Leaders to boost your project's visibility and credibility.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="h-screen flex items-center justify-center bg-black md:mt-0 mt-96">
        <div>
          <div>
            <p className="md:text-4xl font-bold font-Saira md:ml-28">Dev Onboarding Program</p>
          </div>

          <div>
            <img src={dropdown3} className='h-96 md:ml-6 -ml-10'/>
          </div>
          <div className="border border-gray-600 rounded-3xl md:w-customWidth w-customWidth6 md:ml-24  h-full -mt-80">
            <div>
              <img src={devImage}/>
            </div>
            <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm md:h-40 h-72 rounded-b-3xl">
              <p className="break-words font-Saira w-customWidth2 md:ml-20 ml-5 pt-10 font-medium tracking-wide">
                Our Dev Onboarding Program is designed to help blockchain projects attract and integrate skilled developers into their ecosystems. We provide comprehensive support to ensure a smooth transition and productive collaboration. Our program includes: Developer Outreach, Training and Support, and Community Building.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollComponent;

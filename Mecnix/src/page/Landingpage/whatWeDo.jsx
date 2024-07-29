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
      <section className="h-screen flex items-center justify-center">
        <div>
          <div className="flex ml-4">
            <span>
              <img src={dropdown} className='h-40' />
            </span>
            <span className="mt-20 ml-5">
              <img src={whatwedo} alt="What We Do" className="h-14" />
              <p className="text-4xl font-bold font-Saira -ml-1">Project Development</p>
            </span>
          </div>
          <div className="border border-gray-600 rounded-3xl w-customWidth ml-24 h-full mt-20 bg-black">
            <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm h-40 rounded-t-3xl">
              <p className="break-words font-Saira w-customWidth2 ml-20 pt-10 font-medium tracking-wide">
                We develop projects that push the boundaries of innovation in the crypto space. Our expert team brings your ideas to life, ensuring they are built on solid technical foundations and designed to succeed. From conceptualization to deployment, we provide end-to-end development services tailored to meet your specific needs.
              </p>
            </div>
            <img src={react} alt="React" className="mt-4" />
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="h-screen flex items-center justify-center mt-20 bg-black">
        <div>
          <div>
            <p className="text-4xl font-bold font-Saira ml-28">Project Management and Marketing</p>
            <div>
              <img src={dropdown2} className='h-96 -mt-20 ml-6' />
            </div>
          </div>

          <div className="p-4 -mt-32">
            <div>
              <p className="break-words w-9/12 ml-24 text-gray-300 -mt-40 font-saira">
                We provide holistic project management and marketing services that encompass every aspect of your project’s journey. Our offerings include:
              </p>
            </div>
            <div className="flex w-11/12">
              <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md font-saira text-base rounded-2xl border-gray-600 border h-52 w-6/12 ml-24 mt-5">
                <p className="mt-5 ml-10 font-saira font-semibold">Design</p>
                <p className="break-words w-64 ml-10 mt-10">
                  We tell the right story by crafting visually compelling and user-friendly interfaces for your project.
                </p>
              </span>
              <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md font-saira text-base rounded-2xl border-gray-600 border h-52 w-6/12 mt-5 ml-2">
                <p className="mt-5 ml-10 font-saira font-semibold">Writing</p>
                <p className="break-words w-64 ml-10 mt-10">
                  Creating engaging content that resonates with your audience and helps your project to drive sales.
                </p>
              </span>
              <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md font-saira text-base rounded-2xl border-gray-600 border h-52 w-6/12 mt-5 ml-2">
                <p className="mt-5 ml-10 font-saira font-semibold">Community Management</p>
                <p className="break-words w-64 ml-10 mt-10">
                  We help web3 companies create, and manage their community to foster engagement and loyalty.
                </p>
              </span>
            </div>
            <div className="flex ml-20 w-10/12">
              <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md font-saira text-base rounded-2xl border-gray-600 border h-52 w-4/12 mt-5 ml-2 " >
                <p className="mt-5 ml-10 font-saira font-semibold">Shilling</p>
                <p className="break-words w-68 ml-10 mt-10">
                  Promoting your project through effective shilling strategies. Our team employs various tactics to generate buzz and increase visibility.
                </p>
              </span>
              <span className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md font-saira text-base rounded-2xl border-gray-600 border h-52 w-4/12 mt-5 ml-2">
                <p className="mt-5 ml-10 font-saira font-semibold">KOLs</p>
                <p className="break-words w-64 ml-10 mt-10">
                  Leveraging Key Opinion Leaders to boost your project's visibility and credibility.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="h-screen flex items-center justify-center bg-black">
        <div>
          <div>
            <p className="text-4xl font-bold font-Saira ml-28">Dev Onboarding Program</p>
          </div>

          <div>
            <img src={dropdown3} className='h-96 ml-6'/>
          </div>
          <div className="border border-gray-600 rounded-3xl w-customWidth ml-24 h-full -mt-80">
            <div>
              <img src={devImage} />
            </div>
            <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm h-40 rounded-b-3xl">
              <p className="break-words font-Saira w-customWidth2 ml-20 pt-10 font-medium tracking-wide">
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

import React, { useState, useRef, useEffect } from "react";
import Btn from "../Common/Btn";
import hero from "../Images/Hero.jpg"; 
import Arrow from "../Common/Arrow";
import logo from "../Images/Logo.png";
import Cloud  from "../Images/Cloud.jpg";
import Heroicon1  from "../Images/Heroicon1.png";
import Heroicon2  from "../Images/Heroicon2.png";
import Heroicon3 from "../Images/Heroicon3.png";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="mb-4 border-b-blue border-b">
        <div
          className="flex items-center justify-between mb-2 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="lg:text-h4 text-h5 text-blue font-bold">{title}</h2>
          <Arrow isOpen={isOpen} />
        </div>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [activeIndex]);

  return (
    <main 
    className="text-balance"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 53, 102, 0.8), rgba(0, 53, 102, 0.8)), url(${hero})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundSize: 'cover',
    }}
  >
    {/* <div className="absolute inset-0 bg-black opacity-60"> */}

  {/* </div> */}
      {/* ************Header Starts************** */}
      <nav className="bg-bl">
        <div className="lg:container mx-auto  sm:px-6 xl:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Image on the left */}
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </div>
            <div className="hidden md:flex items-center font-poppins space-x-4">
              <a
                href="#"
                className="px-3 py-2 text-h4 font-medium text-white hover:text-yellow"
              >
                Home
              </a>
              <a
                href="#"
                className="px-3 py-2 text-h4 font-medium text-white hover:text-yellow"
              >
                About Us
              </a>
              <a
                href="#"
                className="px-3 py-2 text-h4 font-medium text-white hover:text-yellow"
              >
                Pages
              </a>
              <a
                href="#"
                className="px-3 py-2 text-h4 font-medium text-white hover:text-yellow"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile toggle button for small screens */}
            <div className="md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
              
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu for small screens */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute z-50 bg-blue w-full `}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 font-poppins">
            <a
              href="#"
              className="block px-3 py-2 font-medium text-white hover:text-white hover:bg-yellow"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 font-medium text-white hover:text-white hover:bg-yellow"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 font-medium text-white hover:text-white hover:bg-yellow"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 font-medium text-white hover:text-white hover:bg-yellow"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* ************Header Ends************** */}

      {/* ************Bold Text Section Starts ************** */}
      <div class="flex items-center   dark:bg-gray-800 lg:container mx-auto">
        <div class="xl:container relative flex px-6 xl:mt-36 md:mt-20 mt-16   xl:mx-auto  ">
          <div class="relative z-20 flex flex-col ">
            <h1 class="flex flex-col xl:text-h md:text-h1 text-h3  font-semibold leading-tight   text-white">
              Empowering Agents <br className="2xl:block hidden" /> with Simplified Data
            </h1>
            <span class=" xl:flex items-center justify-start gap-8">
              <div className="">
                <span className=" xl:text-h md:text-h1   sm:text-h3  font-semibold leading-none text-white">
                  {" "}
                  Management
                </span>
              </div>
              <div className=" lg:mt-auto pt-4 flex items-center ml-auto mb-2 mt-2 ">
                <Btn name="Get Started" />
                <Arrow />
              </div>
            </span>
          </div>
        </div>
      </div>
      {/* ************Bold Text Section Ends ************** */}

      {/* ************Connect With More People Starts ************** */}
      <div className="grid xl:grid-cols-2 grid-cols-1 container lg:mx-auto mx-3 h-min  box-border">
        <div className="md:block hidden"></div>
        <div className="flex xl:flex-row flex-col  xl:items-center xl:justify-start justify-start">
          <div className="md:px-2 text-yellow">
            <span className="text-h4 font-bold mb-4">Funder Assist :</span>
            <br />
            <span className="text-h4 text-white mb-4">Where Funding Meets Efficiency</span>
          </div>
          {/* <div className="flex items-center xl:justify-center justify-start  border-box">
            <div className="h-24 lg:my-12 my-3 flex items-center -space-x-4 ">
              <div className="w-24 h-24 bg-blue object-center flex items-center justify-center rounded-full  border-2 border-yellow overflow-hidden">
                <img
                  src={Heroicon1}
                  alt="Apple"
                  className="w-16 h-16 rounded-full object-center"
                />
              </div>
              <div className="w-24 h-24 bg-blue object-center flex items-center justify-center rounded-full  border-2 border-yellow overflow-hidden">
                <img
                  src={Heroicon2}
                  alt="Ball"
                  className="w-16 h-16 rounded-full object-center"
                />
              </div>
              <div className="w-24 h-24 bg-blue object-center flex items-center justify-center rounded-full  border-2 border-yellow overflow-hidden">
                <img
                  src={Heroicon3}
                  alt="Cat"
                  className="w-16 h-16 rounded-full object-center"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* ************Connect With More People Ends ************** */}

      {/* ************Strategy Finance Starts ************** */}
      <div className="lg:container  mx-auto px-6 2xl:px-6  lg:py-12 py-8">
        <section className=" bg-gradient-to-r from-yellow to-orange  rounded-3xl ">
          <div className="lg:px-6  sm:px-2 px-2 text-center  lg:text-left">
            <div className="lg:container mx-auto ">
              <div className="md:flex  items-center lg:gap-12 gap-4 md:grid-cols-12">
                <div className=" lg:mt-0 2xl:col-span-7 xl:col-span-6 lg:col-span-5 col-span-12">
                  <div className="flex md:flex-row flex-col items- justify-between">
                    <div className=" w-full text-blue md:py-0 py-4">
                      <h2 className=" md:text-h3 text-h3 font-bold leading-tight  text-start">
                        Strategic Data Oversight
                      </h2>
                      <p className="  text-start text-p font-medium">
                        Gain control over your funding data with our easy-to-use
                        tools. Funder Assist helps you keep track of customer
                        records with ease, making financial decision-making
                        clearer and more accurate
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:mb-0 2xl:col-span-5 xl:col-span-6 lg:col-span-7 col-span-12 ">
                  <div
                    className=" mx-auto   md:py-8 md:py-16 my-6  xl:px-6"
                    id="faqs"
                  >
                    <div className="">
                      <div className="pb-4 border-b-blue border-b mb-3">
                        <div
                          className={`grid grid-flow-col  cursor-pointer ${
                            activeIndex === 0 ? "bg-gray-100" : ""
                          }`}
                          onClick={() => toggleAccordion(0)}
                        >
                          <div className="flex items-center ">

                          <h2 className="lg:text-h4 md:text-h5 text-blue font-bold text-start">
                            Data Handling Made Easy
                          </h2>
                          </div>
                          <div className="ml-auto">

                          <Arrow activeIndex={activeIndex} />
                          </div>
                        </div>
                        <div
                          className="faq-content"
                          style={{
                            maxHeight:
                              activeIndex === 0 ? `${contentHeight}px` : "0",
                            overflow: "hidden",
                            transition: "max-height 0.6s ease-in-out",
                          }}
                          ref={contentRef}
                        >
                          <p className="font-medium text-p text-left text-blue">
                            With Funder Assist, managing financial data doesn't
                            have to be a headache. Our intuitive platform
                            streamlines the process, giving you more time to
                            focus on your customers
                          </p>
                        </div>
                      </div>
                      {/* <hr className="border-b-blue border-b opacity-50 " /> */}
                      <div className="pb-4 border-b-blue border-b">
                        <div
                          className={`grid grid-flow-col cursor-pointer ${
                            activeIndex === 1 ? "bg-gray-100" : ""
                          }`}
                          onClick={() => toggleAccordion(1)}
                        >
                          <div className="flex items-center jusitfy-center">
                          <h2 className="lg:text-h4 md:text-h5 text-blue font-bold text-start">
                            Data Growth, Handled
                          </h2>

                          </div>
                          <div className="ml-auto">

                          <Arrow activeIndex={activeIndex} />
                          </div>
                        </div>
                        <div
                          className="faq-content"
                          style={{
                            maxHeight:
                              activeIndex === 1 ? `${contentHeight}px` : "0",
                            overflow: "hidden",
                            transition: "max-height 0.6s ease-in-out",
                          }}
                          ref={contentRef}
                        >
                          <p className="font-medium text-p text-left text-blue">
                          As your funding operations grow, so does your data. Funder Assist scales with you, ensuring that your expanding data is always manageable and accessible
                          </p>
                          <br />
                        </div>
                      </div>
                     
                      <div className="pb-2 pt-2 border-b-blue border-b">
                        <div
                          className={`grid grid-flow-col cursor-pointer ${
                            activeIndex === 2 ? "bg-gray-100" : ""
                          }`}
                          onClick={() => toggleAccordion(2)}
                        >
                          <div className="flex items-center jusitfy-center">
                          <h2 className="lg:text-h4 md:text-h5 text-blue font-bold text-left">
                            Consistent Data Management
                          </h2>

                          </div>
                          <div className="ml-auto">

                          <Arrow activeIndex={activeIndex} />
                          </div>
                        </div>
                        <div
                          className="faq-content"
                          style={{
                            maxHeight:
                              activeIndex === 2 ? `${contentHeight}px` : "0",
                            overflow: "hidden",
                            transition: "max-height 0.6s ease-in-out",
                          }}
                          ref={contentRef}
                        >
                          <p className="font-medium text-p text-left text-blue">
                          Repeat success with every customer. Funder Assist's repeatable processes mean you can provide reliable and consistent funding services, backed by solid data every time
                    
                          </p>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ************Strategy Finance Ends ************** */}
    </main>
  );
}

import React, { useState } from "react";
import Btn from "../Common/Btn";
import Arrow from "../Common/Arrow";
import logo from "../Images/Logo.png";


export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main class="bg-blue">
      {/* ************Header Starts************** */}
      <nav className="bg-blue">
        <div className="md:container mx-auto  sm:px-2 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Image on the left */}
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src={logo}
                alt="Logo"
              />
            </div>

            {/* Nav menu on the right for medium screens and above */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className="px-3 py-2 rounded-md text-h4 font-medium text-white hover:text-yellow"
              >
                Home
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-h4 font-medium text-white hover:text-yellow"
              >
                About Us
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-h4 font-medium text-white hover:text-yellow"
              >
                Pages
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-h4 font-medium text-white hover:text-yellow"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile toggle button for small screens */}
            <div className="md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
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
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
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
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute z-50 bg-blue w-full `} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
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
      <div class="flex items-center bg-blue dark:bg-gray-800 lg:container mx-auto">
        <div class="xl:container relative flex px-6 py-8  xl:mx-auto  ">
          <div class="relative z-20 flex flex-col ">
            <h1 class="flex flex-col xl:text-h md:text-h1 text-h2 font-semibold leading-none text-gray-800   text-white">
              Archieving Financial
            </h1>
            <span class=" xl:flex items-center justify-start gap-8">
              <div className="">
                <span className="xl:text-h md:text-h1 text-h2 font-semibold leading-none text-gray-800   text-white">Independent</span>
              </div>
              <div className=" lg:mt-auto pt-4 flex items-center ml-auto mb-2  ">
                <Btn name="Get Started" />
                <Arrow />
              </div>
            </span>
          </div>
        </div>
      </div>
      {/* ************Bold Text Section Ends ************** */}


      {/* ************Connect With More People Starts ************** */}
      <div className="grid xl:grid-cols-2 grid-cols-1 container lg:mx-auto h-min px-2">
        <div></div>
        <div className="flex xl:flex-row flex-col  xl:items-center xl:justify-start justify-start">

          <div className="mx-2 text-yellow">
            <span className="text-h4 font-bold mb-4">Connect With :</span><br />
            <span className="text-h4 mb-4">More People</span>
          </div>
          <div className="flex items-center xl:justify-center justify-start ">
            <div className="h-20 my-12 flex items-center -space-x-6">
              <div className="w-24 h-24 bg-blue rounded-full inline-block border-4 border-yellow">
                <img
                  src="https://source.unsplash.com/24x24/?apple"
                  alt="Apple"
                  className="w-full h-full rounded-full object-contain "
                />
              </div>
              <div className="w-24 h-24 bg-orange rounded-full inline-block ml-4 border-4 border-yellow ">
                <img
                  src="https://source.unsplash.com/24x24/?ball"
                  alt="Ball"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-24 h-24 bg-black rounded-full inline-block ml-4 border-4 border-yellow">
                <img
                  src="https://source.unsplash.com/24x24/?cat"
                  alt="Cat"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************Connect With More People Ends ************** */}


      {/* ************Strategy Finance Starts ************** */}
      <div className="lg:container  mx-auto lg:px-6 px-2 py-12">
        <section className=" bg-yellow  rounded-3xl ">
          <div className="px-6  text-center  lg:text-left">
            <div className="lg:container mx-auto ">
              <div className="flex grid items-center lg:gap-12 gap-4 md:grid-cols-12">
                <div className=" lg:mt-0 md:col-span-6">
                  <div className="flex sm:flex-row flex-col items-center justify-between">
                    <div className="md:w-1/3 w-full text-blue">
                      <h2 className="lg:text-h3 text-h4 font-bold leading-tight">Strategy Finance</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                    <div className="md:w-2/3 w-full">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/ecommerce/horizontal/058.jpg"
                        className="h-56 rounded-3xl mx-auto  xl:p-8 p-4"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className=" lg:mb-0 md:col-span-6 xl:p-12 md:p-4 ">
                  <div className="mb-4 border-b-blue border-b">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h2 className="lg:text-h4 text-h5 text-blue font-bold">
                        How to Manage Finance ?
                      </h2>
                      <Arrow />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="mb-4 border-b-blue border-b">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="lg:text-h4 text-h5 text-blue font-bold">
                          How long will finance grow ?
                        </h2>
                        <Arrow />
                      </div>
                    </div>
                  </div>

                  <div className="lg:mb-4 mb-12">
                    <div className="mb-4 border-b-blue border-b">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="lg:text-h4 text-h5 text-blue font-bold">
                          Whether it can be repeated ?
                        </h2>
                        <Arrow />
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

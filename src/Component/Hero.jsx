import React from "react";
import Btn from "../Common/Btn";

export default function Hero() {
  return (
    <main className="relative min-h-screen  bg-blue ">
      <header className="z-30 flex items-center w-full h-24 sm:h-32">
        <div className="container flex items-center justify-between px-6 mx-auto">
          <div className="text-3xl font-black text-gray-800 uppercase text-white">
            Watch.ME
          </div>
          <div className="flex items-center">
            <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen text-white lg:flex">
              <a href="#" className="flex px-6 py-2">
                Home
              </a>
              <a href="#" className="flex px-6 py-2">
                Watch
              </a>
              <a href="#" className="flex px-6 py-2">
                Product
              </a>
              <a href="#" className="flex px-6 py-2">
                Contact
              </a>
              <a href="#" className="flex px-6 py-2">
                Carrer
              </a>
            </nav>
            <button className="flex flex-col ml-4 lg:hidden">
              <span className="w-6 h-1 mb-1 bg-gray-800 bg-white"></span>
              <span className="w-6 h-1 mb-1 bg-gray-800 bg-white"></span>
              <span className="w-6 h-1 mb-1 bg-gray-800 bg-white"></span>
            </button>
          </div>
        </div>
      </header>
      <div className="relative z-20 flex items-center overflow-hidden bg-blue bg-gray-800">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col  lg:w-full">
            <h1 className="flex flex-col text-h font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl text-white">
              Achieving Financial Indipendence
            </h1>

            <div className="flex">
              <Btn name="Get Started" />
            </div>
          </div>
        </div>
      </div>
      <div className="container  mx-auto md:px-6">
        {/* Section: Design Block */}
        <section className=" bg-yellow rounded-3xl">
          <div className="px-6  text-center  lg:text-left">
            <div className="container mx-auto ">
              <div className="flex grid items-center gap-12 lg:grid-cols-12">
                <div className="mt-12 lg:mt-0 col-span-7">
                  <div className="flex items-center justify-between">
                    <div className="w-1/3">
                      <h2 className="text-h3 font-bold">Strategy Finance</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Enim, nostrum?
                      </p>
                    </div>
                    <div className="w-2/3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/ecommerce/horizontal/058.jpg"
                        className="w-full rounded-3xl  p-8"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-12 lg:mb-0 col-span-5">
                  <div className="mb-4 border-b-rose-950 border-b">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-lg font-medium">
                        How to Manage Finance ?
                      </h2>
                      <button className="p-2 focus:outline-none focus:bg-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-10a1 1 0 11-2 0V7a1 1 0 112 0v1zM9 13a1 1 0 012 0v2a1 1 0 11-2 0v-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="mb-4 border-b-rose-950 border-b">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-medium">
                          How to Manage Finance ?
                        </h2>
                        <button className="p-2 focus:outline-none focus:bg-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-10a1 1 0 11-2 0V7a1 1 0 112 0v1zM9 13a1 1 0 012 0v2a1 1 0 11-2 0v-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="mb-4 border-b-rose-950 border-b">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-medium">
                          How to Manage Finance ?
                        </h2>
                        <button className="p-2 focus:outline-none focus:bg-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-10a1 1 0 11-2 0V7a1 1 0 112 0v1zM9 13a1 1 0 012 0v2a1 1 0 11-2 0v-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

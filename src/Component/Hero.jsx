import React from "react";

export default function Hero() {
  return (
    <main class="relative min-h-screen  bg-white dark:bg-gray-800">
      <header class="z-30 flex items-center w-full h-24 sm:h-32">
        <div class="container flex items-center justify-between px-6 mx-auto">
          <div class="text-3xl font-black text-gray-800 uppercase dark:text-white">
            Watch.ME
          </div>
          <div class="flex items-center">
            <nav class="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
              <a href="#" class="flex px-6 py-2">
                Home
              </a>
              <a href="#" class="flex px-6 py-2">
                Watch
              </a>
              <a href="#" class="flex px-6 py-2">
                Product
              </a>
              <a href="#" class="flex px-6 py-2">
                Contact
              </a>
              <a href="#" class="flex px-6 py-2">
                Carrer
              </a>
            </nav>
            <button class="flex flex-col ml-4 lg:hidden">
              <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            </button>
          </div>
        </div>
      </header>
      <div class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div class="container relative flex px-6 py-16 mx-auto">
          <div class="relative z-20 flex flex-col  lg:w-full">
            <h1 class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
              Achieving Financial Indipendence
            </h1>

            <div class="flex">
              <a
                href="#"
                class="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400"
              >
                Get started
              </a>
              <a
                href="#"
                class="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mx-auto md:px-6">
        {/* Section: Design Block */}
        <section className=" bg-yellow-300 rounded-3xl">
          <div className="px-6  text-center  lg:text-left">
            <div className="container mx-auto ">
              <div className="flex grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <div className="flex items-center justify-between">
                    <div className="w-1/3">
                      <h2 className="text-2xl">Strategy Finance</h2>
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
                <div className="mb-12 lg:mb-0">
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

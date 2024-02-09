import React from "react";

export default function Services() {
  return (
    <div>
      <div className="bg-gray-100 ">
        <div className="container py-16 mx-auto flex flex-col lg:flex-row font-poppins ">
          {/* Left Side */}
          <div className="lg:w-1/2 p-4">
            
          <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-6">Our Services for Your Finance Problem</h1>
        
        <p className="text-lg mb-4">
          Sed ac risus non odio consectetur iaculis. Phasellus varius sapien at leo accumsan tincidunt. Nullam
          pharetra, nunc sed convallis lobortis, odio leo vulputate libero, sed rhoncus mi quam ut turpis.
        </p>
        <p className="text-lg mb-6">
          Mauris nec tortor ac odio vulputate congue. Aliquam erat volutpat. Duis nec dui ut est dignissim venenatis.
          In hac habitasse platea dictumst.
        </p>
        <div className="flex items-center">
          <svg
            className="w-8 h-8 mr-2 fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10l5 5 5-5z" />
          </svg>
          <button className="bg-black text-white px-6 py-2 rounded-full text-lg font-medium uppercase">
            Learn More
          </button>
        </div>
      </div>
    </div>
          </div>
          {/* Right Side (Scrollable) */}
          <div className="lg:w-1/2 p-4  md:border-none shadow-inner">
            <div className="bg-gray-100 px-4">
              <div className="max-w-screen-xl mx-auto ">
                <div className=" p-4">
                  <div className="mb-4">
                    <hr class="my-7 bg-gray-200 opacity-25" />
                    <div className="flex mt-4">
                      <div className="h-6 w-6 rounded-full bg-blue-500 mr-4"></div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Financial Modeling and Valution
                        </h3>
                        <p>41 courses</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <hr class="my-7 bg-gray-200 opacity-25" />
                    <div className="flex mt-4">
                      <div className="h-6 w-6 rounded-full bg-blue-500 mr-4"></div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Business Intelligence and Data Analysis
                        </h3>
                        <p>33 Courses</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <hr class="my-7 bg-gray-200 opacity-25" />
                    <div className="flex mt-4">
                      <div className="h-6 w-6 rounded-full bg-blue-500 mr-4"></div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Environmental , Social and Goverence{" "}
                        </h3>
                        <p>12 Courses</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <hr class="my-7 bg-gray-200 opacity-25" />
                    <div className="flex mt-4">
                      <div className="h-6 w-6 rounded-full bg-blue-500 mr-4"></div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Business Intelligence and Data Analysis
                        </h3>
                        <p>33 Courses</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <hr class="my-7 bg-gray-200 opacity-25" />
                    <div className="flex mt-4">
                      <div className="h-6 w-6 rounded-full bg-blue-500 mr-4"></div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Commercial Banking and Credit{" "}
                        </h3>
                        <p>58 Courses</p>
                      </div>
                    </div>
                  </div>
                  <hr class="my-7 bg-gray-200 opacity-25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

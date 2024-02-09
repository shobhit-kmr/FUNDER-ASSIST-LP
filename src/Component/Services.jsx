import React from "react";

export default function Services() {
  return (
    <div>
      <div className="bg-gray-100 ">
        <div className="container py-16 mx-auto flex flex-col lg:flex-row font-poppins ">
          {/* Left Side */}
          <div className="lg:w-1/2 p-4">
           
            <button
              type="button"
              class="mr-3 inline-block rounded bg-primary text-white p-6  pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text- shadow-2xl font-poppins mt-4"
            >
              View All Courses
            </button>
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

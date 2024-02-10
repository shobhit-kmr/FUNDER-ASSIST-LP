import React from "react";
import Arrow from "../Common/Arrow";
import Btn from "../Common/Btn";

export default function Services() {
  return (
    <>
      {/* Services Section */}
      <div className="bg-white box-border">
        <div className="lg:container py-16 mx-auto grid md:grid-cols-12 font-poppins">

          {/* First Block - Main Content */}
          <div className="xl:col-span-8 md:col-span-6 p-4">
            <div className="flex flex-col items-center justify-center">
              <div>
                <h1 className="xl:text-h1 text-h2 lg:leading-normal leading-tight text-yellow font-bold mb-6">
                  Our Services for <br className="xl:block hidden" /> Your Finance
                  <br className="xl:block hidden" /> Problem
                </h1>
                <p className="text-lg mb-4 py-6 md:w-[70%] font-semibold">
                  Sed ac risus non odio consectetur iaculis. Phasellus varius
                  sapien at leo accumsan tincidunt. Nullam pharetra, nunc sed
                  convallis lobortis, odio leo vulputate libero, sed rhoncus mi
                  quam ut turpis.
                </p>
                <div className="flex items-center justify-start">
                  <Btn name="More Services" />
                  <Arrow />
                </div>
              </div>
            </div>
          </div>

          {/* Second Block - Services List */}
          <div className="xl:col-span-4 md:col-span-6 lg:p-4 md:border-none bg-gray-100 px-4">
            <div className="mx-auto">

              {/* Block-1: Data Security */}
              <div className="py-4">
                <div className="">
                  <h3 className="lg:text-h3 text-h4 font-semibold text-yellow">
                    Data Security
                  </h3>
                </div>
                <div className="grid grid-flow-col">
                  <p className="py-4 w-[95%]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <div className="w-12 h-12 my-auto">
                    <Arrow />
                  </div>
                </div>
              </div>
              <hr className="border-t border-yellow w-" />

              {/* Block-2: Finance Ideas */}
              <div className="py-4">
                <div className="">
                  <h3 className="lg:text-h3 text-h4 font-semibold text-yellow">
                    Finance Ideas
                  </h3>
                </div>
                <div className="grid grid-flow-col">
                  <p className="py-4 w-[95%]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <div className="w-12 h-12 my-auto">
                    <Arrow />
                  </div>
                </div>
              </div>
              <hr className="border-t border-yellow" />

              {/* Block-3: Growth Strategy */}
              <div className="py-4">
                <div className="">
                  <h3 className="lg:text-h3 text-h4 font-semibold text-yellow">
                    Growth Strategy
                  </h3>
                </div>
                <div className="grid grid-flow-col">
                  <p className="py-4 w-[95%]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <div className="w-12 h-12 my-auto">
                    <Arrow />
                  </div>
                </div>
              </div>
              <hr className="border-t border-yellow" />

              {/* Block-4: 7/24 Service */}
              <div className="py-4">
                <div className="">
                  <h3 className="lg:text-h3 text-h4 font-semibold text-yellow">
                    7/24 Service
                  </h3>
                </div>
                <div className="grid grid-flow-col">
                  <p className="py-4 sm:w-[95%]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <div className="w-12 h-12 my-auto">
                    <Arrow />
                  </div>
                </div>
              </div>
              <hr className="border-t border-yellow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

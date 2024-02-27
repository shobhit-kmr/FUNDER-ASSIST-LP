import React from "react";
import Arrow from "../Common/Arrow";
import Btn from "../Common/Btn";

export default function Services() {
  return (
    <>
      {/* Services Section */}
      <div className="bg-white box-border">
        <div className="lg:container py-16 mx-auto grid md:grid-cols-12">
          {/* First Block - Main Content */}
          <div className="xl:col-span-8 md:col-span-6 p-6">
            <div className="flex flex-col items-center justify-center">
              <div>
                <h1 className="xl:text-h1 md:text-h2 text-h3 lg:leading-normal leading-tight text-yellow font-bold mb-6">
                  Custom Data Solutions
                </h1>
                <p className="font-medium text-p mb-4 py-6 md:w-[70%] text-pretty text-justify ">
                  Every funding situation is unique. That's why Funder Assist
                  offers tailored services to solve your specific data
                  challenges, so you can focus on providing excellent financial
                  support to your clients
                </p>
                <div className="flex items-center md:justify-start gap-4">
                  <Btn name="More Services" />
                  <Arrow />
                </div>
              </div>
            </div>
          </div>

          {/* Second Block - Services List */}
          <div className="xl:col-span-4 md:col-span-6 lg:p-4 md:border-none bg-gray-100 px-6">
            <div className="mx-auto">
              {/* Block-1: Data Security */}
              <div className="py-4">
                <div className="">
                  <h3 className="lg:text-h3 text-h4 font-semibold text-yellow">
                    Secure Every Detail
                  </h3>
                </div>
                <div className="grid grid-flow-col">
                  <p className="py-4 w-[95%] font-medium text-p text-pretty text-justify">
                    Your clients' trust is paramount. Funder Assist ensures
                    their data is protected with top-notch security measures.
                    Rest easy knowing every piece of information is safe
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
                    Innovative Funding Insights
                  </h3>
                </div>
                <div className="grid grid-flow-col">
                  <p className="py-4 w-[95%] font-medium text-p text-pretty text-justify">
                    Harness the power of data to uncover new funding
                    opportunities. Funder Assist's insights can guide you to
                    smarter, more effective financial strategies
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
                    Plan for Expansion
                  </h3>
                </div>
                <div className="grid grid-flow-col">
                  <p className="py-4 w-[95%] font-medium text-p text-pretty text-justify">
                    Data informs growth. Use Funder Assist to identify the right
                    paths for scaling your business and supporting more
                    customers with your funding solutions
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
                    Always Here for You
                  </h3>
                </div>
                <div className="grid grid-flow-col">
                  <p className="py-4 sm:w-[95%] font-medium text-p text-pretty text-justify">
                    Questions or concerns? Our round-the-clock service means
                    we're always ready to help you navigate any data management
                    challenges you face
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

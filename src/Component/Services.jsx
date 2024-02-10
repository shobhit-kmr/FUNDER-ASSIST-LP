  import React from "react";
import Arrow from "../Common/Arrow";
import Btn from "../Common/Btn";

export default function Services() {
  return (
    <>
      {/* ************Services Starts ************** */}
      <div className="bg-white box-border">
        <div className="lg:container py-16 mx-auto flex flex-col lg:flex-row font-poppins ">
          {/* ************ First BLock Starts ************** */}
          <div className="lg:w-[60%] md:w-[80%] p-4">
            <div className="flex flex-col items-center justify-center  bg-gray-200">
              <div className=" bg-white ">
                <h1 className="lg:text-h1 md:text-h2 text-h3 leading-tight text-yellow font-bold mb-6">
                  Our Services for <br className="2xl:block hidden" /> Your Finance
                  <br className="2xl:block hidden" /> Problem
                </h1>
                <p className="text-lg mb-4 md:w-[70%]">
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
          {/* ************ First BLock Ends ************** */}


           {/* ************ Second BLock Starts ************** */}
          <div className="lg:w-[40%] md:w-[80%]  lg:p-4  md:border-none ">
            <div className="bg-gray-100 px-4">
              <div className=" mx-auto ">
                <div className=" ">
                  <div className="mb-4">
                    <div className="flex items-end  justify-between">
                      <div>
                        <h3 className="text-h4 font-semibold text-yellow">
                          Data Security
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                      <div className="whitespace-nowrap">
                      <Arrow />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <hr className=" border-t border-yellow" />
                    <div className="flex items-end  justify-between mt-4">
                      <div>
                        <h3 className="text-h4 font-semibold text-yellow">
                          Finance Ideas
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                      <Arrow />
                    </div>
                  </div>
                  <div className="mb-4 ">
                    <hr className=" border-t border-yellow" />
                    <div className="flex items-end  justify-between mt-4">
                      <div>
                        <h3 className="text-h4 font-semibold text-yellow">
                          Growth Strategy
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>

                      </div>
                      <Arrow />
                    </div>
                  </div>
                  <div className="mb-4">
                    <hr className=" border-t border-yellow" />
                    <div className="flex items-end  justify-between mt-4">
                      <div>
                        <h3 className="text-h4 font-semibold text-yellow">
                          7/24 Service
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                      <Arrow />
                    </div>
                  </div>
                  <hr className=" border-t border-yellow" />
                </div>
              </div>
            </div>
          </div>
          {/* ************ Second BLock Ends ************** */}
        </div>
      </div>
      {/* ************Services Ends ************** */}
    </>
  );
}

import React from "react";
import Btn  from "../Common/Btn";
import Arrow from "../Common/Arrow";
import Communication from "../Images/Communication.jpg";
import Cloud from "../Images/Cloud.jpg";
import SecuritywithSupport from "../Images/SecuritywithSupport.jpg";

const Future = () => {
  return (
    <section className="pb-12 pt-20 bg-white lg:pb-[90px] lg:pt-[120px] px-6 box-border">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-">
            <div className="mx-auto mb-12  text-center lg:mb-20 md:px-10">
              <h1 className="mb-3 lg:text-h1 md:text-h2 text-h3 font-bold leading-[1.2] text-yellow lg:mx-40">
              Advance Your Business: Secure, Cloud-Based Solutions for Client Insights
              </h1>
              <p className="text-black font-medium text-p mt-16 lg:mx-64 xl:mx-96 leading 1.5rem ">
              Utilise our cloud-based platform for uninterrupted access to vital client insights and data, ensuring smooth operations. Enjoy unparalleled data security and join forces with us to advance your business with personalised digital solutions.
              </p>
              <div className="flex justify-center mt-16">
          <div>
            <Btn name="Know more"/>
          </div>
          <div className="mx-3">
            <Arrow />
          </div>
        </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="relative w-full h-full">
            <div>

            <h1 className="text-h4">Cloud based</h1>
            <p className="text-p">Leverage our cloud technology through our dashboard.</p>
            </div>
            <img
              className="w-full h-full rounded-[30px]"
              src={SecuritywithSupport}
            />
            <button className="absolute bottom-8 md:bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <Btn name="Integrate"/>
            </button>
          </div>
          <div className="relative w-full h-full rounded-lg">
            <img
              className="w-full h-full rounded-[30px]"
              src={Cloud}
            />
            <button className="absolute bottom-8 md:bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <Btn name="Integrate"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;

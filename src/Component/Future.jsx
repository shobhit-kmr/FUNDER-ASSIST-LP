import React from "react";
import Btn from "../Common/Btn";
import Arrow from "../Common/Arrow";
import Communication from "../Images/Communication.jpg";
import Cloud from "../Images/Cloud.jpg";
import SecuritywithSupport from "../Images/SecuritywithSupport.jpg";

const Future = () => {
  return (
    <section className="pb-12 pt-20 bg-white lg:pb-[90px] lg:pt-[120px] px-6 box-border">
      <div className="md:container mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full px-">
            <div className="mx-auto mb-12  text-center lg:mb-20 md:px-10">
              <h1 className="mb-3 lg:text-h1 md:text-h2 text-h3 font-bold leading-[1.2] text-yellow xl:mx-40 ">
                Advance Your Business: Secure, Cloud-Based Solutions for Client
                Insights
              </h1>
              <p className="text-black font-medium text-p mt-16 lg:mx-64 xl:mx-96 leading 1.5rem text-pretty text-justify ">
                Utilise our cloud-based platform for uninterrupted access to
                vital client insights and data, ensuring smooth operations.
                Enjoy unparalleled data security and join forces with us to
                advance your business with personalised digital solutions.
              </p>
              <div className="flex justify-center mt-16">
                <div>
                  <Btn name="Know more" />
                </div>
                <div className="mx-3">
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="flex flex-col">
            <div className="md:h-36 my-6">
              <h3 className="text-h3 text-yellow font-bold">Cloud based</h3>
              <p>Leverage our cloud technology through our dashboard.</p>
            </div>
            <div className="relative w-full h-full">
              <img
                className="w-full h-full rounded-[30px]"
                src={SecuritywithSupport}
                alt="Security with Support"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="relative md:top-1/3 top-1/4">
                  <Btn name="Start with Cloud" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="md:h-36 my-6">
              <h3 className="text-h3 text-yellow font-bold text-start leading-tight">
                Security with support
              </h3>
              <p>
                We're committed to protecting your data with advanced encryption
                and strict adherence to leading industry standards.
              </p>
            </div>
            <div className="relative w-full h-full rounded-lg">
              <img className="w-full h-full rounded-[30px]" src={Cloud} />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="relative md:top-1/3 top-1/4">
                  <Btn name="Get Started" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;

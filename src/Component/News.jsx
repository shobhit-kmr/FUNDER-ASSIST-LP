import React from "react";
import Btn from "../Common/Btn";
import Arrow from "../Common/Arrow";

export default function News() {
  return (
    <section className="mx-auto">
      <div className="md:mx-4 mx-10 lg:mx-auto lg:container lg:flex justify-between items-center my-10">
        <h1 className=" text-h1 font-bold text-yellow leading-[4.8rem]">Latest in Data and Funding</h1>
        <div className="flex mx-4 my-4">
          <div>
            <Btn />
          </div>
          <div className="mx-3">
            <Arrow />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mx-auto grid lg:grid-cols-3  md:grid-cols-2 gap-10 "> 
          <div className="lg:h-[70vh] h-[45vh] md:w-96 w-full bg-orange relative rounded-3xl mx-auto">
            <img
              src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
              className=" object-cover absolute w-full h-full object-center rounded-3xl"
              alt=""
            />
            <div className="content absolute bottom-0 px-4">
              <h3 className="text-white text-h3 font-bold leading-[1.9rem] my-6">
                Financial Investments
              </h3>
              <div className="flex my-5">
                <div>
                  <Btn />
                </div>
                <div className="mx-3">
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:h-[70vh] h-[45vh]  md:w-96 w-full bg-orange relative rounded-3xl ">
            <img
              src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
              className=" object-cover absolute w-full h-full object-center rounded-3xl"
              alt=""
            />
            <div className="content absolute bottom-0 px-4">
              <h3 className="text-white text-h3 leading-[1.9rem] font-bold my-6">
                Budget Savings
              </h3>
              <div className="flex my-5">
                <div>
                  <Btn />
                </div>
                <div className="mx-3">
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:h-[70vh] h-[45vh]  md:w-96 w-full bg-orange relative rounded-3xl ">
            <img
              src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
              className=" object-cover absolute w-full h-full object-center rounded-3xl"
              alt=""
            />
            <div className="content absolute bottom-0 px-4">
              <h3 className="text-white text-h3 font-bold leading-[1.9rem] my-6">
                Financial Investments
              </h3>
              <div className="flex my-5">
                <div>
                  <Btn />
                </div>
                <div className="mx-3">
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

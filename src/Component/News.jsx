import React from "react";
import Btn from "../Common/Btn";
import Arrow from "../Common/Arrow";
import LeadManagement from "../Images/LeadManagement.jpg";
import SecuritywithSupport from "../Images/SecuritywithSupport.jpg";
import Communication from "../Images/Communication.jpg";
import Tracking from "../Images/Tracking.jpg";
const newsData = [
  {
    title: "Financial Investments",
    imageUrl: LeadManagement,
    buttonText: "Read more",
  },
  {
    title: "Budget Savings",
    imageUrl: Tracking,
    buttonText: "Read more",
  },
  {
    title: "Another News Item",
    imageUrl: Communication,
    buttonText: "Read more",
  },
];

export default function News() {
  return (
    <section className="mx-auto">
      <div className="md:mx-4 mx-10 lg:mx-auto lg:container lg:flex justify-between items-center my-10">
        <div className="lg:w-[70%]">
          <h1 className="lg:text-h1 text-h3  font-bold text-yellow leading-normal">
            Latest in Data and Funding
          </h1>
          <p className="text-p font-medium lg:w-[60%]">
            Stay up-to-date with the latest trends in data management and
            funding with insights from Funder Assist, your ally in financial
            data
          </p>
        </div>
        <div className="flex flex-nowrap mx-4 my-4">
          <div>
            <Btn />
          </div>
          <div className="mx-3">
            <Arrow />
          </div>
        </div>
      </div>
      <div className="lg:container mx-auto px-6">
        <div className="mx-auto grid xl:grid-cols-3 md:grid-cols-2 gap-10">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="md:mx-0 md:h-[35rem] h-[27rem] mx-auto lg:w-96 relative rounded-3xl"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden">
              <div className="absolute rounded-3xl  inset-0 bg-gradient-to-t from-blue opacity-100 rounded-t-3xl"></div>
    {/* <div className="absolute bottom-0 bg-gradient-to-b from-blue to-orange opacity-80 rounded-b-3xl" style={{ height: '40%' }}></div> */}
                <img
                  src={item.imageUrl}
                  className="object-cover w-full h-full rounded-3xl"
                  alt=""
                />
              </div>
              <div className="content absolute bottom-0 px-4">
                <h3 className="text-white text-h3 font-bold leading-[1.9rem] my-6">
                  {item.title}
                </h3>
                <div className="flex items-center flex-wrap gap-1 my-5">
                  <div>
                    <Btn name={item.buttonText} />
                  </div>
                  <div className="mx-">
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import Btn from '../Common/Btn';
import Arrow from '../Common/Arrow';

const CompanyHighlight = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const targetCount1 = 450;
    const targetCount2 = 250;
    const initialSpeed = 20; 
    const slowDownThreshold = 0.9;
    const step = 3;

    const animateCounter = (target, setCount) => {
      let start = 0;
      const duration = 1000; 
      const interval = duration / (target / initialSpeed);

      const counterInterval = setInterval(() => {
        start += step;
        setCount((prevCount) => {
          const newCount = prevCount < target ? Math.min(prevCount + step, target) : target;
          if (start / target >= slowDownThreshold) {
            return Math.min(newCount, target);
          }
          return newCount;
        });
        if (start >= target) {
          clearInterval(counterInterval);
        }
      }, interval);
    };

    const slowAnimateCounter = () => {
      const target = 10;
      const interval = 1000;
      const slowCounterInterval = setInterval(() => {
        setCount3((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount >= target) {
            clearInterval(slowCounterInterval);
            return target;
          }
          return newCount;
        });
      }, interval);
    };

    animateCounter(targetCount1, setCount1);
    animateCounter(targetCount2, setCount2);

    if (count3 < 10) {
      slowAnimateCounter();
    }
  }, [count3]);

  return (
    <>
      {/* ************About Starts ************** */}
      <div className="container-fluid h-max font-poppins bg-blue py-12 px-6 box-border">
        <div className="grid lg:grid-cols-12 grid-cols-4 h-max w-full lg:container gap-3 mx-auto bg-yellow rounded-3xl lg:p-16 md:p-6 p-3">
          <div className="bg-red col-span-7  lg:py-16 py-6 px-6 space-y-8">
            <div className="flex flex-col items-center justify-center  bg-gray-200">
              <div className="  ">
                <h1 className="lg:text-h1 md:text-h2 text-h3 text-blue font-semibold mb-6 leading-tight">
                  Get To <br className="xl:block hidden" /> Know More
                  <br className="xl:block hidden" /> About Us
                </h1>

                <p className="text-lg mb-4">
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
          <div className="col-span-5 bg-gray">
            <div className="">
              <div className="grid gap-y-6">
                <div className="p-4 mb-10  m ">
                  <div className=" border-b-2 border-blue pb-5 md:pt-6">
                    <div>
                      <p className="text-h1 text-blue font-bold">{count3}M</p>
                      <p className="text-blue text-h5 uppercase font-bold">
                        Our users around the world
                      </p>
                    </div>
                  </div>
                  <div className=" border-b-2 border-blue pb-5 pt-6">
                    <div>
                      <p className="text-h1 text-blue font-bold">{count1}M</p>
                      <p className="text-blue uppercase font-bold">
                        We generated revenue in First Quarter
                      </p>
                    </div>
                  </div>

                  <div className=" border-b-2 border-blue pb-5 pt-6 bg-gray">
                    <div>
                      <p className="text-h1 text-blue font-bold ">{count2}%</p>
                      <p className="text-blue uppercase font-bold">
                        Our investment Growth Rate this year
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyHighlight;

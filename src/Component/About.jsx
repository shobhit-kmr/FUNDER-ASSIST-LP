import React, { useState, useEffect } from 'react';
import Btn from '../Common/Btn';
import Arrow from '../Common/Arrow';

const CompanyHighlight = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0); // Add state for count3

  useEffect(() => {
    const targetCount1 = 450;
    const targetCount2 = 250;
    const initialSpeed = 10; // Initial speed for faster increment
    const slowDownThreshold = 0.9; // 90% threshold for slowing down
    const step = 3; // Initial step for faster increment

    const animateCounter = (target, setCount) => {
      let start = 0;
      const duration = 2000; // Total duration for the counter animation
      const interval = duration / (target / initialSpeed);

      const counterInterval = setInterval(() => {
        start += step;
        setCount((prevCount) => {
          const newCount = prevCount < target ? Math.min(prevCount + step, target) : target;

          // Slow down after reaching 90%
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

    // Start counters
    animateCounter(targetCount1, setCount1);
    animateCounter(targetCount2, setCount2);

    // Slow counter for count3 (10M)
    const slowAnimateCounter = () => {
      const target = 10;
      const interval = 1000; // Interval for slower counting

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

    if (count3 < 10) {
      slowAnimateCounter();
    }

  }, [count3]); // Add count3 to the dependency array

  return (
    <>
      <div className="container-fluid h-max font-poppins bg-blue py-12">
        <div className="grid lg:grid-cols-8 grid-cols-4 h-max w-full container gap-3 mx-auto bg-yellow rounded-3xl ">
          <div className="bg-red col-span-4 border-l-2 border-opacity-10 border-dashed md:py-16 py-6 border-white px-6 md:space-y-20 space-y-8">
            <div className="flex flex-col items-center justify-center  bg-gray-200">
              <div className="  ">
                <h1 className="text-h1 text-black font-semibold mb-6">
                  Our Services for <br className="2xl" /> Your Finance{" "}
                  <br className="2xl" /> Problem
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
          <div className="col-span-4 bg-gray">
            <div className="lg:">
              <div className="grid gap-y-6">
                <div className="border-white border-dashed border-l-2 border-opacity-10 py-8 bg-gray md:w-2/3">
                  <div className=" border-b-2 pb-5 pt-6 bg-gray">
                    <div className=" border-white">
                      <p className="text-h1 text-black font-bold">{count3}M</p> {/* Update count3 here */}
                      <p className="text-black uppercase font-bold">Our users around the world </p>
                    </div>
                  </div>
                  <div className=" border-b-2 pb-5 pt-6 bg-gray">
                    <div className="border-white ">
                      <p className="text-h1 text-black font-bold">{count1}M</p>
                      <p className="text-black uppercase font-bold">We generated revenue in First Quarter</p>
                    </div>
                  </div>

                  <div className=" border-b-2 pb-5 pt-6 bg-gray">
                    <div className="">
                      <p className="text-h1 text-black font-bold ">{count2}%</p>
                      <p className="text-black uppercase font-bold">Our investment Growth Rate this year</p>
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

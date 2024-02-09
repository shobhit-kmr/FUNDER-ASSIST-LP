import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import Btn from "../Common/Btn";
import Arrow from "../Common/Arrow";

export default function Review() {
  const swiperContainer = useRef(null);
  const swiperPrevButton = useRef(null);
  const swiperNextButton = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperContainer.current, {
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        prevEl: swiperPrevButton.current,
        nextEl: swiperNextButton.current,
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="mx-auto bg-blue">
      <div className="container mx-auto" ref={swiperContainer}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="h-96 w-96 bg-orange relative rounded-3xl mx-auto">
              <img
                src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
                className="object-cover absolute w-full h-full object-center rounded-3xl"
                alt=""
              />
              <div className="content absolute bottom-0 px-4">
                <h3 className="text-white text-h3 font-bold leading-[1.9rem] my-6">
                  Financial Investments
                </h3>
                <div className="flex my-2">
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
          <div className="swiper-slide">
            <div className="h-96 w-96 bg-orange relative rounded-3xl mx-auto">
              <img
                src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
                className="object-cover absolute w-full h-full object-center rounded-3xl"
                alt=""
              />
              <div className="content absolute bottom-0 px-4">
                <h3 className="text-white text-h3 leading-[1.9rem] font-bold my-6">
                  Budget Savings
                </h3>
                <div className="flex my-2">
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
          <div className="swiper-slide">
            <div className="h-96 w-96 bg-orange relative rounded-3xl mx-auto">
              <img
                src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
                className="object-cover absolute w-full h-full object-center rounded-3xl"
                alt=""
              />
              <div className="content absolute bottom-0 px-4 flex flex-col">
                <h3 className="text-white text-h3 leading-[1.9rem] font-bold my-6">
                  Financial Investments
                </h3>
                <div className="flex my-2 ">
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
      </div>
    </section>
  );
}

import React from "react";
import Slider from "react-slick";
import Arrow from "../Common/Arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowleft from "../Images/button-arrow-left.svg";

const data = [
  {
    name: "Jamie L",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais",
    review:
      "Funder Assist has been a game-changer for me. The platform is so easy to use, and it's made keeping track of my client's data a breeze. I'm spending less time on paperwork and more time helping my clients. Highly recommend!",
  },
  {
    name: "Alex T",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais",
    review:
      "Since I started using Funder Assist, I've noticed a significant improvement in my workflow. The data management is straightforward, and the customer service team is always there when I need them. It's made a real difference",
  },
  {
    name: "Samira R",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais",
    review:
      "I was struggling with managing multiple client records until I found Funder Assist. It's simplified everything and made my day-to-day operations smooth. Plus, my clients are happy because I can serve them faster and more efficiently.",
  },
];

function Review() {
  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="mx-auto bg-blue py-5 ">
      <div className="lg:container  lg:mx-auto slider-container">
        <div className="lg:mx-auto lg:container  md:mx-4 flex flex-col md:flex-row justify-between items-center my-10 2xl:px-0 px-6 ">
          <h1 className="lg:text-h1 md:text-h2 text-h3 font-bold text-yellow md:w-96 md:leading-[4.8rem] leading-tight mb-6 md:mb-0">
            Hear from Our Partners
          </h1>
          <div className="w-full md:w-[50%]">
            <p className="text-white font-medium text-p">
              Don’t just take our word for it. Read real stories from agents who
              have boosted their productivity and client satisfaction rates with
              Funder Assist
            </p>
          </div>
        </div>
        <div className="lg:w-[90%] w-[75%]  mx-auto relative mb-6">
          <Slider {...settings} ref={sliderRef} className="">
            {data.map((d, index) => (
              <div
                key={index}
                className=" xl:h-64 lg:h-96 h-96 md:w-full bg-gradient-to-r from-yellow to-orange rounded-3xl "
              >
                <div className="flex  flex-col h-full py-3">
                  <div className="content px-5  lg:px-10 py-5 flex flex-col justify-center items-center flex-grow ">
                    <h3 className="text-black text-h3 font-bold text-center leading-[1.9rem] mb-3">
                      {d.name}
                    </h3>
                    <div>
                      <p className=" font-medium text-p text-pretty text-justify">
                        {d.review}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-between absolute md:-inset-x-12 -inset-x-8  top-1/2 md:-my-4 -my-4 left- items-start">
            <button onClick={goToPrev}>
              <img
                src={arrowleft}
                className="md:h-11 md:w-11 h-8 w-8  bg-yellow rounded-full"
                alt=""
              />
            </button>
            <button onClick={goToNext}>
              <img
                src={arrowleft}
                className="md:h-11 md:w-11 h-8 w-8  bg-yellow rounded-full rotate-180"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;

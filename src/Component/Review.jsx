import React from "react";
import Slider from "react-slick";
import Arrow from "../Common/Arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowleft from "../Images/button-arrow-left.svg";

const data = [
  {
    name: "Guy Hawkins",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor Lorem ipsum ",
  },
  {
    name: "Guy Hawkins",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais",
    review:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor Lorem ipsum ",
  },
  {
    name: "Guy Hawkins",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais",
    review:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor Lorem ipsum ",
  },
  {
    name: "Usha Singh",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor Lorem ipsum ",
  },
  {
    name: "Guy Hawkins",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais",
    review:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor Lorem ipsum ",
  },
  {
    name: "Guy Hawkins",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor Lorem ipsum ",
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
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="mx-auto bg-blue py-5">
      <div className="container m-auto">
        <div className="mx-auto container flex justify-between items-center my-10">
          <h1 className="text-h1 font-bold text-yellow w-96 leading-[4.8rem]">
            Review Of Our Services
          </h1>
          <div className="w-[50%]">
            <p className="text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              tincidunt, mi ac fermentum congue, diam urna finibus lectus, at
              Lorem ipsum dolor
            </p>
          </div>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {data.map((d, index) => (
            <div
              key={index}
              className="h-[70vh] w-96 flex items-center bg-gradient-to-r from-yellow font-bold to-orange relative rounded-3xl mx-auto"
            >
              <div className=" flex justify-center items-center h-[40vh] w-full">
              <img
                src={d.img}
                className=" object-cover absolute h-40 object-center rounded-full"
                alt=""
              />
              </div>
              <div className="content absolute px-4">
                <h3 className="text-black text-h3 font-bold text-center leading-[1.9rem] my-6">
                  {d.name}
                </h3>
                <div>
                  <p className="font-bold text-center">{d.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center my-4">
          <button onClick={goToPrev} className="mr-4">
            <img
              src={arrowleft}
              className="h-11 w-11 bg-yellow rounded-full"
              alt=""
            />
          </button>
          <button onClick={goToNext}>
            {" "}
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Review;

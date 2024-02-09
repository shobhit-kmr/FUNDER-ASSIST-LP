import React from "react";

const Future = () => {
  return (
    <section className="pb-12 pt-20 bg-white lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12  text-center lg:mb-20 md:px-10">
              <h1 className="mb-3 lg:text-h1 md:text-h2 text-h3 font-bold leading-[1.2] text-yellow lg:mx-40">
                How To Plane A Comfortable And Secure Future
              </h1>
              <p className="text-black text-p font-semibold mt-16 lg:mx-64 xl:mx-96 leading 1.5rem ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                tincidunt, mi ac fermentum congue, diam urna finibus lectus, at
                Lorem ipsum dolor . Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut tincids lectus, at Lorem ipsum dolor
              </p>
              <div className="mt-16">
                <button>Button</button>
                <button>Button</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="relative w-full h-full rounded-lg">
            <img
              className="w-full h-full rounded-[5%]"
              src="https://img.freepik.com/free-photo/business-handshake-two-men-demonstrating-their-agreement-sign-agreement-contract-their-firms-companies-enterprises_1423-101.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1701216000&semt=ais"
            />
            <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              Button
            </button>
          </div>
          <div className="relative w-full h-full rounded-lg">
            <img
              className="w-full h-full rounded-[5%]"
              src="https://img.freepik.com/free-photo/business-man-working-office-desktop_23-2148174070.jpg"
            />
            <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;

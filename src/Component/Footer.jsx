import React from "react";

export default function Footer() {
  return (
    <>
      <section className=" pt-20 md:px-20 bg-blue lg:pb-5 lg:pt-[120px] mt-16 border-box">
        <div className="container mx-auto bg-yellow rounded-t-[30px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full ">
              <div className="mx-auto mb-12  text-center lg:mb-20 md:px-10 my-24">
                <h1 className="mb-3 lg:text-h1 md:text-h2 text-h3 font-bold leading-[1.2] text-blue  xl:mx-64">
                Join Funder Assist and Transform Your Financial Data Management
                </h1>
                <div className="flex justify-center mt-16">
                  <div>
                    <button
                      type="button"
                      class="text-white text-h6 font-bold bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  rounded-full text-lg px-8 py-3 text-center me-2"
                    >
                     Get Started Now
                    </button>
                  </div>
                </div>
                <div className="flex justify-center mt-16">
                  <img src="https://hrms.difm.llc/web/index.php/admin/theme/image/loginBanner?1672204482497" alt="COMPANY LOGO"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

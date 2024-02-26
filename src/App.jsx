import React from "react";
import News from "./Component/News";
import Future from "./Component/Future";
import Review from "./Component/Review";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Services from "./Component/Services";
import About from "./Component/About";


function App() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Future />
      {/* <Review /> */}
      <News />
      <Footer />
    </>
  );
}

export default App;

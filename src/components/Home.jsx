import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import Navbar from "./Navbar";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
import Clients from "./Clients";
import Category from "./Category";
import slide1 from "../images/lab/22.webp";
import slide2 from "../images/lab/03.webp";
import slide3 from "../images/lab/05.webp";
import slide4 from "../images/lab/15.webp";
import slide5 from "../images/lab/12.webp";
import slide6 from "../images/lab/19.webp";
import "aos/dist/aos.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Brands from "./Brands";
import Aos from "aos";

const Home = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  let swiperInstance = null;

  useEffect(() => {
    Aos.init({
      offset: 200
    });

    if (
      swiperInstance &&
      navigationPrevRef.current &&
      navigationNextRef.current
    ) {
      swiperInstance.navigation.update();
      navigationPrevRef.current.addEventListener("click", () => {
        swiperInstance.slidePrev();
      });
      navigationNextRef.current.addEventListener("click", () => {
        swiperInstance.slideNext();
      });
    }
  }, [swiperInstance]);

  return (
    <div className="home">
      <Navbar />

      <Swiper
        loop={true}
        speed={500}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true
        }}
        onSwiper={(swiper) => {
          swiperInstance = swiper;
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-container">
            <h1 data-aos="fade-down">EDUCATIONAL FURNITURE</h1>
            <img className="slide-img" src={slide1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container">
            <h1 data-aos="fade-down">CANTEEN FURNITURE</h1>
            <img className="slide-img" src={slide2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container">
            <h1 data-aos="fade-down">
              ELAGANT AND QUALITY LABORATORY FURNITURE
            </h1>
            <img className="slide-img" src={slide3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container">
            <h1 data-aos="fade-down">STUNNING INTERIOR WORKS</h1>
            <img className="slide-img" src={slide4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container">
            <h1 data-aos="fade-down">
              ELAGANT AND QUALITY LABORATORY FURNITURE
            </h1>
            <img className="slide-img" src={slide5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container">
            <h1 data-aos="fade-down">KINDERGARTEN FURNITURE</h1>
            <img className="slide-img" src={slide6} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="controls-container">
        <button ref={navigationPrevRef} className="btn btn-outline-light">
          <MdOutlineArrowBackIosNew />
        </button>
        <button ref={navigationNextRef} className="btn btn-outline-light">
          <MdOutlineArrowForwardIos />
        </button>
      </div>
      <div className="brochure-btn">
        <button className=" btn btn-outline-light">Download Brochure</button>
      </div>

      <About />
      <Services />
      <Clients />
      <Category />
      {/* <Brandslick /> */}
      <Brands />



      <Footer />
    </div>
  );
};

export default Home;
import React, { useRef, useState } from "react";
import step11 from "../assets/choose11.svg";

import step12 from "../assets/choose12.svg";

import step13 from "../assets/frame13.svg";

import step14 from "../assets/choose13.svg";

import step15 from "../assets/choose14.svg";

import step16 from "../assets/choose15.svg";


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "swiper/css/pagination";
import "swiper/css";
SwiperCore.use([Keyboard, Mousewheel]);



     export default function Swiping() {
      

      return (
      
        <Swiper
        slidesPerView="1"
        spaceBetween={20}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={{ enabled: true, onlyInViewport: false }}
        direction="vertical"
        pagination={{ clickable: true }}
        height={window.innerHeight}
      >
        
        <SwiperSlide className="mb-5">
            <div className="row justify-content-around" style={{marginTop: "40px"}}>
              <div className="col-md-5" id="style-8">
              <img src={step11} alt="savings" className="img-fluid " />
              </div>
              <div className="col-md-5">
                <img src={step13} alt="savings" className="img-fluid " />
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="mb-5">
            <div className="row justify-content-around" style={{marginTop: "40px"}}>
              <div className="col-md-5" id="style-8">
              <img src={step11} alt="savings" className="img-fluid " />
              </div>
              <div className="col-md-5">
                <img src={step13} alt="savings" className="img-fluid " />
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="mb-5">
            <div className="row justify-content-around" style={{marginTop: "40px"}}>
              <div className="col-md-5" id="style-8">
              <img src={step11} alt="savings" className="img-fluid " />
              </div>
              <div className="col-md-5">
                <img src={step13} alt="savings" className="img-fluid " />
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="mb-5">
            <div className="row justify-content-around" style={{marginTop: "40px"}}>
              <div className="col-md-5" id="style-8">
              <img src={step11} alt="savings" className="img-fluid " />
              </div>
              <div className="col-md-5">
                <img src={step13} alt="savings" className="img-fluid " />
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="mb-5">
            <div className="row justify-content-around" style={{marginTop: "40px"}}>
              <div className="col-md-5" id="style-8">
              <img src={step11} alt="savings" className="img-fluid " />
              </div>
              <div className="col-md-5">
                <img src={step13} alt="savings" className="img-fluid " />
              </div>
            </div>
          </SwiperSlide>
        
      </Swiper>
        
       
      );


     }
   
 



import whatusers from "../assets/whatusers.svg";
import props from "../assets/test.svg";
import arrow from "../assets/arrow.svg";
import q from "../assets/q.svg";
import author from "../assets/authir.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";

export default function Testimony() {
  return (
    <section className="testimony">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={whatusers} alt="What Our Users Say" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-9 justify-content-between">
          <div className="col-sm-6 mb-3">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="test-card">
                  <div className="row justify-content-center">
                    <div className="col-sm-6">
                      <div className="text-center">
                        <img src={q} alt="q" className="img-fluid mb-3"/>
                        <h6>“Hargon has transformed my finances through quick and accessible loans”</h6>
                        <img src={author} alt="author" className="img-fluid mt-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test-card">
                  <div className="row justify-content-center">
                    <div className="col-sm-6">
                      <div className="text-center">
                        <img src={q} alt="q" className="img-fluid mb-3"/>
                        <h6>“Hargon has transformed my finances through quick and accessible loans”</h6>
                        <img src={author} alt="author" className="img-fluid mt-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test-card">
                  <div className="row justify-content-center">
                    <div className="col-sm-6">
                      <div className="text-center">
                        <img src={q} alt="q" className="img-fluid mb-3"/>
                        <h6>“Hargon has transformed my finances through quick and accessible loans”</h6>
                        <img src={author} alt="author" className="img-fluid mt-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="text-center mt-5">
              <img src={arrow} alt="arrow" className="img-fluid action" />
            </div>
          </div>
          <div className="col-sm-6">
            <img src={props} alt="testimonial" className="img-fluid w-100" />
          </div>
        </div>
       
      </div>
    </section>
  )
}


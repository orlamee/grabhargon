import hiws from "../../assets/hiws.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";



export default function FairSecure () {
  return (
    <section className='fair'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-12 text-center">
            <img src={hiws} alt="How it works" className="img-fluid" />
          </div>
        </div>
        <div className="mt-5 view-desktop">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row">
                <div className="col">
                  <div className="pawn-card">
                    <h3 className="text-white mb-4 w-50">Select a merchant</h3>
                    <p className="text-white">Select and browse through our  array of verified & expert merchants. Our merchant weight the worth of your valuables and gives you instant weighs for it. </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col">
                  <div className="pawn-card pvalue">
                    <h3 className="text-white mb-4 w-50">Bring Your Valuables</h3>
                    <p className="text-white">Our appraisers will assess their worth and determine the loan amount you can receive. You will be given half of your items worth in credit.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col">
                  <div className="pawn-card poffer">
                    <h3 className="text-white mb-4 w-75">Evaluation and Loan Offer</h3>
                    <p className="text-white">Our experts will carefully evaluate the condition, authenticity, and market value of your items. We have verified merchant experts in electronics, auto mobile, jewelry </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col">
                  <div className="pawn-card pprocess">
                    <h3 className="text-white mb-4 w-87">Quick and Secure Process</h3>
                    <p className="text-white">Once you accept the loan offer, we will complete the necessary paperwork, securely store your items, and provide you with the cash you need. Rest assured that your valuables will be safely stored until you repay the loan.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="view-mobile mt-5">
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
              <div className="row">
                <div className="col">
                  <div className="pawn-card">
                    <h3 className="text-white mb-4 w-50">Select a merchant</h3>
                    <p className="text-white">Select and browse through our  array of verified & expert merchants. Our merchant weight the worth of your valuables and gives you instant weighs for it. </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col">
                  <div className="pawn-card pvalue">
                    <h3 className="text-white mb-4 w-50">Bring Your Valuables</h3>
                    <p className="text-white">Our appraisers will assess their worth and determine the loan amount you can receive. You will be given half of your items worth in credit.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col">
                  <div className="pawn-card poffer">
                    <h3 className="text-white mb-4 w-75">Evaluation and Loan Offer</h3>
                    <p className="text-white">Our experts will carefully evaluate the condition, authenticity, and market value of your items. We have verified merchant experts in electronics, auto mobile, jewelry </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col">
                  <div className="pawn-card pprocess">
                    <h3 className="text-white mb-4 w-87">Quick and Secure Process</h3>
                    <p className="text-white">Once you accept the loan offer, we will complete the necessary paperwork, securely store your items, and provide you with the cash you need. Rest assured that your valuables will be safely stored until you repay the loan.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>
    </section>
    
  )
}

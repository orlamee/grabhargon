import wallet from "../../assets/acc1.svg";
import wallet1 from "../../assets/acc2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";


export default function AccessToCredit () {
  return (
    <section className='access-2 pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-7 mb-3">
            <div className="credit-card">
              <h2>Access to credit</h2>
              <p className="text-white mt-5 w-75">With Hargon's wallet, you have access to instant credit up to N500,000, unlocking the flexibility you need to live your best life on your terms. Its fast, its smooth, and best of all, its always there.</p>
            </div>
          </div>
          <div className="col-sm-5 slider-img">
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
                <img src={wallet} alt="hargon wallet" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={wallet1} alt="hargon wallet" className="img-fluid" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    
  )
}

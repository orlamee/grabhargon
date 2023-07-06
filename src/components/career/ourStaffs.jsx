import dot from "../../assets/pd.svg";
import david from "../../assets/davis.png";
import anita from "../../assets/anita.png";
import vivian from "../../assets/vivian.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";



export default function OurStaffs () {
  return (
    <section className='our-staffs pt-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <h2>What our <span style={{color: "#23A323"}}>staffs think</span></h2>
          </div>
        </div>
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row justify-content-between mt-9">
                <div className="col-sm-5 mb-3 staff-cred">
                  <img src={dot} alt="dot" className="img-fluid mb-5" />
                  <h3>Product Designer</h3>
                  <p>David</p>
                  <div className="mt-4 bleu">
                    <p>Working at Hargon has been incredibly rewarding. I get to make a real impact in people's lives by helping them achieve their financial goals. Putting a smile on their face has to be the best part of my job.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <img src={david} alt="dot" className="img-fluid w-100" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-content-between mt-9">
                <div className="col-sm-5 mb-3 staff-cred">
                  <img src={dot} alt="dot" className="img-fluid mb-5" />
                  <h3>Frontend Developer</h3>
                  <p>Vivian</p>
                  <div className="mt-4 bleu">
                    <p>It feels like a family.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <img src={vivian} alt="dot" className="img-fluid w-100" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-content-between mt-9">
                <div className="col-sm-5 mb-3 staff-cred">
                  <img src={dot} alt="dot" className="img-fluid mb-5" />
                  <h3>Project Manager</h3>
                  <p>Anita</p>
                  <div className="mt-4 bleu">
                    <p>Working in Hargon has been quite the ride, and I take pride in being a part of this team. It is a company that genuinely makes its people a priority.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <img src={anita} alt="dot" className="img-fluid w-100" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>
    </section>
    
  )
}

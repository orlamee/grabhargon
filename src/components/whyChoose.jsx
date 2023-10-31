import wch from "../assets/wch.svg";
import trans from "../assets/trans.svg";
import agent from "../assets/lagent.svg";
import client from "../assets/c.svg";
import CountUp from "react-countup";
import step11 from "../assets/choose11.svg";
import step12 from "../assets/choose12.svg";
import step13 from "../assets/frame13.svg";
import step14 from "../assets/choose13.svg";
import step15 from "../assets/choose14.svg";
import step16 from "../assets/choose15.svg";
import nin from "../assets/why1.svg";
import none from "../assets/why2.svg";
import numb from "../assets/why3.svg";
import dem from "../assets/why4.svg";
import use from "../assets/why5.svg";
import ref from "../assets/why6.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";


export default function WhyChoose() {
  return (
    <section className="">
      <div className="container whychoose ">
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={wch} alt="why choose hargon" className="img-fluid" />
          </div>
          <div className="col-sm-5 mt-3">
            <div className="card-hero">
              <div className="row justify-content-center">
                <div className="col trac-hero text-center mb-3">
                  <img src={trans} alt="trans" className="img-fluid mb-3" />
                  <h3 className="">
                    <span style={{ fontSize: "14px", lineHeight: "14px" }}>
                      ₦
                    </span>{" "}
                    <CountUp end={3} delay={3} duration="20" suffix="B+" />
                  </h3>
                </div>
                <div className="col trac-hero text-center mb-3">
                  <img src={client} alt="trans" className="img-fluid mb-3" />
                  <h3 className="">
                    <CountUp end={1000} delay={3} duration="20" suffix="+" />
                  </h3>
                </div>
                <div className="col text-center mb-3">
                  <img src={agent} alt="trans" className="img-fluid mb-3" />
                  <h3 className="">
                    <CountUp end={56} delay={3} duration="20" suffix="+" />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <Swiper
          direction="vertical"
          slidesPerView="1"
          pagination={{ type: "progressbar" }}
          speed="1000"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          <div className="">
            <SwiperSlide>
              <div className="row justify-content-between">
                <div className="col-md-5 ms-5 mt-9">
                  <img src={nin} alt="savings" className="img-fluid mb-2" />
                  <div className="upfront">
                    <h6 className="py-3">Upfront Interest</h6>
                    <p className=" w-50">
                      Make your money work for you. Enjoy upfront interests on
                      all your long term savings or fixed deposits on Hargon.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <img src={step11} alt="savings" className="img-fluid" />
                </div>
              </div>
            </SwiperSlide>
           
           

            <SwiperSlide>
              <div className="row justify-content-between">
                <div className="col-md-5 mt-9 ms-5" >
                  <img src={none} alt="savings" className="img-fluid mb-2" />
                  <div className="upfront">
                    <h6 className="py-3">House of Bills</h6>
                    <p className="w-50">
                      Take care of all your bills in one place. Never miss
                      another bill payment.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <img src={step12} alt="savings" className="img-fluid" />
                </div>
              </div>
            </SwiperSlide>

             <SwiperSlide>
            <div className="row justify-content-between">
              <div className="col-md-5 mt-9 ms-5">
                <img src={numb} alt="savings" className="img-fluid pb-2" />
                <div className="upfront">
                  <h6 className="py-3">Cashback Payment</h6>
                  <p className="w-50">
                    Refer your contacts to Hargon for their credit solutions and
                    earn amazing rewards from the platform.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <img src={step13} alt="savings" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row justify-content-between">
              <div className="col-md-5 mt-9 ms-5 ">
                <img src={dem} alt="savings" className="img-fluid pb-2" />
                <div className="upfront">
                  <h6 className="py-3">Lend through Hargon</h6>
                  <p className="w-50">
                    Lend and earn to family, friends, and colleagues using the
                    Hargon platform.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <img src={step14} alt="savings" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-5">
            <div className="row justify-content-between">
              <div className="col-md-5 mt-9 ms-5">
                <img src={use} alt="savings" className="img-fluid pb-2" />
                <div className="upfront">
                  <h6 className="py-3">Quick Loans</h6>
                  <p className="w-50">
                    Access quick loans and solutions for your business needs at
                    very low interests
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <img src={step15} alt="savings" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row justify-content-between">
              <div className="col-md-5 mt-9 ms-5 ">
                <img src={ref} alt="savings" className="img-fluid pb-2" />
                <div className="upfront">
                  <h6 className="py-3">Daily interest on Savings</h6>
                  <p className="w-50">
                    You can earn passively by accumulating daily interests on
                    every savings account you have on Hargon
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <img src={step16} alt="savings" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide> 
          </div>
        </Swiper>
      </div>
    </section>
  );
}

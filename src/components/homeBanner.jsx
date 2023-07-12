import easy from "../assets/easy.svg";
import heroimg from "../assets/hero.png";
import appstore from "../assets/appstore.svg";
import trans from "../assets/trans.svg";
import agent from "../assets/lagent.svg";
import client from "../assets/c.svg";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';



export default function HomeBanner () {
  return (
    <section className='herobg'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-5 mb-3 mt-9">
            <img src={easy} alt="Easy & Affordable. Lending solutions you can trust." className="img-fluid" />
            <p className="text-white w-75 my-5">Experience the power of a seamless lending platform where your needs are made a priority</p>
            <Link><img src={appstore} alt="hargon" className="img-fluid" /></Link>
          </div>
          <div className="col-sm-7">
            <img src={heroimg} alt="hargon" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 trak">
            <div className="card-hero">
              <div className="row justify-content-center">
                <div className="col-md-4 trac-hero text-center mb-3">
                  <h3 className="text-white"><span style={{fontSize: "14px" , lineHeight: "14px"}}>₦</span> <CountUp end={3} delay={3} duration="20" suffix="B+"/></h3>
                  <img src={trans} alt="trans" className="img-fluid mt-2" />
                </div>
                <div className="col-md-4 trac-hero text-center mb-3">
                  <h3 className="text-white"><CountUp end={1000} delay={3} duration="20" suffix="+"/></h3>
                  <img src={client} alt="trans" className="img-fluid mt-2" />
                </div>
                <div className="col-md-4 text-center mb-3">
                  <h3 className="text-white"><CountUp end={56} delay={3} duration="20" suffix="+"/></h3>
                  <img src={agent} alt="trans" className="img-fluid mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

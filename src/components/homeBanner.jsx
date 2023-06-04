import easy from "../assets/easy.svg";
import heroimg from "../assets/hero.svg";
import appstore from "../assets/appstore.svg";
import { Link } from "react-router-dom";


export default function HomeBanner () {
  return (
    <section className='herobg'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3 mt-9">
            <img src={easy} alt="Easy & Affordable. Lending solutions you can trust." className="img-fluid" />
            <p className="text-white w-75 my-5">Experience the power of a seamless lending platform where your needs are made a priority</p>
            <Link><img src={appstore} alt="hargon" className="img-fluid" /></Link>
          </div>
          <div className="col-sm-6">
            <img src={heroimg} alt="hargon" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

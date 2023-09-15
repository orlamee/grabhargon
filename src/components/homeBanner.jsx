import Lottie from "lottie-react";
import appstore from "../assets/applestore.svg";
import playstore from "../assets/playstore.svg";
import heroani from "../assets/heroanim.json"

export default function HomeBanner() {
  return (
    <section className="herobg">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h2 className="desktop">Easy and Affordable <span className="tagcredit">Credit</span>solutions you can trust.</h2>
            <h2 className="mobile">Easy and Affordable <span className="tagcredit">Credit</span><br/>solutions you can trust.</h2>
            {/* <img src={easy} alt="Easy and Affordable credit solutions you can trust" className="img-fluid" /> */}
            <p className="my-5 w-75 text-black">Experience the power of a seamless credit platform where your needs are made a priority</p>
            <div className="d-flex flex-row">
              <img src={appstore} alt="download on apple" className="img-fluid me-4" width="30%" />
              <img src={playstore} alt="download on apple" className="img-fluid" width="30%" />
            </div>
          </div>
          <div className="col-sm-6 lottie">
            <div className="w-100">
              <Lottie animationData={heroani} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

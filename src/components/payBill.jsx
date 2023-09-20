
import Lottie from "lottie-react";
import phone from "../assets/phne.json"


export default function PayBill() {
  return (
    <section className="paybill pb-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <h6>HOUSE OF BILLS</h6>
            <h2>Pay your bills with no <span style={{color: "#23A323"}}>hidden charges</span></h2>
          </div>
          <div className="col-sm-5 mt-5">
            <h4 className="w-75">Send money, shop, and pay bills with credit on Hargon. You never have to worry about hidden charges anymore.</h4>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          {/* <div className="col-sm-8 text-center">
            <img src={phone} alt="phone" className="img-fluid w-100" />
          </div> */}
          <div className="col-sm-8 text-center">
            <div className="w-100">
              <Lottie animationData={phone} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


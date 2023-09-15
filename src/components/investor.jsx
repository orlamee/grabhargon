
import invest from "../assets/pg.svg";
import loans from "../assets/loan.svg";
import collections from "../assets/collections.svg";
import realtime from "../assets/realtime.svg";
import repay from "../assets/repayment.svg";

export default function Investor() {
  return (
    <section className="investor pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <img src={invest} alt="partner guide" className="img-fluid" />
            <h6 className="mt-3">Trust Hargon to help you invest your funds with lower risks</h6>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-sm-3 mb-3">
            <div className="invest">
              <img src={loans} alt="loans" className="img-fluid mb-4" />
              <h5 style={{color: "#FFC727"}}>Loan distrubution</h5>
              <p className="mt-4 w-75">Gain visiblity and track outstanding balances</p>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="invest">
              <img src={collections} alt="loans" className="img-fluid mb-4" />
              <h5 style={{color: "#FF823B"}}>Collections</h5>
              <p className="mt-4 w-75">Provide your borrowers with various means to pay</p>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="invest">
              <img src={realtime} alt="loans" className="img-fluid mb-4" />
              <h5 style={{color: "#005FEE"}}>Real-time</h5>
              <p className="mt-4 w-75">We've digitized the entire loan origination process</p>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="invest">
              <img src={repay} alt="loans" className="img-fluid mb-4" />
              <h5 style={{color: "#23A323"}}>Repayment</h5>
              <p className="mt-4 w-75">Control how your loans are disbursed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


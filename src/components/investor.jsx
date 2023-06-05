
import invest from "../assets/invest.svg";
import loans from "../assets/loan.svg";
import collections from "../assets/collections.svg";
import realtime from "../assets/realtime.svg";
import repay from "../assets/repayment.svg";

export default function Investor() {
  return (
    <section className="investor">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={invest} alt="invest" className="img-fluid mb-4" />
            <h6>Trust Hargon to help you invest your funds with lower risks</h6>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-sm-3 mb-3">
            <div className="invest">
              <img src={loans} alt="loans" className="img-fluid mb-3" />
              <h5 style={{color: "#FFC727"}}>Loan distrubution</h5>
              <p className="mt-5">Gain visiblity and track outstanding balances</p>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="invest invest-2">
              <img src={collections} alt="loans" className="img-fluid mb-3" />
              <h5 style={{color: "#FF823B"}}>Collections</h5>
              <p className="mt-5">Provide your borrowers with various means to pay</p>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="invest invest-3">
              <img src={realtime} alt="loans" className="img-fluid mb-3" />
              <h5 style={{color: "#005FEE"}}>Real-time</h5>
              <p className="mt-5">We've digitized the entire loan origination process</p>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="invest invest-4">
              <img src={repay} alt="loans" className="img-fluid mb-3" />
              <h5 style={{color: "#23A323"}}>Repayment & disbursement</h5>
              <p className="mt-4">Control how your loans are disbursed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



import hargon from "../assets/hargons.svg";
// import hob from "../assets/hob.svg";
// import grit from "../assets/yellowgrit.svg";

export default function HowHargon() {
  return (
    <section className="features">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h6>FEATURES</h6>
            <h2>How Hargon <span style={{color: "#23A323"}}>Works</span></h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12">
            <img src={hargon} alt="hargon" className="img-fluid w-100" />
          </div>
        </div>
      </div>
      {/* <div className="container mt-5">
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3">
            <div className="cash-back pb-0">
              <h3 className="text-white">Cashback Payment </h3>
              <p className="text-white w-75 my-4">Refer your contacts to Hargon for their credit solutions and earn amazing rewards from the platform.</p>
              <img src={hob} alt="house of bills" className="img-fluid text-center" />
            </div>
          </div>
          <div className="col-sm-5">
            <div className="cash-back y-g pb-0">
              <h3 className="text-black">Upfront<br/>interest </h3>
              <p className="text-black w-75 my-4">Make your money work for you. Enjoy upfront interests on all your long term savings or fixed deposits on Hargon.</p>
              <img src={grit} alt="house of bills" className="img-fluid text-center w-100" style={{marginTop: "19px"}} />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}


import hargon from "../../assets/hargon.svg";
import get from "../../assets/get.png";
import opt from "../../assets/opt.svg";
import mot from "../../assets/mot.svg";
import one from "../../assets/arow.svg";
import three from "../../assets/blue.svg";
import two from "../../assets/oranje.svg";



export default function Renting () {
  return (
    <section className='renting'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h2>How It <span style={{color: "#23A323"}}>Works</span></h2>
            <p className="mt-2">Get your mortgage loan using these 4 steps</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-sm-6 mb-3">
              <div className="step-card pb-0">
                <div className="row">
                  <div className="col-sm-7 mb-3">
                    <h3 className="w-75">Set up your account if you don't have one</h3>
                  </div>
                  <div className="col-sm-5">
                    <img src={hargon} alt="hargon" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 oney">
              <img src={one} alt="arrow" className="img-fluid mb-3" />
              <div className="step-card step2 pb-0">
                <div className="row">
                  <div className="col-sm-7 mb-3">
                    <h3 className="w-75">View our Mortgage options</h3>
                  </div>
                  <div className="col-sm-5">
                    <img src={opt} alt="hargon" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
             </div>
          </div>   
          <div className="row mt-3">
            <div className="col-sm-6 mb-3">
              <img src={two} alt="arrow" className="img-fluid mb-3 oranje" />
              <div className="step-card step3 pb-0">
                <div className="row">
                  <div className="col-sm-7 mb-3">
                    <h3 className="w-75">Apply for Mortgage</h3>
                  </div>
                  <div className="col-sm-5">
                    <img src={mot} alt="hargon" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 oney">
              <img src={three} alt="arrow" className="img-fluid mb-3" />
              <div className="step-card step4 pb-0">
                <div className="row">
                  <div className="col-sm-7 mb-3">
                    <h3 className="w-75">Get Approved and Funding</h3>
                  </div>
                  <div className="col-sm-5">
                    <img src={get} alt="hargon" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
             </div>
          </div>   
        </div>
      </div>
    </section>
    
  )
}

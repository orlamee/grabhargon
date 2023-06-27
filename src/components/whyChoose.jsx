import drop from "../assets/num.svg";
import mp from "../assets/mp.svg";
import card from "../assets/lend.svg";
import secure from "../assets/daily.svg";
import qbl from "../assets/qbl.svg";
import wch from "../assets/wch.svg";
import sc from "../assets/sc.svg";
import cre from "../assets/cre.svg";


export default function WhyChoose () {
  return (
    <section className=''>
      <div className='container whychoose'>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={wch} alt="why choose hargon" className="img-fluid" />
            <div className="mt-5">
              <div className="row justify-content-between">
                <div className="col-sm-5 mb-3">
                  <div className="mb-5 products-cards">
                    <img src={cre} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Credit for shopping</h6>
                  </div>
                  <div className="mb-5 products-cards">
                    <img src={sc} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Secure inter-app transfers</h6>
                  </div>
                  <div className="mb-5 products-cards">
                    <img src={qbl} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Quick Business Loans</h6>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="mb-5 products-cards">
                    <img src={drop} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Numerous Credit options</h6>
                  </div>
                  <div className="mb-5 products-cards">
                    <img src={card} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Lend through Hargon</h6>
                  </div>
                  <div className="mb-5 products-cards">
                    <img src={secure} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Daily interest on Savings</h6>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-sm-5 mt-5">
            <img src={mp} alt="drop" className="img-fluid w-100" />
          </div>
        </div>
      </div>
      <div className="bg-tape">
        <div className="container-fluid">
          {/* <div className="row">
            <div className="col text-center">
              <h3>We are just getting started</h3>
              <img src={scroll} alt="scroll" className="img-fluid w-100 mt-4" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
    
  )
}

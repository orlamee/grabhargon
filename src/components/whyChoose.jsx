import drop from "../assets/drop.svg";
import mp from "../assets/mp.svg";
import card from "../assets/card.svg";
import secure from "../assets/secure.svg";
import power from "../assets/empower.svg";


export default function WhyChoose () {
  return (
    <section className=''>
      <div className='container whychoose'>
        <div className="row">
          <div className="col-sm-6">
            <h2>Why Choose<br/><span style={{color: "#23A323"}}>Hargon?</span></h2>
            <div className="mt-5 ms-4">
              <div className="mb-5">
                <img src={drop} alt="drop" className="img-fluid" />
                <h6 className="mt-3">Credit for shopping</h6>
              </div>
              <div className="mb-5">
                <img src={card} alt="drop" className="img-fluid" />
                <h6 className="mt-3">Dollar and Naira Savings</h6>
              </div>
              <div className="mb-5">
                <img src={secure} alt="drop" className="img-fluid" />
                <h6 className="mt-3">Secure inter-app transfers</h6>
              </div>
              <div className="mb-5">
                <img src={power} alt="drop" className="img-fluid" />
                <h6 className="mt-3">Lend to family and friends through Hargon</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <img src={mp} alt="drop" className="img-fluid w-100" />
          </div>
        </div>
      </div>
      <div className="bg-tape">
        <div className="container-fluid mx-0">
          <div className="row">
            <div className="col text-center">
              <h3>We are just getting started</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

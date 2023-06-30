import what from "../../assets/What.svg";
import auto from "../../assets/auto.svg";
import ir from "../../assets/ir.svg";
import cfb from "../../assets/cfb.svg";
import qp from "../../assets/qp.svg";
import started from "../../assets/started.svg";
import middle from "../../assets/middles.svg";




export default function AutoBills () {
  return (
    <section className=''>
      <div className="auto-bills">
        <div className='container-fluid'>
          <div className="row">
            <div className="col-sm-12 px-0">
              <img src={what} alt="What's in it for you?" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="auto-grp">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 mb-3">
              <div className="auto-card">
                <img src={auto} alt="auto" className="img-fluid" />
                <h4>Auto billing</h4>
                <p className="my-4 text-black">Never miss a bill payment again and schedule them with our automated billing</p>
                <button type="button" className="btn btn-primary btn-sm btn-auto">Automation</button>
              </div>
            </div>
            <div className="col-sm-3 mb-3">
              <div className="auto-card">
                <img src={ir} alt="auto" className="img-fluid" />
                <h4>Instant relief</h4>
                <p className="my-4 text-black">Instant relief from the stress and weariness of piled up bills</p>
                <button type="button" className="btn btn-primary btn-sm btn-auto" style={{background: "#FFF5F0", color: "#FF823B"}}>Instant</button>
              </div>
            </div>
            <div className="col-sm-3 mb-3">
              <div className="auto-card">
                <img src={cfb} alt="auto" className="img-fluid" />
                <h4>Credit for bills</h4>
                <p className="my-4 text-black">Enjoy access to loans or credit for bill payment and processing</p>
                <button type="button" className="btn btn-primary btn-sm btn-auto" style={{background: "#FFFBF0" , color: "#FFBD00"}}>Credit</button>
              </div>
            </div>
            <div className="col-sm-3 mb-3">
              <div className="auto-card border-0">
                <img src={qp} alt="auto" className="img-fluid" />
                <h4>Quick payment</h4>
                <p className="my-4 text-black">Quick bill payments and processing when settling your bills.</p>
                <button type="button" className="btn btn-primary btn-sm btn-auto" style={{background: "#F0F5FF" , color: "#2D79FD"}}>Quick</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="getting-started">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <img src={started} alt="get started" className="img-fluid"  />
            </div>
          </div>
        </div>
      </div>
      <div className="rgb">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-7 text-center">
              <img src={middle} alt="getting started" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

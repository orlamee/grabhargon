import values from "../../assets/ourvalues.svg";
import imagination from "../../assets/bulb.svg";
import coll from "../../assets/coll.svg";
import dedicate from "../../assets/dedicate.svg";
import comms from "../../assets/comm.svg";
import innovation from "../../assets/innovation.svg";



export default function OurValues () {
  return (
    <section className='our-values'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-12">
            <img src={values} alt="Our values" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row mt-9">
          <div className="col">
            <div className="text-center mb-3">
              <img src={imagination} alt="imagination" className="img-fluid" />
              <h6 className="mt-4" style={{color: "#FF823B"}}>Imagination</h6>
            </div>
          </div>
          <div className="col">
            <div className="text-center mb-3">
              <img src={dedicate} alt="dedication" className="img-fluid" />
              <h6 className="mt-4" style={{color: "#FF823B"}}>Dedication</h6>
            </div>
          </div>
          <div className="col">
            <div className="text-center mb-3">
              <img src={innovation} alt="Innovation" className="img-fluid" />
              <h6 className="mt-4" style={{color: "#23A323"}}>Innovation</h6>
            </div>
          </div>
          <div className="col">
            <div className="text-center mb-3">
              <img src={comms} alt="Communication" className="img-fluid" />
              <h6 className="mt-4" style={{color: "#2D79FD"}}>Communication</h6>
            </div>
          </div>
          <div className="col">
            <div className="text-center mb-3">
              <img src={coll} alt="Collaboration" className="img-fluid" />
              <h6 className="mt-4" style={{color: "#FFA65B"}}>Collaboration</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

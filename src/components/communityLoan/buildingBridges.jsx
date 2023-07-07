import loans from "../../assets/global.png";
import cash from "../../assets/comcash.png";
import traction from "../../assets/5m.svg";



export default function BuildingBridges () {
  return (
    <section className='b-bridge pt-0'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-4 mb-3" style={{marginTop: "100px"}}>
            <h2 className="mb-5"><span style={{color: "#23A323"}}>Fueling</span> the collective dream</h2>
            <p>Our community credit supports the collective dream while ensuring each business is well-positioned to build a stronger future where it can thrive and make a difference.</p>
          </div>
          <div className="col-sm-8">
            <img src={loans} alt="loans" className="img-fluid w-100" />
          </div>
        </div>
      </div>
      <div className='container' style={{marginTop: "100px"}}>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={cash} alt="loans" className="img-fluid w-100" />
          </div>
          <div className="col-sm-4 mb-3" style={{marginTop: "100px"}}>
            <h2 className="mb-5">EASY CREDIT: <br/><span style={{color: "#23A323"}}>UP TO 5M</span></h2>
            <p className="mb-5">Your business cluster or community can get credit solutions of up to N5,000,000 for a six-month maximum span, giving you all the resources to get the best out of your business.</p>
            <img src={traction} alt="traction" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

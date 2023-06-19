import loans from "../../assets/bridge.png";
import bbt from "../../assets/bbt.svg";



export default function BuildingBridges () {
  return (
    <section className='b-bridge'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={loans} alt="loans" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5" style={{marginTop: "100px"}}>
            <img src={bbt} alt="Building bridges together" className="img-fluid"/>
            <h6 className="my-5">Fuel the collective dream and support each other</h6>
            <p>Our community credit supports the collective dream while ensuring each business is well-positioned to build a stronger future where it can thrive and make a difference.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

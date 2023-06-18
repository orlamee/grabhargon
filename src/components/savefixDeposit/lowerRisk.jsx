import fde from "../../assets/fde.svg";
import lr from "../../assets/lr.svg";
import phone from "../../assets/phone.png";



export default function LowerRisk () {
  return (
    <section className='lowerrisk px-0 pb-0'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-sm-4" style={{paddingLeft: "150px"}}>
            <img src={lr} alt="lower risk" className="img-fluid mb-4" />
            <div style={{marginLeft: "43px"}}>
              <h5 className="mb-4">Diversify your risks and invest securely</h5>
              <p className="text-white w-75">With our long term saving options, you have access to a diverse low risk investment alternatives, giving your portfolio the security it needs</p>
            </div>
          </div>
          <div className="col-sm-4">
            <img src={fde} alt="fixed deposit" className="img-fluid mb-4" />
            <p className="text-white w-75" style={{marginLeft: "43px"}}>Saving on Hargon allows you diversify your investment portfolio and earn mouthwatering returns on the platform but that's not all. With Hargon, you also get upfront payments and cashbacks on every Naira saved on our platform.</p>
          </div>
          <div className="col-sm-4 p-0">
            <img src={phone} alt="fixed deposit" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

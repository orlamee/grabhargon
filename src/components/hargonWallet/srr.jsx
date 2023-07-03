import sm from "../../assets/sm.svg";
import rm from "../../assets/rm.svg";
import rem from "../../assets/rem.svg";
import xxx from "../../assets/xxx.png";
import funds from "../../assets/funds.png";
import four from "../../assets/four.png";



export default function SRR () {
  return (
    <section className='srr'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-4 mb-3">
            <div className="srr-cards text-center">
              <img src={sm} alt="send money" className="img-fluid" />
              <p className="text-white mt-4">With Hargon's wallet, you can send money to friends and family with ease. Sending money as credits to others is simple with Hargon wallet </p>
              <img src={xxx} alt="send money" className="img-fluid w-100 mt-5" />
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="srr-cards text-center" style={{background: "#F59E0B"}}>
              <img src={rm} alt="receive money" className="img-fluid" />
              <p className="text-white mt-4">Instantly receive money or credit payment from anyone on the platform</p>
              <img src={funds} alt="send money" className="img-fluid w-100 mt-5" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="srr-cards text-center" style={{background: "#23A323"}}>
              <span className="float-end srr-cs">Coming Soon</span>
              <img src={rem} alt="request money" className="img-fluid" />
              <p className="text-white mt-4">Safely and conveniently request money from anyone-family and friends using your unique CAN identifier on Hargon.</p>
              <img src={four} alt="send money" className="img-fluid w-100 mt-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

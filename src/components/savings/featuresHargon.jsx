import upfront from "../../assets/upfront.svg";
import cback from "../../assets/cback.svg";
import faster from "../../assets/faster.svg";



export default function FeaturesHargon () {
  return (
    <section className='featuresof'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h2>Features of Hargon's<span style={{color: "#23A323"}}> business savings</span></h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-4 mb-3">
            <div className="feature-card">
              <img src={upfront} alt="upfront" className="img-fluid" />
              <h3 className="mt-3 mb-4">Upfront Interest</h3>
              <p className="text-black w-87">Get your interests upfront when you activate any of our long-term savings plans.</p>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="feature-card" style={{background: "#FFFBF0"}}>
              <img src={cback} alt="cash back" className="img-fluid" />
              <h3 className="mt-3 mb-4">Cashback</h3>
              <p className="text-black w-87">Set and achieve your business goals easily with our autosave feature.</p>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="feature-card" style={{background: "#F2FCF2"}}>
              <img src={faster} alt="faster" className="img-fluid" />
              <h3 className="mt-3 mb-4">Faster Loan Request and Processing</h3>
              <p className="text-black w-87">With a business savings account, you get priority treatment on any loan application, speeding up your loan processing time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

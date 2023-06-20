import loan from "../../assets/la.png";
import leverage from "../../assets/leverage.svg";
import { Fade } from "react-awesome-reveal";




export default function LoanHero () {
  return (
    <section className='agency-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mt-5">
            <img src={leverage} alt="Leverage our financial strength to drive growth" className="img-fluid mb-5" />
            <Fade cascade>
              <p>Transform your customer's lending experience</p>
              <p className="mt-3 w-75">Partner with Hargon today to expand your reach and unlock new possibilities for your customers with unlimited financial capabilities</p>
            </Fade>
            <button className="btn btn-primary btn-main rounded-pill px-5 py-3 mt-4">Join the revolution</button>
          </div>
          <div className="col-sm-6 mt-5">
            <img src={loan} alt="loan agency" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

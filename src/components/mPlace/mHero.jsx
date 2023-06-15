import credit from "../../assets/cred.svg";
import mp from "../../assets/mpr.svg";



export default function MPHero () {
  return (
    <section className='mp-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3 mt-5">
            <img src={credit} alt="Buying and Selling With The Power" className="img-fluid mb-4" />
            <p className="ms-5 w-50">Buy, sell, and Invest in Hargon’s marketplace through credit facilitate channels.</p>
          </div>
          <div className="col-sm-6">
            <img src={mp} alt="Buying and Selling With The Power" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

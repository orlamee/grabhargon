import one from "../../assets/one.svg";
import two from "../../assets/two.svg";
import three from "../../assets/three.svg";
import how from "../../assets/how.svg";



export default function ItWorks () {
  return (
    <section className="cred-work">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={how} alt="how it works" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-sm-4 text-center">
            <div className="one-card">
              <img src={one} alt="how it works" className="img-fluid one-b" />
              <p className="text-white mt-5">Become a member and access all the perks of building credit with Hargon</p>
            </div>
          </div>
          <div className="col-sm-4 text-center">
            <div className="one-card">
              <img src={two} alt="how it works" className="img-fluid two-b" />
              <p className="text-white mt-5">Register for any of our credit-building plans. You can also choose the option of saving, investing, and loan repayments at once.</p>
            </div>
          </div>
          <div className="col-sm-4 text-center">
            <div className="one-card">
              <img src={three} alt="how it works" className="img-fluid two-b" />
              <p className="text-white mt-4">Take control of your finances and make yourself more attractive financially.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

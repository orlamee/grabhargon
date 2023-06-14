import cred from "../../assets/creditsol.svg";
import right from "../../assets/right.svg";



export default function SalaryHero () {
  return (
    <section className='sal-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3 mt-5">
            <img src={cred} alt="cred" className="img-fluid mb-4" />
            <p className="text-white">Get the cash you need when you need it. Our easy and streamlined loan against your salary offers immediate financial relief until the next paycheck arrives.</p>
          </div>
          <div className="col-sm-6">
            <img src={right} alt="cred" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

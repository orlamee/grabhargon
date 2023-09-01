import cred from "../../assets/sal-left.png";
import right from "../../assets/salright.svg";
import bunt from "../../assets/salmbtn.png";



export default function SalaryHero () {
  return (
    <section className='pyday '>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 mt-5">
            <img src={cred} alt="guarantee your employees get paid" className="img-fluid " />
            <img src={bunt} alt="start using salary advance now" className="img-fluid mt-5" />
            
          </div>
          <div className="col-sm-6">
            <img src={right} alt="Credible credit solutions" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

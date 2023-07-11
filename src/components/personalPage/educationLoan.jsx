
import shape from "../../assets/shapeyour.png";
import right from "../../assets/rightpartner.svg";
import down from "../../assets/fundings.svg";


export default function EducationalLoan () {
  return (
    <section className='educational'>
      <div className="container">
       <div className="row justify-content-between">
        <div className="col-sm-6">
          <img src={shape} alt="Educational loans" className="img-fluid w-100" />
        </div>
        <div className="col-sm-5 mt-3">
          <img src={right} alt="Shape your future with the right partner" className="img-fluid" />
          <p className="my-5 w-75 p-bus">From undergraduate to postgraduate, we are here to ensure you power through your educational journey without the limitation of funds.</p>
          <img src={down} alt="Shape your future with the right partner" className="img-fluid i-bus" />
        </div>
       </div>
      </div>
    </section>
    
  )
}

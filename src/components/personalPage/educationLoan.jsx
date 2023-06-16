
import shape from "../../assets/shape.svg";


export default function EducationalLoan () {
  return (
    <section className='educational'>
      <div className="container">
       <div className="row justify-content-center">
        <div className="col-sm-8 text-center">
          <span className="ed">Educational loans</span>
          <img src={shape} alt="Educational loans" className="img-fluid my-5" />
          <p className="text-white">From undergraduate to postgraduate, we are here to ensure<br/>you power through your educational journey without the<br/>limitation of funds.</p>
        </div>
       </div>
      </div>
    </section>
    
  )
}

import cash from "../../assets/advi.svg";
import zero from "../../assets/samright.png";




export default function Dreams () {
  return (
    <section className='pyday pb-0'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-6 mb-3">
            <img src={cash} alt="We have just the right solutions for you" className="img-fluid w-100" />
            
            
          </div>
          <div className="col-sm-5 mt-5">
            <img src={zero} alt="Credible credit solutions" className="img-fluid" />
            <p className="mt-4">
            Give your employees the financial boost they need
            </p>
            <p className="mt-4">
            Provide salary advance options for your employees through our secure, user-friendly, and flexible platforms. 
            </p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

import cash from "../../assets/aproved.png";
import zero from "../../assets/samright.png";




export default function Dreams () {
  return (
    <section className='advance pb-0'>
      <div className='container'>
        <div className="row ">
          <div className="col-sm-7 mb-3">
            <img src={cash} alt="We have just the right solutions for you" className="img-fluid w-100" />
            
            
          </div>
          <div className="col-sm-5 mt-9">
            <img src={zero} alt="salary advance for employees" className="img-fluid" />
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

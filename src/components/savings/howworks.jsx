import automated from "../../assets/hiws.svg";
import register from "../../assets/register.svg";



export default function HowWorks () {
  return (
    <section className='howwork'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <img src={automated} alt="savings" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-11">
            <img src={register} alt="savings" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

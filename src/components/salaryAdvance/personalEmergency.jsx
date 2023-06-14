import emerge from "../../assets/emerge.svg";
import pe from "../../assets/pe.svg";



export default function PE () {
  return (
    <section className='emerge pb-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={pe} alt="personal emergency" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-9 text-center">
            <img src={emerge} alt="personal emergency" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

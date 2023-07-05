import whip from "../../assets/yourwhip.svg";
import cars from "../../assets/cars.png";


export default function YourWhip () {
  return (
    <section className='yourwhip'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-7 text-center">
            <img src={whip} alt="auto loans" className="img-fluid" />
            <p className="text-white mt-5">Enjoy your preferred whip or vehicle, from motorbikes to<br/>private cars, keke, kurope, and others. </p>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 text-center">
            <img src={cars} alt="auto loans" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

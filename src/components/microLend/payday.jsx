import { Fade, Slide } from "react-awesome-reveal";
import aday from "../../assets/aday.svg";




export default function PayBack () {
  return (
    <section className='payback'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <Slide cascade>
              <h2>PAYBACK</h2>
              <h6>with as little as </h6>
              <img src={aday} alt="Micro-lending" className="img-fluid w-100" />
            </Slide>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-4 text-center">
            <Fade>
              <p>Enjoy flexible payment options with Hargon. Payback loans with as little as N430 per day minimum and position yourself for a chance at better credit</p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
    
  )
}

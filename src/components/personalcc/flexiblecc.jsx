import { Fade } from "react-awesome-reveal";
import line from "../../assets/line.svg";




export default function FlexibleCC () {
  return (
    <section className='flex-cc'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <Fade cascade>
              <h2>Flexible <span style={{color: "#218421"}}>credit card</span> options</h2>
              <img src={line} alt="line" className="img-fluid" />
            </Fade>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-6 text-center">
            <Fade cascade>
              <p className="mb-4">Take your pick between our Gold and premium credit options</p>
              <p>Choose between our two credit card options and enter into a new world of sophistication and exclusivity. Hargon’s credit card comes with amazing perks and personalized services</p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
    
  )
}

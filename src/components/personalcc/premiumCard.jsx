import { Slide } from "react-awesome-reveal";
import pocket from "../../assets/pre-card.svg";
import icon from "../../assets/icon.svg";




export default function PremiumCard () {
  return (
    <section className='pcrd pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-5 mb-3">
            <Slide cascade>
              <h2>Hargon’s <span style={{color: "#FF823B"}}>Premium card</span></h2>
              <button
                className="btn btn-primary btn-main rounded-pill py-3 w-87 mt-5"
                href="#!"
                style={{background: "#FF823B"}}
              >
                <img src={icon} alt="icon" className="img-fluid me-2" />Only for those who demand the best
              </button>
            </Slide>
          </div>
          <div className="col-sm-7">
            <img src={pocket} alt="credit card" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

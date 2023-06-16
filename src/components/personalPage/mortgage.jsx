

import dream from "../../assets/dreamhouse.svg";
import mortgage from "../../assets/mort.svg";
import dreamy from "../../assets/dream.svg";


export default function Mortgage() {
  return (
    <section className='mortgage'>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={dream} alt="Mortgage" className="img-fluid" />
          </div>
          <div className="col-sm-6 mt-5">
            <img src={mortgage} alt="mortgage" className="img-fluid" />
            <img src={dreamy} alt="Mortgage" className="img-fluid my-5" />
            <p className="w-75">Experience the joys of owning a home and laying down roots through Hargon's mortgage, where you enjoy flexible and competitive rates.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

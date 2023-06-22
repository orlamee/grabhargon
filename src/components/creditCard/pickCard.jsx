// import { Slide } from "react-awesome-reveal";
import pick from "../../assets/pickacard.svg";
// import ploan from "../../assets/ploan.svg";
// import below from "../../assets/below.svg";




export default function PickCard () {
  return (
    <section className='pickcard'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-5">
            <img src={pick} alt="Pick a Card" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

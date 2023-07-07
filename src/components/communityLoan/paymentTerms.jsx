import how from "../../assets/works.svg";
import hand from "../../assets/hand.png";
import bomb from "../../assets/bomb.png";



export default function PaymentTerms () {
  return (
    <section className='paymentterms'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-5 text-center">
            <img src={how} alt="how it works" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-5 justify-content-between">
          <div className="col-sm-4 mb-3 hand-img">
            <img src={hand} alt="community loan" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6">
            <img src={bomb} alt="community loan" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

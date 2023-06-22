import { Slide } from "react-awesome-reveal";
import cc from "../../assets/topper.svg";
import ploan from "../../assets/ploan.svg";
import below from "../../assets/below.svg";




export default function PaymentLoan () {
  return (
    <section className='cc-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-5">
            <Slide direction="top">
              <img src={cc} alt="Credit-Card" className="img-fluid" />
            </Slide>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <img src={ploan} alt="Credit Card Payment Loans" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-sm-5">
            <Slide direction="right">
              <img src={below} alt="Credit Card Payment Loans" className="img-fluid" />
            </Slide>
          </div>
        </div>
      </div>
    </section>
    
  )
}

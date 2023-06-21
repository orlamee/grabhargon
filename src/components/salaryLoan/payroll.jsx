import sl from "../../assets/s-roll.svg";
import steps from "../../assets/stepper.png";
import { Slide } from "react-awesome-reveal";



export default function Payroll () {
  return (
    <section className='pay-roll'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <img src={sl} alt="Salary Payroll" className="img-fluid" style={{marginLeft : "-37px"}} />
            <Slide cascade>
              <p className="mt-5 mb-4 text-white">Simplify Your Salary Invoicing Process</p>
              <p className="text-white">Eliminate errors and boost productivity with our user-friendly platform, which is designed to make salary invoicing easier for businesses of all sizes. Concentrate on what is most important, like expanding your business – while we handle the complexity of payroll payment</p>
            </Slide>
          </div>
          <div className="col-sm-5 mt-4">
            <img src={steps} alt="Salary Payroll" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

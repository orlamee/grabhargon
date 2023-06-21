import { Fade } from "react-awesome-reveal";
import loan from "../../assets/sa-im.svg";
import salary from "../../assets/salaryad.svg";



export default function EMP() {
  return (
    <section className='emp'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-sm-7 text-center mb-3" style={{marginTop: "200px"}}>
            <img src={salary} alt="Salary Advance for employees" className="img-fluid" />
            <Fade cascade>
              <p className="mt-5 mb-4 text-black">Give your employees the financial boost they need</p>
              <p className="text-black">Provide salary advance options for your employees through our<br/>secure, user-friendly, and flexible platforms.</p>
            </Fade>
          </div>
          <div className="col-sm-5 px-0">
            <img src={loan} alt="Salary Advance for employees" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

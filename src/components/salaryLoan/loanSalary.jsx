import sl from "../../assets/image.png";
import sloan from "../../assets/sls.svg";
import mid from "../../assets/mid.svg";
import down from "../../assets/down.svg";
import { Slide } from "react-awesome-reveal";



export default function LoanSalary () {
  return (
    <section className='loan-sl pb-0'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={sl} alt="Salary Loan" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 mt-2">
            <Slide cascade direction="right">
              <img src={sloan} alt="Salary Loan" className="img-fluid ms-5" />
              <img src={mid} alt="Salary Loan" className="img-fluid" />
              <img src={down} alt="Salary Loan" className="img-fluid" style={{marginTop: "-11px"}}/>
            </Slide>
          </div>
        </div>
      </div>
    </section>
    
  )
}

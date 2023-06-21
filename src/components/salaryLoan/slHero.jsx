import sl from "../../assets/sl-table.png";
import { Fade } from "react-awesome-reveal";



export default function SalaryLoanHero () {
  return (
    <section className='sl-hero'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <Fade cascade>
              <h2 className="mb-5">Guarantee your <span style={{color: "#228B22"}}>employee's</span> satisfaction using our <span style={{color: "#FFA529"}}>Credit 2 Salary</span> platform.</h2>
              <p className="w-75">Ensure your employees are happy and motivated by meeting your financial obligations through our easy-to-use and flexible platform.</p>
            </Fade>
          </div>
          <div className="col-sm-6 mt-2">
            <img src={sl} alt="Salary Loan" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

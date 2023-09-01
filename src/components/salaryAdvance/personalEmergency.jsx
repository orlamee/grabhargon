import emerge from "../../assets/roll-left.svg";
import pe from "../../assets/pe.svg";



export default function PE () {
  return (
    <section className='pyday'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-4 mt-9">
          
            <h2 className="mt-9 mb-3">
            Salary
            <span style={{color: "#23A323"}}>  Payroll </span>
            
            </h2>
            <p className="mt-4">
            Simplify Your Salary Invoicing Process
            </p>
            <p className="mt-4">
            Eliminate errors and boost productivity with our user-friendly platform, which is designed to make salary invoicing easier for businesses of all sizes. Concentrate on what is most important, like expanding your business – while we handle the complexity of payroll payment
            </p>
          </div>
          <div className="col-sm-7">
            <img src={emerge} alt="personal emergency" className="img-fluid w-100" />
          </div>
        </div>
        
         
        
      </div>
    </section>
    
  )
}

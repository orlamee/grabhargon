import ins from "../../assets/int-cred.svg";
import credit from "../../assets/creditalert.png";


export default function InstantCredit () {
  return (
    <section className='inst-cred'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mt-5 mb-3">
            <img src={ins} alt="instant credit" className="img-fluid" />
            <p className="mt-5 w-75 text-black">Get up to N1,000,000 as a salary earner and N500,000 for non-salary earners. With Hargon's quick credit, you will enjoy a flat repayment rate of 1.33%.</p>
          </div>
          <div className="col-sm-5">
            <img src={credit} alt="instant credit" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

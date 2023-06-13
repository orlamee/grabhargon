
import allowance from "../../assets/upkeep.svg";
import full from "../../assets/purple.svg";
import never from "../../assets/never.svg";



export default function Allowance() {
  return (
    <section className='allowance'>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <img src={allowance} alt="allowance" className="img-fluid" />
            <img src={never} alt="loan" className="img-fluid mt-5" style={{marginLeft: "-29px"}} />
            <p className="w-75 mt-5">Get the financial support you need to stay<br/>worry-free throughout your education.</p>
          </div>
          <div className="col-sm-6">
            <img src={full} alt="full" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

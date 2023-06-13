
import salary from "../../assets/salaryadvance.svg";
import stay from "../../assets/stay.svg";
import pixes from "../../assets/im.svg";
import flight from "../../assets/flights.svg";
import pays from "../../assets/pays.png";



export default function SalaryAdvance() {
  return (
    <section className='salaryadvance'>
      <div className="container">
        <div className="salary">
          <div className="row justify-content-center">
            <div className="col-sm-8 text-center">
              <img src={salary} alt="salary" className="img-fluid mb-4" />
              <img src={stay} alt="salary" className="img-fluid mb-4" />
              <p className="text-white">Things happen, and salary may not get here in time. Our salary advance<br/>helps you stay funded against unexpected emergencies.</p>
              <img src={pixes} alt="salary" className="img-fluid mt-5" />
            </div>
          </div>
        </div>
        <div className="row justify-content-between" style={{marginTop: "100px"}}>
          <div className="col-sm-5">
            <img src={flight} alt="flight" className="img-fluid mb-4" />
            <h2><span className="ally">Catch flights</span> on credit</h2>
            <p className="mt-4 w-75">Embark on the adventure of a lifetime and turn your dream vacation into reality without financial constraints.</p>
          </div>
          <div className="col-sm-6 mt-5">
            <img src={pays} alt="pays" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

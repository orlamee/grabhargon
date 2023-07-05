import easy from "../../assets/easy.png";
import right from "../../assets/vehicle.png";


export default function GettingStarted () {
  return (
    <section className='g-started'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h2><span style={{color: "#23A323"}}>Getting started </span>is easy</h2>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-5 text-center">
            <p>Just follow our 5-step processWhether it's your first set of wheels or you're ready to level up to your dream car, our Auto Loan puts you in the driver's seat. With our convenient repayment options, you can hit the road in style while comfortably paying off your loan.</p>
          </div>
        </div>
        <div className="row justify-content-between mt-9">
          <div className="col-sm-7">
            <img src={easy} alt="auto loans" className="img-fluid w-100" />
          </div>
          <div className="col-sm-4">
            <img src={right} alt="auto loans" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

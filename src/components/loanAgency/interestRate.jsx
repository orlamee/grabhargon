import thrive from "../../assets/thrive.svg";
import irate from "../../assets/interest-rate.png";



export default function InterestRate () {
  return (
    <section className='i-rate pb-0'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={irate} alt="interest-rate" className="img-fluid" />
          </div>
          <div className="col-sm-5" style={{marginTop: "110px"}}>
            <img src={thrive} alt="Thrive with Hargon" className="img-fluid mb-4" />
            <p className="w-75 ms-5">Set and achieve your business goals using our credit options as an agency. With Hargon, you can enjoy financial flexibility and backing for all your business objectives.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

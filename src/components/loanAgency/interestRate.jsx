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
            <p className="w-75 ms-5">Enjoy the flex of low-interest credit and attractive payment terms on our platform, empowering you to serve more customers and stand out</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

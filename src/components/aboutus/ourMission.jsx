import left from "../../assets/ourmission.svg";
import mission from "../../assets/aboutright.png";


export default function OurM () {
  return (
    <section className='our-m'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-4 text-center mb-3" style={{marginTop: "150px"}}>
            <img src={left} alt="about-us" className="img-fluid mb-5" />
            <p>To prioritize responsible lending practices, ensure our<br/>customers can manage their repayments comfortably,<br/>and help them build a positive credit history.</p>
          </div>
          <div className="col-sm-6">
            <img src={mission} alt="our mission" className="img-fluid mb-5" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

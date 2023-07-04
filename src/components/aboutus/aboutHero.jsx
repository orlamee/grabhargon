import phone from "../../assets/aboutimg.png";
import down from "../../assets/downn.svg";


export default function AboutHero () {
  return (
    <section className='aboutus-hero'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 mt-5">
            <h6>Welcome to Hargon, Nigeria's multi-faceted credit platform. Hargon is committed to leveraging technology to provide innovative financial solutions and empower individuals and businesses nationwide.</h6>
            <img src={down} alt="about us" className="img-fluid mt-5" />
          </div>
          <div className="col-sm-5">
            <img src={phone} alt="about us" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

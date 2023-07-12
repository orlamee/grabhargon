import { Link } from "react-router-dom";
import builder from "../../assets/builder.png";
import downloads from "../../assets/users.svg";
import meter from "../../assets/meter.png";
import invest from "../../assets/inves.png";



export default function CBHero () {
  return (
    <section className='builder-hero'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 mt-3">
            <h2 className="mb-5">Tell the right story using <span style={{color: "#23A323"}}>Hargon's credit builder</span></h2>
            <Link
              className="btn btn-primary btn-main rounded-pill px-5 py-3"
              to="/grabhargon"
            >
              Get Started Now
            </Link>
            <div className="mt-5"><img src={downloads} alt="credit builder" className="img-fluid" /></div>
          </div>
          <div className="col-sm-6">
            <img src={builder} alt="credit builder" className="img-fluid w-100" />
          </div>
        </div>
      </div>
      <div className='container' style={{marginTop: "120px"}}>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 mt-5">
            <h2 className="mb-5">Become <span style={{color: "#23A323"}}>more attractive</span> financially</h2>
            <p className="w-75">Improve your credit score using Hargon's innovative credit builder. The perfect tool to overcome poor credit and demonstrate a stronger financial position.</p>
          </div>
          <div className="col-sm-6">
            <img src={meter} alt="credit builder" className="img-fluid w-100" />
          </div>
        </div>
      </div>
      <div className='container' style={{marginTop: "120px"}}>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={invest} alt="credit builder" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 mt-9">
            <h2 className="mb-5"><span style={{color: "#23A323"}}>Access loans</span> through stable investments</h2>
            <p className="w-75">Struggling with poor credit score? We have a way out for you. You can access credit using our investment strategy and building a mouthwatering portfolio.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

import { Link } from "react-router-dom";
import automated from "../../assets/automated.png";



export default function IntegrateHero () {
  return (
    <section className='integrate-hero ps-3'>
      <div className='container-fluid'>
        <div className="row justify-content-between">
          <div className="col-lg-4 mb-3 offset-md-2 p-0" style={{marginTop: "135px"}}>
            <h2 className="mb-5">Simplify the <span style={{color: "#23A323"}}>checkout</span> for your customers</h2>
            <p>Welcome to Hargon's Integration Wonderland, where we connect the dots and make your financial journey even more magical. With our innovative integration services, we bring Hargon's lending and payment solutions to your favorite platforms, creating a seamless experience for users like never before. </p>
            <Link
              className="btn btn-primary btn-main rounded-pill px-5 py-3 mt-5"
              to="/grabhargon"
            >
               Get in touch with us
            </Link>
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={automated} alt="career" className="img-fluid w-100" />
          </div>
        </div>
        
      </div>
    </section>
    
  )
}

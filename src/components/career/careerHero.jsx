import { Link } from "react-router-dom";
import career from "../../assets/careerimg.png";
import see from "../../assets/see.svg";



export default function CareerHero () {
  return (
    <section className='career-hero'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 mt-5">
            <h2 className="mb-5 text-white">Impacting lives through finance and tech</h2>
            <p className="text-white">At Hargon, we believe in individuals' power and potential to positively impact society. Join us and become part of a dynamic company transforming the credit culture in Nigeria and Africa. With us, you have unlimited opportunities for growth and development, but most importantly, the chance to transform countless lives.</p>
          </div>
          <div className="col-sm-6">
            <img src={career} alt="career" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-sm-3 text-center">
            <Link><img src={see} alt="see available jobs" className="img-fluid" /></Link>
          </div>
        </div>
      </div>
    </section>
    
  )
}

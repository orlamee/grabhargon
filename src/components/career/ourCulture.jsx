import career from "../../assets/ocimg.png";
import culture from "../../assets/ourculture.svg";
import oc from "../../assets/diver.png";



export default function OurCulture () {
  return (
    <section className='our-c'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <img src={culture} alt="Our Culture" className="img-fluid" />
            <p className="text-white w-50 mt-5">We take immense pride in our culture and cannot wait for you to be a part of it. We aim to be the first option for our customers, but we need to start at home. That is where you come in.</p>
            <p className="text-white mt-3">These are the pillars of Hargon's culture</p>
          </div>
          <div className="col-sm-6">
            <img src={career} alt="career" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-sm-12">
            <img src={oc} alt="culture" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

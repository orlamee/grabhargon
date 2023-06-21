import sl from "../../assets/fife.png";
import { Fade } from "react-awesome-reveal";



export default function MicroHero () {
  return (
    <section className='ml-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mt-3">
            <Fade cascade>
              <h2><span className="fife">Financial inclusion</span></h2>
              <h2 className="">for everyone</h2>
              <p className="mt-5 mb-4">Providing credit for the underserved</p>
              <p className="w-75">Accessible credit lifeline for underserved people who wish to start a business or take the first step towards breaking unfair financial barriers.</p>
            </Fade>
          </div>
          <div className="col-sm-6 mt-2">
            <img src={sl} alt="Micro-lending" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

import { Fade } from "react-awesome-reveal";
import map from "../../assets/mapphone.png";



export default function BusinessExpansion () {
  return (
    <section className='be-sec'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-12 mb-3 text-center">
            <h2 className="ally">Business Expansion</h2>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-5 mb-3 text-center">
            <Fade cascade>
              <p className="mb-3 text-black">Stop planning, time to act</p>
              <p className="text-black">Don’t let low cash flow hold you back, expand the potentials of your business with flexible and tailored loans from Hargon.</p>
            </Fade>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 mb-3 text-center">
            <img src={map} alt="map" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

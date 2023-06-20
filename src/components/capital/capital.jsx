import irate from "../../assets/carder.svg";
import vec from "../../assets/vec.svg";
import arrow from "../../assets/arr.svg";
import { Fade } from "react-awesome-reveal";



export default function Capital () {
  return (
    <section className='cap'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3">
            <img src={irate} alt="Hargon capital" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 mt-5">
            <Fade cascade >
              <h2>Capital</h2>
              <img src={vec} alt="capital" className="img-fluid" style={{marginTop: "-45px"}} />
              <img src={arrow} alt="capital" className="img-fluid float-end" />
              <div className="text-center" style={{marginTop: "150px"}}>
                <p className="text-center mb-3">From paper to real life</p>
                <p className="text-center">Transform your business dreams into reality with our strategic loans. From the initial capital to ongoing finance, we are happy to back you, every step of the way.</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
    
  )
}

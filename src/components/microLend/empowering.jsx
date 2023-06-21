import { Slide } from "react-awesome-reveal";
import sale from "../../assets/sale.png";




export default function Empowering () {
  return (
    <section className='empower'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-7">
            <Slide>
              <h2><span style={{color: "#FFBD00"}}>Empowering</span> you one loan at a time</h2>
            </Slide>
          </div>
          <div className="col-sm-4 mt-5">
            <p className="text-white w-87">Make a small one-time loan but become eligible for more when you pay back on time</p>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-sm-8">
            <img src={sale} alt="Micro-lending" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

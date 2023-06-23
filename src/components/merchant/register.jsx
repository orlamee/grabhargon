import { Fade } from "react-awesome-reveal";



export default function Register () {
  return (
    <section className='reg'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <h2><span style={{color: "#228B22"}}>How to Register</span> on Hargon</h2>
          </div>
          <div className="col-sm-5 mt-2">
            <Fade cascade>
              <p className="text-black">Registering on Hargon’s marketplace has been simplified<br/>for you</p>
              <button
                className="btn btn-primary btn-main rounded-pill px-5 py-3 mt-4"
                href="#!"
              >
                Sell on Hargon’s Marketplace
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </section>
    
  )
}

import process from "../../assets/TheProcess.svg";
import logo from "../../assets/logohouse.svg";




export default function TheProcess () {
  return (
    <section className='pt-0 px-0 pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-12">
            <img src={process} alt="The Process" className="img-fluid w-100" />
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-sm-6 mb-3 ps-0">
            <div className="card-app">
              <div className="row justify-content-center">
                <div className="col-sm-5 text-center">
                  <h2 className="text-white mt-5">Apply</h2>
                  <p className="text-white mt-5">Have an interest in working with us? We are happy to hear from you. View our job listings and apply to your preferred positions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3 pe-0">
            <div className="card-app tw">
              <div className="row justify-content-center">
                <div className="col-sm-5 text-center">
                  <h2 className="text-white mt-5">Test</h2>
                  <p className="text-white mt-5">We give you comprehensive but friendly tests to verify you are the right for our company.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-3 ps-0">
            <div className="card-app th">
              <div className="row justify-content-center">
                <div className="col-sm-5 text-center">
                  <h2 className="text-white mt-5">Interview</h2>
                  <p className="text-white mt-5">Communication is our core value, and at this stage, we are trying to connect with you and hear all about your experience.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3 pe-0">
            <div className="card-app fou">
              <div className="row justify-content-center">
                <div className="col-sm-5 text-center">
                  <h2 className="text-white mt-5">Decision</h2>
                  <p className="text-white mt-5">It can be hard, but we have to make a decision. We hope you are the right fit for us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center logotop">
          <div className="col-sm-6 text-center">
            <img src={logo} alt="logo" className="img-fluid" style={{marginTop: "-1500px"}} />
          </div>
        </div>
      </div>
    </section>
    
  )
}

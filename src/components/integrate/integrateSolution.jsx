import solution from "../../assets/solution.png";
import logo from "../../assets/logos.svg";



export default function IntegrateSolution () {
  return (
    <section className='integrate-sol'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h2 className="mb-5">Our <span style={{color: "#23A323"}}>Integration</span> solutions</h2>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-sm-5">
            <div className="sol-box">
              <h3>Pay Later</h3>
              <h6 className="w-50 mt-4">Your customers can buy now and make payments later while you get your money in full.</h6>
            </div>
            <div className="sol-box sol-box-2">
              <h3 style={{color: "#FFBD00"}}>Credit Card Payment</h3>
              <h6 className="w-50 mt-4">Boost sales and revenue by offering your customer multiple payment options.</h6>
            </div>
            <div className="sol-box sol-box-3">
              <h3 style={{color: "#2D79FD"}}>Credit Score</h3>
              <h6 className="w-50 mt-4">You can verify the credit score of your businesses and make informed decisions about partnering with them.</h6>
            </div>
          </div>
          <div className="col-sm-7">
            <img src={solution} alt="solutions" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row justify-content-center" style={{marginTop: "130px"}}>
          <div className="col-sm-10 text-center">
            <h2>Easy <span style={{color: "#23A323"}}>Checkout integration</span></h2>
            <img src={logo} alt="logo integrations" className="img-fluid w-100 mt-9" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

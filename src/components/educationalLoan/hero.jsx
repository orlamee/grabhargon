import loan from "../../assets/educational.png";
import lower from "../../assets/lower.svg";



export default function Hero () {
  return (
    <section className='edu-hero'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0" style={{marginTop: "135px"}}>
            <span className="edul">Educational loans</span>
            <h2 className="my-4">Seize the opportunity<span className="ally"> Invest in your future.</span></h2>
            <p className="w-75 mb-5">Education is a right and one of the surest paths to a bright future. So why let financial limitations hold you back when you can partner with Hargon and turn your educational aspirations into your reality?</p>
            <img src={lower} alt="lower" className="img-fluid" />
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={loan} alt="loan" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

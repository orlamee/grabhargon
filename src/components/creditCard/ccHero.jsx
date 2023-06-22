import enjoy from "../../assets/enjoyflex.svg";
import all from "../../assets/all.png";
import { Fade } from "react-awesome-reveal";



export default function CreditCardHero () {
  return (
    <section className='cc-hero pb-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <Fade>
              <img src={enjoy} alt="flexible payment" className="img-fluid"/>
            </Fade>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-sm-6 text-center">
            <Fade >
              <p>Need funds on the go? Hargon’s credit card offers you instant access to credit. With our wallet, you never have to worry about long wait times and get the financial flexibility you deserve.</p>
            </Fade>
          </div>
        </div>
        <div className="row justify-content-center" style={{marginTop: "100px"}}>
          <div className="col-sm-10 text-center">
            <img src={all} alt="flexible payment" className="img-fluid w-100"/>
          </div>
        </div>
      </div>
    </section>
    
  )
}

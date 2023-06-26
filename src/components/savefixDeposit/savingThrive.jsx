import iu from "../../assets/iu.svg";
import cb from "../../assets/cb.svg";
import sr from "../../assets/sr.svg";
import cir from "../../assets/cir.svg";
import gos from "../../assets/gos.svg";
import edaw from "../../assets/edaw.svg";



export default function SavingThrive () {
  return (
    <section className='savingthrive'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-7">
           <h3>Watch Your Savings Thrive,</h3>
           <h2>Your Dreams Come Alive – <span className="ally">Invest with Hargon</span></h2>
          </div>
        </div>
        <div className="mt-9">
          <div className="row justify-content-between mb-4">
            <div className="col-sm-4 mb-2">
              <div className="thrive-card">
                <img src={iu} alt="interest upfront" className="img-fluid" />
                <h6 className="my-4">Interest upfront</h6>
                <p className="w-75">Start Strong, Grow Faster: Interest Upfront on Your Savings</p>
              </div>
            </div>
            <div className="col-sm-4 mb-2">
              <div className="thrive-card">
                <img src={cb} alt="cashback" className="img-fluid" />
                <h6 className="my-4">Cashback</h6>
                <p className="w-75">Unlock Extra Cash, Cashback to Fuel Your Financial Goals with Hargon. It’s a win-win for you!</p>
              </div>
            </div>
            <div className="col-sm-4 mb-2">
              <div className="thrive-card">
                <img src={sr} alt="interest upfront" className="img-fluid" />
                <h6 className="my-4">Secure and Reliable</h6>
                <p className="w-75">Safeguard your funds with our trusted and regulated platform</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-sm-4 mb-2">
              <div className="thrive-card">
                <img src={cir} alt="interest upfront" className="img-fluid" />
                <h6 className="my-4">Competitive Interest Rates</h6>
                <p className="w-75">Watch your savings grow with our attractive interest rates</p>
              </div>
            </div>
            <div className="col-sm-4 mb-2">
              <div className="thrive-card">
                <img src={edaw} alt="cashback" className="img-fluid" />
                <h6 className="my-4">Easy Deposits and Withdrawals</h6>
                <p className="w-75">Conveniently deposit and withdraw funds whenever you need</p>
              </div>
            </div>
            <div className="col-sm-4 mb-2">
              <div className="thrive-card">
                <img src={gos} alt="interest upfront" className="img-fluid" />
                <h6 className="my-4">Goal-Oriented Savings</h6>
                <p className="w-75">Set financial goals and track your progress with ease</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
